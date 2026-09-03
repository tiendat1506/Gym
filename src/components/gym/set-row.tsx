import { Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatKg } from "@/lib/gym/format";
import type { WorkoutSet } from "@/lib/gym/types";
import { cn } from "@/lib/utils";

type Props = {
  index: number;
  set: WorkoutSet;
  pr?: boolean;
  onChange: (patch: { weight?: number; reps?: number }) => void;
  onToggle: () => void;
};

function parseNum(value: string): number {
  const n = Number(value.replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

export function SetRow({ index, set, pr, onChange, onToggle }: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-[2rem_1fr_1fr_2.75rem] items-center gap-2 rounded-md px-1 py-1",
        set.completed && "bg-accent/10",
      )}
    >
      <span className="text-center text-xs tabular-nums text-subtle">
        {index + 1}
      </span>
      <label className="flex items-center gap-1">
        <button
          type="button"
          className="grid size-8 shrink-0 place-items-center rounded-sm text-muted hover:bg-elevated"
          onClick={() =>
            onChange({
              weight: Math.max(0, Math.round((set.weight - 2.5) * 10) / 10),
            })
          }
          aria-label="Giảm tạ"
        >
          <Minus className="size-3.5" />
        </button>
        <input
          inputMode="decimal"
          value={set.weight === 0 ? "" : formatKg(set.weight)}
          placeholder="0"
          onChange={(e) => onChange({ weight: parseNum(e.target.value) })}
          className="h-10 w-full min-w-0 rounded-sm border border-border bg-elevated text-center text-base tabular-nums text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          aria-label="Kg"
        />
        <button
          type="button"
          className="grid size-8 shrink-0 place-items-center rounded-sm text-muted hover:bg-elevated"
          onClick={() => onChange({ weight: Math.round((set.weight + 2.5) * 10) / 10 })}
          aria-label="Tăng tạ"
        >
          <Plus className="size-3.5" />
        </button>
      </label>
      <label className="flex items-center gap-1">
        <button
          type="button"
          className="grid size-8 shrink-0 place-items-center rounded-sm text-muted hover:bg-elevated"
          onClick={() => onChange({ reps: Math.max(0, set.reps - 1) })}
          aria-label="Giảm rep"
        >
          <Minus className="size-3.5" />
        </button>
        <input
          inputMode="numeric"
          value={set.reps === 0 ? "" : String(set.reps)}
          placeholder="0"
          onChange={(e) => onChange({ reps: Math.round(parseNum(e.target.value)) })}
          className="h-10 w-full min-w-0 rounded-sm border border-border bg-elevated text-center text-base tabular-nums text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
          aria-label="Reps"
        />
        <button
          type="button"
          className="grid size-8 shrink-0 place-items-center rounded-sm text-muted hover:bg-elevated"
          onClick={() => onChange({ reps: set.reps + 1 })}
          aria-label="Tăng rep"
        >
          <Plus className="size-3.5" />
        </button>
      </label>
      <Button
        type="button"
        size="icon-sm"
        variant={set.completed ? "sage" : "outline"}
        onClick={onToggle}
        aria-label={set.completed ? "Bỏ hoàn thành" : "Hoàn thành set"}
        className="justify-self-end"
      >
        <Check className="size-4" />
      </Button>
      {pr && set.completed ? (
        <span className="col-span-4 -mt-1 pr-1 text-right text-xs tracking-wide text-accent uppercase">
          PR
        </span>
      ) : null}
    </div>
  );
}
