import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent" | "muted" | "warn";
};

export function Badge({ className, tone = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        tone === "default" && "bg-elevated text-muted",
        tone === "accent" && "bg-accent/15 text-accent",
        tone === "muted" && "border border-border text-muted",
        tone === "warn" && "bg-warn/15 text-warn",
        className,
      )}
      {...props}
    />
  );
}
