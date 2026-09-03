import { useEffect, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  CalendarDays,
  Home,
  UserRound,
} from "lucide-react";
import { rehydrateGymStore, useGymStore } from "@/lib/gym/store";
import { cn } from "@/lib/utils";
import { Onboarding } from "@/components/gym/onboarding";
import { RestTimer } from "@/components/gym/rest-timer";
import { ActiveBar } from "@/components/gym/active-bar";

const NAV = [
  { to: "/", label: "Hôm nay", icon: Home },
  { to: "/library", label: "Bài tập", icon: BookOpen },
  { to: "/history", label: "Lịch sử", icon: CalendarDays },
  { to: "/progress", label: "Tiến độ", icon: Activity },
  { to: "/profile", label: "Tôi", icon: UserRound },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const hydrated = useGymStore((s) => s.hydrated);
  const onboarded = useGymStore((s) => s.onboarded);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const inWorkout = pathname.startsWith("/workout");

  useEffect(() => {
    rehydrateGymStore();
  }, []);

  if (!hydrated) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg">
        <p className="font-display text-5xl font-semibold tracking-tight text-fg">
          FORGE
        </p>
      </div>
    );
  }

  if (!onboarded) {
    return <Onboarding />;
  }

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div
        className={cn(
          "mx-auto min-h-dvh w-full",
          inWorkout ? "max-w-lg" : "max-w-2xl",
        )}
      >
        {children}
      </div>
      {!inWorkout ? <ActiveBar /> : null}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="mx-auto flex h-16 max-w-2xl items-stretch">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <li key={item.to} className="flex-1">
                <Link
                  to={item.to}
                  className={cn(
                    "flex h-full flex-col items-center justify-center gap-0.5 text-xs tracking-wide transition-colors duration-150",
                    active ? "text-fg" : "text-subtle hover:text-muted",
                  )}
                >
                  <Icon
                    className="size-5"
                    strokeWidth={active ? 2.2 : 1.8}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <RestTimer />
    </div>
  );
}
