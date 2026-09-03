import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { requireExercise } from "@/lib/gym/exercises";
import {
  formatDate,
  formatDuration,
  formatKg,
  formatVolume,
} from "@/lib/gym/format";
import { sessionSetCount, sessionVolume } from "@/lib/gym/stats";
import { useGymStore } from "@/lib/gym/store";

export const Route = createFileRoute("/history/$sessionId")({
  component: SessionDetail,
});

function SessionDetail() {
  const { sessionId } = Route.useParams();
  const navigate = useNavigate();
  const session = useGymStore((s) => s.sessions.find((x) => x.id === sessionId));
  const deleteSession = useGymStore((s) => s.deleteSession);
  const [open, setOpen] = useState(false);

  if (!session) {
    return (
      <main className="px-5 pt-12 pb-36">
        <p className="text-muted">Không tìm thấy buổi tập.</p>
        <Link to="/history" className="mt-3 inline-block text-sm underline">
          Về lịch sử
        </Link>
      </main>
    );
  }

  const { done, total } = sessionSetCount(session);
  const vol = sessionVolume(session);

  return (
    <main className="px-5 pt-8 pb-36">
      <Link to="/history" className="text-sm text-muted hover:text-fg">
        ← Lịch sử
      </Link>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        {session.name}
      </h1>
      <p className="mt-1 text-sm text-muted capitalize">
        {formatDate(session.finishedAt ?? session.startedAt)}
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <Mini label="Thời gian" value={formatDuration(session.durationSec ?? 0)} />
        <Mini label="Set" value={`${done}/${total}`} />
        <Mini label="Volume" value={formatVolume(vol)} />
      </div>

      <div className="mt-6 space-y-3">
        {session.exercises.map((ex) => {
          const meta = requireExercise(ex.exerciseId);
          return (
            <section
              key={ex.id}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <h2 className="font-display text-xl font-semibold">{meta.name}</h2>
              <p className="text-xs text-muted">{meta.nameEn}</p>
              <ul className="mt-3 space-y-1">
                {ex.sets.map((s, i) => (
                  <li
                    key={s.id}
                    className="flex justify-between text-sm tabular-nums text-muted"
                  >
                    <span>Set {i + 1}</span>
                    <span className={s.completed ? "text-fg" : "text-subtle"}>
                      {s.completed
                        ? `${formatKg(s.weight)} kg × ${s.reps}`
                        : "bỏ"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <Button
        variant="outline"
        className="mt-6 w-full text-danger"
        onClick={() => setOpen(true)}
      >
        Xóa buổi này
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xóa buổi tập?</DialogTitle>
            <DialogDescription>Không hoàn tác được.</DialogDescription>
          </DialogHeader>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>
              Giữ
            </Button>
            <Button
              variant="danger"
              className="flex-1"
              onClick={() => {
                deleteSession(session.id);
                void navigate({ to: "/history" });
              }}
            >
              Xóa
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-3 py-3">
      <p className="text-[10px] tracking-wide text-subtle uppercase">{label}</p>
      <p className="font-display text-lg font-semibold tabular-nums">{value}</p>
    </div>
  );
}
