import { createFileRoute, Link } from "@tanstack/react-router";
import { requireExercise } from "@/lib/gym/exercises";
import { formatDuration, formatShortDate, formatVolume } from "@/lib/gym/format";
import { sessionSetCount, sessionVolume } from "@/lib/gym/stats";
import { useGymStore } from "@/lib/gym/store";

export const Route = createFileRoute("/history")({ component: HistoryPage });

function HistoryPage() {
  const sessions = useGymStore((s) => s.sessions);
  const finished = sessions.filter((s) => s.finishedAt);

  return (
    <main className="px-5 pt-8 pb-36">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Lịch sử</h1>
      <p className="mt-1 text-sm text-muted">{finished.length} buổi đã lưu trên máy này.</p>

      {finished.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-border px-5 py-12 text-center">
          <p className="font-display text-2xl font-semibold">Chưa có buổi nào</p>
          <p className="mt-2 text-sm text-muted">
            Kết thúc buổi đầu, nhật ký sẽ hiện ở đây.
          </p>
          <Link
            to="/"
            className="mt-5 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg"
          >
            Về trang chủ
          </Link>
        </div>
      ) : (
        <ul className="mt-6 space-y-2">
          {finished.map((s) => {
            const { done } = sessionSetCount(s);
            const vol = sessionVolume(s);
            const names = s.exercises
              .slice(0, 3)
              .map((e) => requireExercise(e.exerciseId).name);
            return (
              <li key={s.id}>
                <Link
                  to="/history/$sessionId"
                  params={{ sessionId: s.id }}
                  className="block rounded-xl border border-border bg-surface px-4 py-4 transition-colors hover:border-muted"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold tracking-tight">
                      {s.name}
                    </h2>
                    <span className="text-xs text-muted">
                      {formatShortDate(s.finishedAt!)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs tabular-nums text-muted">
                    {formatDuration(s.durationSec ?? 0)} · {done} set · {formatVolume(vol)}
                  </p>
                  <p className="mt-2 truncate text-sm text-subtle">
                    {names.join(" · ")}
                    {s.exercises.length > 3 ? ` · +${s.exercises.length - 3}` : ""}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
