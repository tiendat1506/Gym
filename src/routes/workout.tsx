import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SetRow } from "@/components/gym/set-row";
import { EXERCISES, requireExercise } from "@/lib/gym/exercises";
import {
  EQUIPMENT_LABEL,
  formatDuration,
  formatKg,
  formatVolume,
  MUSCLE_LABEL,
} from "@/lib/gym/format";
import {
  bestRecords,
  epley1rm,
  lastPerformance,
  sessionSetCount,
  sessionVolume,
} from "@/lib/gym/stats";
import { useGymStore } from "@/lib/gym/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/workout")({ component: WorkoutPage });

function WorkoutPage() {
  const navigate = useNavigate();
  const session = useGymStore((s) => s.activeSession);
  const sessions = useGymStore((s) => s.sessions);
  const updateSet = useGymStore((s) => s.updateSet);
  const toggleSet = useGymStore((s) => s.toggleSet);
  const addSet = useGymStore((s) => s.addSet);
  const removeSet = useGymStore((s) => s.removeSet);
  const addExercise = useGymStore((s) => s.addExercise);
  const removeExercise = useGymStore((s) => s.removeExercise);
  const finishWorkout = useGymStore((s) => s.finishWorkout);
  const discardWorkout = useGymStore((s) => s.discardWorkout);

  const [now, setNow] = useState(Date.now());
  const [pickerOpen, setPickerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [finishOpen, setFinishOpen] = useState(false);
  const [discardOpen, setDiscardOpen] = useState(false);
  const hadSession = useRef(Boolean(session));
  if (session) hadSession.current = true;

  useEffect(() => {
    if (!session && !hadSession.current) {
      void navigate({ to: "/" });
    }
  }, [session, navigate]);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let lock: { release: () => Promise<void> } | undefined;
    const request = async () => {
      try {
        const api = navigator as Navigator & {
          wakeLock?: { request: (type: "screen") => Promise<{ release: () => Promise<void> }> };
        };
        lock = await api.wakeLock?.request("screen");
      } catch {
        /* unsupported */
      }
    };
    void request();
    return () => {
      void lock?.release();
    };
  }, []);

  const records = useMemo(() => bestRecords(sessions), [sessions]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EXERCISES.filter((e) => {
      if (!q) return true;
      return (
        e.name.toLowerCase().includes(q) ||
        e.nameEn.toLowerCase().includes(q) ||
        MUSCLE_LABEL[e.muscle].toLowerCase().includes(q)
      );
    });
  }, [query]);

  if (!session) return null;

  const elapsed = Math.floor((now - session.startedAt) / 1000);
  const { done, total } = sessionSetCount(session);
  const volume = sessionVolume({ ...session, finishedAt: Date.now() });

  function confirmFinish() {
    finishWorkout();
    setFinishOpen(false);
    void navigate({ to: "/history" });
  }

  function confirmDiscard() {
    discardWorkout();
    setDiscardOpen(false);
    void navigate({ to: "/" });
  }

  return (
    <main className="px-4 pt-4 pb-36">
      <header className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => void navigate({ to: "/" })}
          className="grid size-11 place-items-center rounded-md text-muted hover:bg-elevated hover:text-fg"
          aria-label="Thu nhỏ"
        >
          <X className="size-5" />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-display text-2xl font-semibold tracking-tight">
            {session.name}
          </h1>
          <p className="text-xs tabular-nums text-muted">
            {formatDuration(elapsed)} · {done}/{total} set · {formatVolume(volume)}
          </p>
        </div>
        <Button size="sm" onClick={() => setFinishOpen(true)}>
          Kết thúc
        </Button>
      </header>

      <div className="mt-4 grid grid-cols-[2rem_1fr_1fr_2.75rem] gap-2 px-1 text-xs tracking-wide text-subtle uppercase">
        <span className="text-center">Set</span>
        <span className="text-center">Kg</span>
        <span className="text-center">Reps</span>
        <span />
      </div>

      <div className="mt-2 space-y-6">
        {session.exercises.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted">
            Chưa có bài. Thêm từ thư viện bên dưới.
          </p>
        ) : null}
        {session.exercises.map((ex, ei) => {
          const meta = requireExercise(ex.exerciseId);
          const last = lastPerformance(sessions, ex.exerciseId, session.startedAt);
          return (
            <section key={ex.id} className="rounded-xl border border-border bg-surface p-3">
              <div className="flex items-start justify-between gap-2 px-1">
                <div className="min-w-0">
                  <h2 className="font-display text-xl font-semibold tracking-tight">
                    {meta.name}
                  </h2>
                  <p className="text-xs text-muted">
                    {MUSCLE_LABEL[meta.muscle]} · {EQUIPMENT_LABEL[meta.equipment]}
                  </p>
                  {last ? (
                    <p className="mt-1 text-xs tabular-nums text-subtle">
                      Lần trước{" "}
                      {last
                        .slice(0, 4)
                        .map((s) => `${formatKg(s.weight)}×${s.reps}`)
                        .join("  ")}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-subtle">Chưa có lần trước</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeExercise(ei)}
                  className="grid size-9 place-items-center rounded-sm text-subtle hover:bg-elevated hover:text-danger"
                  aria-label="Xóa bài"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                {ex.sets.map((set, si) => {
                  const prevBest = records.get(ex.exerciseId)?.e1rm ?? 0;
                  const pr =
                    set.completed &&
                    set.weight > 0 &&
                    (epley1rm(set.weight, set.reps) || set.weight) > prevBest;
                  return (
                    <SetRow
                      key={set.id}
                      index={si}
                      set={set}
                      pr={pr}
                      onChange={(patch) => updateSet(ei, si, patch)}
                      onToggle={() => toggleSet(ei, si)}
                    />
                  );
                })}
              </div>
              <div className="mt-2 flex items-center justify-between px-1">
                <button
                  type="button"
                  onClick={() => addSet(ei)}
                  className="text-xs text-muted hover:text-fg"
                >
                  + Thêm set
                </button>
                {ex.sets.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => removeSet(ei, ex.sets.length - 1)}
                    className="text-xs text-subtle hover:text-fg"
                  >
                    Xóa set cuối
                  </button>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>

      <Button
        variant="outline"
        className="mt-5 w-full"
        onClick={() => setPickerOpen(true)}
      >
        <Plus className="size-4" />
        Thêm bài tập
      </Button>

      <button
        type="button"
        onClick={() => setDiscardOpen(true)}
        className="mt-4 w-full text-center text-xs text-subtle hover:text-danger"
      >
        Hủy buổi tập
      </button>

      <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
        <DialogContent className="max-h-[min(80dvh,40rem)] overflow-hidden p-0">
          <div className="p-5 pb-3">
            <DialogHeader>
              <DialogTitle>Thêm bài</DialogTitle>
              <DialogDescription>Tìm theo tên hoặc nhóm cơ.</DialogDescription>
            </DialogHeader>
            <Input
              placeholder="Tìm bench, squat, ngực…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          <ul className="max-h-80 overflow-y-auto px-2 pb-4">
            {filtered.map((e) => {
              const added = session.exercises.some((x) => x.exerciseId === e.id);
              return (
                <li key={e.id}>
                  <button
                    type="button"
                    disabled={added}
                    onClick={() => {
                      addExercise(e.id);
                      setPickerOpen(false);
                      setQuery("");
                    }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-3 text-left hover:bg-elevated disabled:opacity-40",
                    )}
                  >
                    <span>
                      <span className="block font-medium">{e.name}</span>
                      <span className="text-xs text-muted">
                        {e.nameEn} · {MUSCLE_LABEL[e.muscle]}
                      </span>
                    </span>
                    {added ? <Check className="size-4 text-accent" /> : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </DialogContent>
      </Dialog>

      <Dialog open={finishOpen} onOpenChange={setFinishOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Kết thúc buổi?</DialogTitle>
            <DialogDescription>
              {done} set hoàn thành · {formatVolume(volume)} · {formatDuration(elapsed)}
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setFinishOpen(false)}>
              Tập tiếp
            </Button>
            <Button className="flex-1" onClick={confirmFinish}>
              Lưu buổi
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={discardOpen} onOpenChange={setDiscardOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hủy buổi tập?</DialogTitle>
            <DialogDescription>Set chưa lưu sẽ mất.</DialogDescription>
          </DialogHeader>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setDiscardOpen(false)}>
              Giữ lại
            </Button>
            <Button variant="danger" className="flex-1" onClick={confirmDiscard}>
              Hủy buổi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
