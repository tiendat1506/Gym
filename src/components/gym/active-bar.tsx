import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { formatDuration } from "@/lib/gym/format";
import { sessionSetCount } from "@/lib/gym/stats";
import { useGymStore } from "@/lib/gym/store";

export function ActiveBar() {
  const session = useGymStore((s) => s.activeSession);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!session) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [session]);

  if (!session) return null;
  const { done, total } = sessionSetCount(session);
  const elapsed = Math.floor((now - session.startedAt) / 1000);

  return (
    <Link
      to="/workout"
      className="fixed inset-x-0 z-30 mx-auto max-w-2xl px-4"
      style={{ bottom: "calc(4.5rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3 rounded-xl border border-border bg-elevated px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-lg font-semibold leading-none">
            {session.name}
          </p>
          <p className="mt-1 text-xs text-muted tabular-nums">
            {formatDuration(elapsed)} · {done}/{total} set
          </p>
        </div>
        <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-fg">
          Tiếp tục
        </span>
      </div>
    </Link>
  );
}
