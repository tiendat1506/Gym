import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { uid } from "@/lib/utils";
import { getExercise } from "./exercises";
import { getProgram } from "./programs";
import { lastPerformance } from "./stats";
import { isoDay } from "./format";
import type {
  BodyLog,
  Goal,
  Level,
  Profile,
  ProgramItem,
  Session,
  SessionExercise,
  WorkoutSet,
} from "./types";

type GymState = {
  hydrated: boolean;
  onboarded: boolean;
  profile: Profile;
  activeProgramId: string | null;
  lastProgramDayIndex: number;
  sessions: Session[];
  activeSession: Session | null;
  restUntil: number | null;
  bodyLogs: BodyLog[];
  setHydrated: (v: boolean) => void;
  completeOnboarding: (input: {
    name: string;
    goal: Goal;
    level: Level;
    programId: string;
  }) => void;
  updateProfile: (patch: Partial<Profile>) => void;
  setProgram: (programId: string | null) => void;
  startFromProgram: (programId: string, dayIndex: number) => Session;
  startEmpty: (name?: string) => Session;
  updateSet: (
    exerciseIndex: number,
    setIndex: number,
    patch: Partial<Pick<WorkoutSet, "weight" | "reps">>,
  ) => void;
  toggleSet: (exerciseIndex: number, setIndex: number) => void;
  addSet: (exerciseIndex: number) => void;
  removeSet: (exerciseIndex: number, setIndex: number) => void;
  addExercise: (exerciseId: string) => void;
  removeExercise: (exerciseIndex: number) => void;
  startRest: (seconds: number) => void;
  skipRest: () => void;
  adjustRest: (deltaSec: number) => void;
  finishWorkout: () => Session | null;
  discardWorkout: () => void;
  deleteSession: (id: string) => void;
  addBodyLog: (weight: number, date?: string) => void;
  deleteBodyLog: (id: string) => void;
  resetAll: () => void;
};

const defaultProfile: Profile = {
  name: "",
  goal: "muscle",
  level: "beginner",
  restDefault: 90,
};

function setsFromItem(
  item: ProgramItem,
  previous: WorkoutSet[] | null,
): WorkoutSet[] {
  const count = item.sets;
  return Array.from({ length: count }, (_, i) => {
    const prev = previous?.[i];
    return {
      id: uid(),
      weight: prev?.weight ?? 0,
      reps: prev?.reps ?? item.reps,
      completed: false,
    };
  });
}

function sessionFromItems(
  name: string,
  items: ProgramItem[],
  history: Session[],
  programId?: string,
  dayIndex?: number,
): Session {
  const exercises: SessionExercise[] = items
    .filter((it) => getExercise(it.exerciseId))
    .map((it) => ({
      id: uid(),
      exerciseId: it.exerciseId,
      rest: it.rest,
      sets: setsFromItem(it, lastPerformance(history, it.exerciseId)),
    }));
  return {
    id: uid(),
    name,
    programId,
    dayIndex,
    startedAt: Date.now(),
    exercises,
  };
}

export const useGymStore = create<GymState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      onboarded: false,
      profile: defaultProfile,
      activeProgramId: null,
      lastProgramDayIndex: -1,
      sessions: [],
      activeSession: null,
      restUntil: null,
      bodyLogs: [],
      setHydrated: (v) => set({ hydrated: v }),
      completeOnboarding: ({ name, goal, level, programId }) => {
        set({
          onboarded: true,
          profile: {
            name: name.trim() || "Bạn",
            goal,
            level,
            restDefault: level === "beginner" ? 90 : 120,
          },
          activeProgramId: programId,
          lastProgramDayIndex: -1,
        });
      },
      updateProfile: (patch) =>
        set((s) => ({ profile: { ...s.profile, ...patch } })),
      setProgram: (programId) =>
        set({ activeProgramId: programId, lastProgramDayIndex: -1 }),
      startFromProgram: (programId, dayIndex) => {
        const program = getProgram(programId);
        if (!program) return get().startEmpty();
        const day = program.days[dayIndex] ?? program.days[0]!;
        const session = sessionFromItems(
          day.name,
          day.items,
          get().sessions,
          programId,
          dayIndex,
        );
        set({ activeSession: session, restUntil: null });
        return session;
      },
      startEmpty: (name = "Buổi tự do") => {
        const session: Session = {
          id: uid(),
          name,
          startedAt: Date.now(),
          exercises: [],
        };
        set({ activeSession: session, restUntil: null });
        return session;
      },
      updateSet: (exerciseIndex, setIndex, patch) => {
        const active = get().activeSession;
        if (!active) return;
        const exercises = active.exercises.map((ex, i) => {
          if (i !== exerciseIndex) return ex;
          return {
            ...ex,
            sets: ex.sets.map((s, j) => (j === setIndex ? { ...s, ...patch } : s)),
          };
        });
        set({ activeSession: { ...active, exercises } });
      },
      toggleSet: (exerciseIndex, setIndex) => {
        const active = get().activeSession;
        if (!active) return;
        const target = active.exercises[exerciseIndex]?.sets[setIndex];
        if (!target) return;
        const completing = !target.completed;
        const exercises = active.exercises.map((ex, i) => {
          if (i !== exerciseIndex) return ex;
          const sets = ex.sets.map((s, j) => {
            if (j !== setIndex) return s;
            return { ...s, completed: completing };
          });
          if (completing) {
            const next = sets[setIndex + 1];
            const cur = sets[setIndex];
            if (next && !next.completed && next.weight === 0 && cur) {
              sets[setIndex + 1] = {
                ...next,
                weight: cur.weight,
                reps: cur.reps,
              };
            }
          }
          return { ...ex, sets };
        });
        const rest = completing
          ? (active.exercises[exerciseIndex]?.rest ?? get().profile.restDefault)
          : 0;
        set({
          activeSession: { ...active, exercises },
          restUntil: completing && rest > 0 ? Date.now() + rest * 1000 : get().restUntil,
        });
      },
      addSet: (exerciseIndex) => {
        const active = get().activeSession;
        if (!active) return;
        const exercises = active.exercises.map((ex, i) => {
          if (i !== exerciseIndex) return ex;
          const last = ex.sets[ex.sets.length - 1];
          return {
            ...ex,
            sets: [
              ...ex.sets,
              {
                id: uid(),
                weight: last?.weight ?? 0,
                reps: last?.reps ?? 8,
                completed: false,
              },
            ],
          };
        });
        set({ activeSession: { ...active, exercises } });
      },
      removeSet: (exerciseIndex, setIndex) => {
        const active = get().activeSession;
        if (!active) return;
        const exercises = active.exercises.map((ex, i) => {
          if (i !== exerciseIndex) return ex;
          if (ex.sets.length <= 1) return ex;
          return { ...ex, sets: ex.sets.filter((_, j) => j !== setIndex) };
        });
        set({ activeSession: { ...active, exercises } });
      },
      addExercise: (exerciseId) => {
        const active = get().activeSession;
        if (!active) return;
        if (active.exercises.some((e) => e.exerciseId === exerciseId)) return;
        const prev = lastPerformance(get().sessions, exerciseId);
        const rest = get().profile.restDefault;
        const sets: WorkoutSet[] = (prev && prev.length
          ? prev
          : [{ id: "", weight: 0, reps: 10, completed: false }]
        ).map((s) => ({
          id: uid(),
          weight: s.weight,
          reps: s.reps || 10,
          completed: false,
        }));
        while (sets.length < 3) {
          const last = sets[sets.length - 1];
          sets.push({
            id: uid(),
            weight: last?.weight ?? 0,
            reps: last?.reps ?? 10,
            completed: false,
          });
        }
        set({
          activeSession: {
            ...active,
            exercises: [
              ...active.exercises,
              { id: uid(), exerciseId, rest, sets },
            ],
          },
        });
      },
      removeExercise: (exerciseIndex) => {
        const active = get().activeSession;
        if (!active) return;
        set({
          activeSession: {
            ...active,
            exercises: active.exercises.filter((_, i) => i !== exerciseIndex),
          },
        });
      },
      startRest: (seconds) => set({ restUntil: Date.now() + seconds * 1000 }),
      skipRest: () => set({ restUntil: null }),
      adjustRest: (deltaSec) => {
        const until = get().restUntil;
        if (!until) return;
        const next = Math.max(Date.now() + 1000, until + deltaSec * 1000);
        set({ restUntil: next });
      },
      finishWorkout: () => {
        const active = get().activeSession;
        if (!active) return null;
        const finished: Session = {
          ...active,
          finishedAt: Date.now(),
          durationSec: Math.max(
            1,
            Math.round((Date.now() - active.startedAt) / 1000),
          ),
        };
        const dayIndex = active.dayIndex;
        set((s) => ({
          sessions: [finished, ...s.sessions].slice(0, 250),
          activeSession: null,
          restUntil: null,
          lastProgramDayIndex:
            typeof dayIndex === "number" ? dayIndex : s.lastProgramDayIndex,
        }));
        return finished;
      },
      discardWorkout: () => set({ activeSession: null, restUntil: null }),
      deleteSession: (id) =>
        set((s) => ({ sessions: s.sessions.filter((x) => x.id !== id) })),
      addBodyLog: (weight, date) => {
        const day = date ?? isoDay();
        set((s) => {
          const without = s.bodyLogs.filter((b) => b.date !== day);
          return {
            bodyLogs: [...without, { id: uid(), date: day, weight }].sort((a, b) =>
              a.date.localeCompare(b.date),
            ),
          };
        });
      },
      deleteBodyLog: (id) =>
        set((s) => ({ bodyLogs: s.bodyLogs.filter((b) => b.id !== id) })),
      resetAll: () =>
        set({
          onboarded: false,
          profile: defaultProfile,
          activeProgramId: null,
          lastProgramDayIndex: -1,
          sessions: [],
          activeSession: null,
          restUntil: null,
          bodyLogs: [],
        }),
    }),
    {
      name: "forge-gym-v1",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (s) => ({
        onboarded: s.onboarded,
        profile: s.profile,
        activeProgramId: s.activeProgramId,
        lastProgramDayIndex: s.lastProgramDayIndex,
        sessions: s.sessions,
        activeSession: s.activeSession,
        restUntil: s.restUntil,
        bodyLogs: s.bodyLogs,
      }),
    },
  ),
);

export function rehydrateGymStore(): void {
  const finish = () => {
    if (!useGymStore.getState().hydrated) {
      useGymStore.getState().setHydrated(true);
    }
  };
  try {
    const result: unknown = useGymStore.persist.rehydrate();
    if (
      result != null &&
      typeof result === "object" &&
      "then" in result &&
      typeof (result as Promise<void>).then === "function"
    ) {
      void (result as Promise<void>).then(finish, finish);
    } else {
      finish();
    }
  } catch {
    finish();
  }
  window.setTimeout(finish, 50);
}
