import { useEffect, useState, type ReactNode } from "react";

export function ChartFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return <div className={className} />;
  return <div className={className}>{children}</div>;
}
