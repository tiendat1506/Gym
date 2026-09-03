import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Flame, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { requireExercise } from "@/lib/gym/exercises";
import {
  formatDate,
  formatKg,
  formatVolume,
  isoDay,
  weekdayDots,
} from "@/lib/gym/format";
import { getProgram } from "@/lib/gym/programs";
import {
  currentStreak,
  lastPerformance,
  sessionVolume,
  sessionsThisWeek,
  topRecords,
  trainedDayKeys,
} from "@/lib/gym/stats";
import { useGymStore } from "@/lib/gym/store";

export const Route = createFileRoute("/")({ component: Home });

function greeting(name: string): string {
  const h = new Date().getHours();
  const who = name || "bạn";
  if (h < 11) return `Chào buổi sáng, ${who}`;
  if (h < 17) return `Chào buổi chiều, ${who}`;
  return `Chào buổi tối, ${who}`;
}

function Home() {
  const navigate = useNavigate();
  const profile = useGymStore((s) => s.profile);
  const sessions = useGymStore((s) => s.sessions);
  const activeSession = useGymStore((s) => s.activeSession);
  const activeProgramId = useGymStore((s) => s.activeProgramId);
  const lastProgramDayIndex = useGymStore((s) => s.lastProgramDayIndex);
  const startFromProgram = useGymStore((s) => s.startFromProgram);
  const startEmpty = useGymStore((s) => s.startEmpty);

  const program = getProgram(activeProgramId);
  const nextIndex = program
    ? (lastProgramDayIndex + 1) % program.days.length
    : 0;
  const today = program?.days[nextIndex];
  const week = sessionsThisWeek(sessions);
  const streak = currentStreak(sessions);
  const trained = trainedDayKeys(sessions);
  const dots = weekdayDots();
  const records = topRecords(sessions, 3);
  const weekVolume = week.reduce((sum, s) => sum + sessionVolume(s), 0);
  const todayKey = isoDay();

  function startToday() {
    if (activeSession) {
      void navigate({ to: "/workout" });
      return;
    }
    if (program && today) {
      startFromProgram(program.id, nextIndex);
    } else {
      startEmpty();
    }
    void navigate({ to: "/workout" });
  }

  function startBlank() {
    if (!activeSession) startEmpty();
    void navigate({ to: "/workout" });
  }

  return (
    <main className="px-5 pt-8 pb-36">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-sm font-semibold tracking-widest text-muted">
            FORGE
          </p>
          <h1 className="mt-3 font-display text-4xl leading-none font-semibold tracking-tight">
            {greeting(profile.name)}
          </h1>
          <p className="mt-2 text-sm text-muted capitalize">{formatDate(Date.now())}</p>
        </div>
        <Link
          to="/profile"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-elevated font-display text-lg font-semibold"
        >
          {(profile.name || "F").slice(0, 1).toUpperCase()}
        </Link>
      </header>

      <section className="mt-8 grid grid-cols-3 gap-2">
        <Stat label="Streak" value={`${streak}`} hint="ngày" />
        <Stat label="Tuần này" value={`${week.length}`} hint="buổi" />
        <Stat label="Volume" value={formatVolume(weekVolume).replace(" kg", "")} hint="kg" />
      </section>

      <section className="mt-4 flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
        {dots.map((d) => {
          const on = trained.has(d.key);
          const isToday = d.key === todayKey;
          return (
            <div key={d.key} className="flex flex-col items-center gap-2">
              <span className="text-xs tracking-wide text-subtle">{d.label}</span>
              <span
                className={
                  on
                    ? "size-2 rounded-full bg-accent"
                    : isToday
                      ? "size-2 rounded-full border border-fg"
                      : "size-2 rounded-full bg-elevated"
                }
              />
            </div>
          );
        })}
      </section>

      <section className="mt-6 rounded-xl border border-border bg-surface p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs tracking-widest text-muted uppercase">Hôm nay</p>
          {streak > 0 ? (
            <span className="inline-flex items-center gap-1 text-xs text-accent">
              <Flame className="size-3.5" /> {streak} ngày
            </span>
          ) : null}
        </div>
        {activeSession ? (
          <>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              Đang tập · {activeSession.name}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {activeSession.exercises.length} bài · chạm để tiếp tục
            </p>
          </>
        ) : today ? (
          <>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              {today.name}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {today.focus} · {today.items.length} bài
            </p>
            <ul className="mt-4 space-y-2">
              {today.items.slice(0, 4).map((item) => {
                const ex = requireExercise(item.exerciseId);
                const last = lastPerformance(sessions, item.exerciseId);
                const top = last?.[0];
                return (
                  <li
                    key={item.exerciseId}
                    className="flex items-baseline justify-between gap-3 text-sm"
                  >
                    <span className="truncate">{ex.name}</span>
                    <span className="shrink-0 tabular-nums text-muted">
                      {item.sets}×{item.reps}
                      {top ? ` · ${formatKg(top.weight)}kg` : ""}
                    </span>
                  </li>
                );
              })}
              {today.items.length > 4 ? (
                <li className="text-xs text-subtle">
                  +{today.items.length - 4} bài nữa
                </li>
              ) : null}
            </ul>
          </>
        ) : (
          <>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              Buổi tự do
            </h2>
            <p className="mt-1 text-sm text-muted">
              Chưa chọn giáo án. Thêm bài khi bắt đầu.
            </p>
          </>
        )}
        <Button className="mt-5 w-full" size="xl" onClick={startToday}>
          <Play className="size-4" />
          {activeSession ? "Tiếp tục buổi tập" : "Bắt đầu buổi tập"}
        </Button>
        {!activeSession ? (
          <button
            type="button"
            onClick={startBlank}
            className="mt-3 w-full text-center text-sm text-muted hover:text-fg"
          >
            Hoặc bắt đầu buổi trống
          </button>
        ) : null}
      </section>

      {program ? (
        <p className="mt-3 px-1 text-xs text-subtle">
          Giáo án {program.name} ·{" "}
          <Link to="/programs" className="text-muted underline-offset-2 hover:text-fg hover:underline">
            đổi
          </Link>
        </p>
      ) : (
        <p className="mt-3 px-1 text-xs text-subtle">
          <Link to="/programs" className="text-muted underline-offset-2 hover:text-fg hover:underline">
            Chọn giáo án
          </Link>
        </p>
      )}

      {records.length ? (
        <section className="mt-8">
          <h2 className="font-display text-xl font-semibold tracking-tight">PR gần đây</h2>
          <ul className="mt-3 space-y-2">
            {records.map((r) => {
              const ex = requireExercise(r.exerciseId);
              return (
                <li
                  key={r.exerciseId}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium">{ex.name}</p>
                    <p className="text-xs text-muted">{ex.nameEn}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg tabular-nums">
                      {formatKg(r.weight)} × {r.reps}
                    </p>
                    <Badge tone="accent">e1RM {formatKg(r.e1rm)}</Badge>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </main>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-3">
      <p className="text-xs tracking-wide text-subtle uppercase">{label}</p>
      <p className="font-display text-2xl leading-tight font-semibold tabular-nums">
        {value}
        <span className="ml-1 text-sm font-normal text-muted">{hint}</span>
      </p>
    </div>
  );
}
