import { getExercise } from "./exercises";
import { startOfDay } from "./format";
import type { Session, SessionExercise, WorkoutSet } from "./types";

export function setVolume(set: WorkoutSet): number {
  if (!set.completed) return 0;
  return set.weight * set.reps;
}

export function exerciseVolume(ex: SessionExercise): number {
  return ex.sets.reduce((sum, s) => sum + setVolume(s), 0);
}

export function sessionVolume(session: Session): number {
  return session.exercises.reduce((sum, ex) => sum + exerciseVolume(ex), 0);
}

export function sessionSetCount(session: Session): { done: number; total: number } {
  let done = 0;
  let total = 0;
  for (const ex of session.exercises) {
    for (const s of ex.sets) {
      total += 1;
      if (s.completed) done += 1;
    }
  }
  return { done, total };
}

/** Epley 1RM. Returns 0 if unusable. */
export function epley1rm(weight: number, reps: number): number {
  if (weight <= 0 || reps <= 0) return 0;
  if (reps === 1) return weight;
  if (reps > 12) return 0;
  return weight * (1 + reps / 30);
}

export type PersonalRecord = {
  exerciseId: string;
  weight: number;
  reps: number;
  e1rm: number;
  at: number;
};

export function bestRecords(sessions: Session[]): Map<string, PersonalRecord> {
  const map = new Map<string, PersonalRecord>();
  for (const session of sessions) {
    if (!session.finishedAt) continue;
    for (const ex of session.exercises) {
      for (const s of ex.sets) {
        if (!s.completed || s.weight <= 0 || s.reps <= 0) continue;
        const e1rm = epley1rm(s.weight, s.reps) || s.weight;
        const prev = map.get(ex.exerciseId);
        if (!prev || e1rm > prev.e1rm) {
          map.set(ex.exerciseId, {
            exerciseId: ex.exerciseId,
            weight: s.weight,
            reps: s.reps,
            e1rm,
            at: session.finishedAt,
          });
        }
      }
    }
  }
  return map;
}

export function isSetPR(
  records: Map<string, PersonalRecord>,
  exerciseId: string,
  weight: number,
  reps: number,
  excludeSessionId?: string,
): boolean {
  void excludeSessionId;
  const e1rm = epley1rm(weight, reps) || weight;
  const prev = records.get(exerciseId);
  if (!prev) return weight > 0 && reps > 0;
  return e1rm > prev.e1rm + 0.05;
}

export function lastPerformance(
  sessions: Session[],
  exerciseId: string,
  beforeTs?: number,
): WorkoutSet[] | null {
  const cutoff = beforeTs ?? Date.now();
  for (const session of sessions) {
    if (!session.finishedAt || session.finishedAt >= cutoff) continue;
    const ex = session.exercises.find((e) => e.exerciseId === exerciseId);
    if (!ex) continue;
    const done = ex.sets.filter((s) => s.completed);
    if (done.length) return done;
  }
  return null;
}

export function currentStreak(sessions: Session[]): number {
  const days = new Set(
    sessions
      .filter((s) => s.finishedAt)
      .map((s) => startOfDay(s.finishedAt!)),
  );
  if (days.size === 0) return 0;
  const today = startOfDay();
  const yesterday = today - 86_400_000;
  let cursor = days.has(today) ? today : days.has(yesterday) ? yesterday : 0;
  if (!cursor) return 0;
  let n = 0;
  while (days.has(cursor)) {
    n += 1;
    cursor -= 86_400_000;
  }
  return n;
}

export function sessionsThisWeek(sessions: Session[]): Session[] {
  const now = new Date();
  const day = now.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = startOfDay(now.getTime() + mondayOffset * 86_400_000);
  return sessions.filter((s) => s.finishedAt && s.finishedAt >= monday);
}

export function trainedDayKeys(sessions: Session[]): Set<string> {
  const keys = new Set<string>();
  for (const s of sessions) {
    if (!s.finishedAt) continue;
    const d = new Date(s.finishedAt);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    keys.add(`${y}-${m}-${day}`);
  }
  return keys;
}

export function weeklyVolumeSeries(
  sessions: Session[],
  weeks = 8,
): { label: string; volume: number }[] {
  const now = new Date();
  const day = now.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const thisMonday = startOfDay(now.getTime() + mondayOffset * 86_400_000);
  const out: { label: string; volume: number }[] = [];
  for (let i = weeks - 1; i >= 0; i--) {
    const start = thisMonday - i * 7 * 86_400_000;
    const end = start + 7 * 86_400_000;
    const volume = sessions
      .filter((s) => s.finishedAt && s.finishedAt >= start && s.finishedAt < end)
      .reduce((sum, s) => sum + sessionVolume(s), 0);
    const d = new Date(start);
    out.push({
      label: `${d.getDate()}/${d.getMonth() + 1}`,
      volume: Math.round(volume),
    });
  }
  return out;
}

export function topRecords(
  sessions: Session[],
  limit = 4,
): PersonalRecord[] {
  const all = [...bestRecords(sessions).values()];
  all.sort((a, b) => b.e1rm - a.e1rm);
  return all.filter((r) => getExercise(r.exerciseId)).slice(0, limit);
}

export function exerciseHistory(
  sessions: Session[],
  exerciseId: string,
): { at: number; bestE1rm: number; bestWeight: number; volume: number }[] {
  const rows: { at: number; bestE1rm: number; bestWeight: number; volume: number }[] = [];
  const finished = [...sessions]
    .filter((s) => s.finishedAt)
    .sort((a, b) => a.finishedAt! - b.finishedAt!);
  for (const s of finished) {
    const ex = s.exercises.find((e) => e.exerciseId === exerciseId);
    if (!ex) continue;
    const done = ex.sets.filter((x) => x.completed && x.weight > 0);
    if (!done.length) continue;
    let bestE1rm = 0;
    let bestWeight = 0;
    for (const set of done) {
      bestWeight = Math.max(bestWeight, set.weight);
      bestE1rm = Math.max(bestE1rm, epley1rm(set.weight, set.reps) || set.weight);
    }
    rows.push({
      at: s.finishedAt!,
      bestE1rm,
      bestWeight,
      volume: exerciseVolume(ex),
    });
  }
  return rows;
}
