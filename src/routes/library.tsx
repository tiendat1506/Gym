import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { EXERCISES } from "@/lib/gym/exercises";
import {
  EQUIPMENT_LABEL,
  MUSCLE_LABEL,
  MUSCLE_ORDER,
} from "@/lib/gym/format";
import type { Muscle } from "@/lib/gym/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/library")({ component: LibraryPage });

function LibraryPage() {
  const [query, setQuery] = useState("");
  const [muscle, setMuscle] = useState<Muscle | "all">("all");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EXERCISES.filter((e) => {
      if (muscle !== "all" && e.muscle !== muscle && e.secondary !== muscle) {
        return false;
      }
      if (!q) return true;
      return (
        e.name.toLowerCase().includes(q) ||
        e.nameEn.toLowerCase().includes(q) ||
        MUSCLE_LABEL[e.muscle].toLowerCase().includes(q)
      );
    });
  }, [query, muscle]);

  return (
    <main className="px-5 pt-8 pb-36">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Bài tập</h1>
      <p className="mt-1 text-sm text-muted">{EXERCISES.length} động tác, hướng dẫn ngắn.</p>

      <div className="relative mt-5">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
        <Input
          className="pl-10"
          placeholder="Tìm squat, kéo xà, ngực…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1">
        <FilterChip
          active={muscle === "all"}
          onClick={() => setMuscle("all")}
          label="Tất cả"
        />
        {MUSCLE_ORDER.map((m) => (
          <FilterChip
            key={m}
            active={muscle === m}
            onClick={() => setMuscle(m)}
            label={MUSCLE_LABEL[m]}
          />
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {list.map((e) => (
          <li key={e.id}>
            <Link
              to="/library/$exerciseId"
              params={{ exerciseId: e.id }}
              className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-muted"
            >
              <span className="min-w-0">
                <span className="block font-medium">{e.name}</span>
                <span className="text-xs text-muted">
                  {e.nameEn} · {MUSCLE_LABEL[e.muscle]} · {EQUIPMENT_LABEL[e.equipment]}
                </span>
              </span>
              <span className="text-subtle">›</span>
            </Link>
          </li>
        ))}
        {list.length === 0 ? (
          <li className="rounded-xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted">
            Không khớp. Thử nhóm cơ khác.
          </li>
        ) : null}
      </ul>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 shrink-0 rounded-full px-3 text-sm transition-colors duration-150",
        active ? "bg-primary text-primary-fg" : "bg-elevated text-muted hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
