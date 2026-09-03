import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GOAL_LABEL, LEVEL_LABEL } from "@/lib/gym/format";
import { PROGRAMS, recommendProgram } from "@/lib/gym/programs";
import { useGymStore } from "@/lib/gym/store";
import type { Goal, Level } from "@/lib/gym/types";
import { cn } from "@/lib/utils";

const GOALS: Goal[] = ["muscle", "strength", "fat", "endurance"];
const LEVELS: Level[] = ["beginner", "intermediate", "advanced"];

const GOAL_HINT: Record<Goal, string> = {
  muscle: "Hypertrophy, 8–12 reps",
  strength: "Tạ nặng, rest dài",
  fat: "Volume đều, ít nghỉ",
  endurance: "Nhiều set, nhịp nhanh",
};

const LEVEL_HINT: Record<Level, string> = {
  beginner: "3 buổi / tuần",
  intermediate: "4 buổi / tuần",
  advanced: "5–6 buổi / tuần",
};

export function Onboarding() {
  const complete = useGymStore((s) => s.completeOnboarding);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState<Goal>("muscle");
  const [level, setLevel] = useState<Level>("beginner");
  const [programId, setProgramId] = useState(recommendProgram("beginner").id);

  function pickLevel(next: Level) {
    setLevel(next);
    setProgramId(recommendProgram(next).id);
  }

  function finish() {
    complete({
      name: name.trim() || "Bạn",
      goal,
      level,
      programId,
    });
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-lg flex-col px-5 py-10">
      <p className="font-display text-sm font-semibold tracking-[0.2em] text-muted">
        FORGE
      </p>
      <div className="mt-10 flex-1">
        {step === 0 ? (
          <div>
            <h1 className="font-display text-5xl font-semibold leading-none tracking-tight">
              Tên bạn
            </h1>
            <p className="mt-3 text-muted">Dùng để chào trước buổi tập.</p>
            <Input
              className="mt-8 h-14 rounded-lg text-lg"
              placeholder="Ví dụ: Minh"
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setStep(1);
              }}
            />
          </div>
        ) : null}

        {step === 1 ? (
          <div>
            <h1 className="font-display text-5xl font-semibold leading-none tracking-tight">
              Mục tiêu
            </h1>
            <p className="mt-3 text-muted">Chọn một. Có thể đổi sau.</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {GOALS.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={cn(
                    "rounded-xl border px-4 py-5 text-left transition-[border-color,background-color] duration-150",
                    goal === g
                      ? "border-primary bg-elevated"
                      : "border-border bg-surface hover:border-muted",
                  )}
                >
                  <p className="font-display text-xl font-semibold">
                    {GOAL_LABEL[g]}
                  </p>
                  <p className="mt-1 text-xs text-muted">{GOAL_HINT[g]}</p>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div>
            <h1 className="font-display text-5xl font-semibold leading-none tracking-tight">
              Kinh nghiệm
            </h1>
            <p className="mt-3 text-muted">Để gợi ý giáo án phù hợp.</p>
            <div className="mt-8 flex flex-col gap-3">
              {LEVELS.map((lv) => (
                <button
                  key={lv}
                  type="button"
                  onClick={() => pickLevel(lv)}
                  className={cn(
                    "rounded-xl border px-4 py-5 text-left transition-[border-color,background-color] duration-150",
                    level === lv
                      ? "border-primary bg-elevated"
                      : "border-border bg-surface hover:border-muted",
                  )}
                >
                  <p className="font-display text-xl font-semibold">
                    {LEVEL_LABEL[lv]}
                  </p>
                  <p className="mt-1 text-xs text-muted">{LEVEL_HINT[lv]}</p>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div>
            <h1 className="font-display text-5xl font-semibold leading-none tracking-tight">
              Giáo án
            </h1>
            <p className="mt-3 text-muted">Bắt đầu với một lịch. Đổi bất cứ lúc nào.</p>
            <div className="mt-8 flex flex-col gap-3">
              {PROGRAMS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setProgramId(p.id)}
                  className={cn(
                    "rounded-xl border px-4 py-4 text-left transition-[border-color,background-color] duration-150",
                    programId === p.id
                      ? "border-primary bg-elevated"
                      : "border-border bg-surface hover:border-muted",
                  )}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-display text-xl font-semibold">{p.name}</p>
                    <span className="text-xs text-muted">
                      {p.daysPerWeek} buổi · {p.minutes}p
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex items-center gap-3">
        {step > 0 ? (
          <Button variant="outline" className="flex-1" onClick={() => setStep(step - 1)}>
            Quay lại
          </Button>
        ) : null}
        {step < 3 ? (
          <Button className="flex-1" onClick={() => setStep(step + 1)}>
            Tiếp
          </Button>
        ) : (
          <Button className="flex-1" onClick={finish}>
            Bắt đầu
          </Button>
        )}
      </div>
      <p className="mt-4 text-center text-xs text-subtle">
        {step + 1} / 4
      </p>
    </div>
  );
}
