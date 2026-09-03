import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { formatDuration } from "@/lib/gym/format";
import { useGymStore } from "@/lib/gym/store";

function beep() {
  try {
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.07, now + i * 0.18 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.18 + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.18);
      osc.stop(now + i * 0.18 + 0.13);
    }
  } catch {
    /* ignore */
  }
}

export function RestTimer() {
  const restUntil = useGymStore((s) => s.restUntil);
  const skipRest = useGymStore((s) => s.skipRest);
  const adjustRest = useGymStore((s) => s.adjustRest);
  const inWorkout = useRouterState({
    select: (s) => s.location.pathname.startsWith("/workout"),
  });
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!restUntil) return;
    const id = window.setInterval(() => setNow(Date.now()), 200);
    return () => window.clearInterval(id);
  }, [restUntil]);

  useEffect(() => {
    if (!restUntil) return;
    const remain = restUntil - Date.now();
    if (remain <= 0) {
      beep();
      skipRest();
    }
  }, [now, restUntil, skipRest]);

  if (!restUntil) return null;
  const remainMs = Math.max(0, restUntil - now);
  const remainSec = Math.ceil(remainMs / 1000);
  const bottom = inWorkout
    ? "calc(5rem + env(safe-area-inset-bottom))"
    : "calc(8.75rem + env(safe-area-inset-bottom))";

  return (
    <div className="fixed inset-x-0 z-50 px-4" style={{ bottom }}>
      <div className="mx-auto flex max-w-lg items-center gap-3 rounded-xl border border-border bg-elevated p-3 shadow-lg">
        <div className="min-w-0 flex-1">
          <p className="text-xs tracking-wide text-muted uppercase">Nghỉ</p>
          <p className="font-display text-4xl leading-none font-semibold tabular-nums tracking-tight">
            {formatDuration(remainSec)}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => adjustRest(15)}>
          +15s
        </Button>
        <Button variant="muted" size="sm" onClick={skipRest}>
          Bỏ qua
        </Button>
      </div>
    </div>
  );
}
