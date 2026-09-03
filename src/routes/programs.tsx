import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { requireExercise } from "@/lib/gym/exercises";
import { LEVEL_LABEL } from "@/lib/gym/format";
import { PROGRAMS } from "@/lib/gym/programs";
import { useGymStore } from "@/lib/gym/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/programs")({ component: ProgramsPage });

function ProgramsPage() {
  const navigate = useNavigate();
  const activeProgramId = useGymStore((s) => s.activeProgramId);
  const setProgram = useGymStore((s) => s.setProgram);
  const startFromProgram = useGymStore((s) => s.startFromProgram);
  const activeSession = useGymStore((s) => s.activeSession);

  function use(id: string) {
    setProgram(id);
  }

  function start(id: string, dayIndex: number) {
    if (activeSession) {
      void navigate({ to: "/workout" });
      return;
    }
    startFromProgram(id, dayIndex);
    void navigate({ to: "/workout" });
  }

  return (
    <main className="px-5 pt-8 pb-36">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Giáo án</h1>
      <p className="mt-1 text-sm text-muted">
        Chọn lịch, rồi bắt đầu ngày tập từ trang chủ.
      </p>

      <div className="mt-6 space-y-4">
        {PROGRAMS.map((p) => {
          const active = p.id === activeProgramId;
          return (
            <article
              key={p.id}
              className={cn(
                "rounded-xl border bg-surface p-5",
                active ? "border-primary" : "border-border",
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                </div>
                <div className="flex gap-2">
                  <Badge>{LEVEL_LABEL[p.level]}</Badge>
                  <Badge tone="muted">
                    {p.daysPerWeek} buổi · {p.minutes}p
                  </Badge>
                </div>
              </div>

              <ol className="mt-4 space-y-3">
                {p.days.map((day, i) => (
                  <li
                    key={day.name}
                    className="rounded-lg border border-border bg-bg px-3 py-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="font-medium">{day.name}</p>
                        <p className="text-xs text-muted">{day.focus}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => start(p.id, i)}
                      >
                        Tập
                      </Button>
                    </div>
                    <p className="mt-2 text-xs text-subtle">
                      {day.items
                        .map((it) => requireExercise(it.exerciseId).name)
                        .join(" · ")}
                    </p>
                  </li>
                ))}
              </ol>

              <Button
                className="mt-4 w-full"
                variant={active ? "sage" : "default"}
                onClick={() => use(p.id)}
              >
                {active ? "Đang dùng giáo án này" : "Dùng giáo án này"}
              </Button>
            </article>
          );
        })}
      </div>
    </main>
  );
}
