import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GOAL_LABEL, LEVEL_LABEL } from "@/lib/gym/format";
import { getProgram } from "@/lib/gym/programs";
import { useGymStore } from "@/lib/gym/store";
import type { Goal, Level } from "@/lib/gym/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

const GOALS: Goal[] = ["muscle", "strength", "fat", "endurance"];
const LEVELS: Level[] = ["beginner", "intermediate", "advanced"];
const RESTS = [60, 90, 120, 180];

function ProfilePage() {
  const profile = useGymStore((s) => s.profile);
  const updateProfile = useGymStore((s) => s.updateProfile);
  const program = getProgram(useGymStore((s) => s.activeProgramId));
  const sessions = useGymStore((s) => s.sessions);
  const bodyLogs = useGymStore((s) => s.bodyLogs);
  const resetAll = useGymStore((s) => s.resetAll);
  const [name, setName] = useState(profile.name);
  const [resetOpen, setResetOpen] = useState(false);

  function exportData() {
    const payload = {
      exportedAt: new Date().toISOString(),
      profile,
      sessions,
      bodyLogs,
      programId: program?.id ?? null,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "forge-gym.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="px-5 pt-8 pb-36">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Hồ sơ</h1>
      <p className="mt-1 text-sm text-muted">
        Dữ liệu chỉ nằm trên thiết bị này — không cần tài khoản.
      </p>

      <section className="mt-6 rounded-xl border border-border bg-surface p-5">
        <label className="text-xs tracking-wide text-muted uppercase">Tên</label>
        <div className="mt-2 flex gap-2">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => updateProfile({ name: name.trim() || profile.name })}
          />
          <Button
            variant="outline"
            onClick={() => updateProfile({ name: name.trim() || profile.name })}
          >
            Lưu
          </Button>
        </div>
      </section>

      <section className="mt-4 rounded-xl border border-border bg-surface p-5">
        <p className="text-xs tracking-wide text-muted uppercase">Mục tiêu</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {GOALS.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => updateProfile({ goal: g })}
              className={cn(
                "h-9 rounded-full px-3 text-sm",
                profile.goal === g
                  ? "bg-primary text-primary-fg"
                  : "bg-elevated text-muted",
              )}
            >
              {GOAL_LABEL[g]}
            </button>
          ))}
        </div>
        <p className="mt-5 text-xs tracking-wide text-muted uppercase">Trình độ</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {LEVELS.map((lv) => (
            <button
              key={lv}
              type="button"
              onClick={() => updateProfile({ level: lv })}
              className={cn(
                "h-9 rounded-full px-3 text-sm",
                profile.level === lv
                  ? "bg-primary text-primary-fg"
                  : "bg-elevated text-muted",
              )}
            >
              {LEVEL_LABEL[lv]}
            </button>
          ))}
        </div>
        <p className="mt-5 text-xs tracking-wide text-muted uppercase">
          Nghỉ mặc định
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {RESTS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => updateProfile({ restDefault: r })}
              className={cn(
                "h-9 rounded-full px-3 text-sm tabular-nums",
                profile.restDefault === r
                  ? "bg-primary text-primary-fg"
                  : "bg-elevated text-muted",
              )}
            >
              {r}s
            </button>
          ))}
        </div>
      </section>

      <section className="mt-4 rounded-xl border border-border bg-surface p-5">
        <p className="text-xs tracking-wide text-muted uppercase">Giáo án</p>
        <p className="mt-2 font-display text-2xl font-semibold">
          {program?.name ?? "Chưa chọn"}
        </p>
        <Link
          to="/programs"
          className="mt-3 inline-flex h-11 items-center rounded-md border border-border px-4 text-sm hover:bg-elevated"
        >
          Xem / đổi giáo án
        </Link>
      </section>

      <section className="mt-6 space-y-2">
        <Button variant="outline" className="w-full" onClick={exportData}>
          Xuất dữ liệu JSON
        </Button>
        <Button
          variant="outline"
          className="w-full text-danger"
          onClick={() => setResetOpen(true)}
        >
          Xóa hết dữ liệu
        </Button>
      </section>

      <Dialog open={resetOpen} onOpenChange={setResetOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xóa toàn bộ?</DialogTitle>
            <DialogDescription>
              Lịch sử, PR, cân nặng và hồ sơ sẽ mất. Nên xuất JSON trước.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setResetOpen(false)}>
              Hủy
            </Button>
            <Button
              variant="danger"
              className="flex-1"
              onClick={() => {
                resetAll();
                setResetOpen(false);
              }}
            >
              Xóa hết
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
