import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChartFrame } from "@/components/gym/chart-frame";
import { requireExercise } from "@/lib/gym/exercises";
import { formatKg, formatShortDate, formatVolume, isoDay } from "@/lib/gym/format";
import {
  CHART_ACCENT,
  CHART_FG,
  CHART_GRID,
  CHART_TICK,
  CHART_TOOLTIP,
} from "@/lib/gym/chart-theme";
import { sessionVolume, topRecords, weeklyVolumeSeries } from "@/lib/gym/stats";
import { useGymStore } from "@/lib/gym/store";

export const Route = createFileRoute("/progress")({ component: ProgressPage });

function ProgressPage() {
  const sessions = useGymStore((s) => s.sessions);
  const bodyLogs = useGymStore((s) => s.bodyLogs);
  const addBodyLog = useGymStore((s) => s.addBodyLog);
  const [weight, setWeight] = useState("");

  const weekly = useMemo(() => weeklyVolumeSeries(sessions, 8), [sessions]);
  const records = useMemo(() => topRecords(sessions, 6), [sessions]);
  const finished = sessions.filter((s) => s.finishedAt);
  const totalVol = finished.reduce((sum, s) => sum + sessionVolume(s), 0);
  const bodyChart = bodyLogs.map((b) => ({
    label: b.date.slice(5).replace("-", "/"),
    kg: b.weight,
  }));
  const lastBody = bodyLogs[bodyLogs.length - 1];

  function saveWeight() {
    const n = Number(weight.replace(",", "."));
    if (!Number.isFinite(n) || n < 20 || n > 300) return;
    addBodyLog(Math.round(n * 10) / 10);
    setWeight("");
  }

  return (
    <main className="px-5 pt-8 pb-36">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Tiến độ</h1>
      <p className="mt-1 text-sm text-muted">Volume, PR và cân nặng — lưu trên máy này.</p>

      <section className="mt-6 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-border bg-surface px-4 py-4">
          <p className="text-xs tracking-wide text-subtle uppercase">Tổng buổi</p>
          <p className="font-display text-3xl font-semibold tabular-nums">
            {finished.length}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface px-4 py-4">
          <p className="text-xs tracking-wide text-subtle uppercase">Tổng volume</p>
          <p className="font-display text-3xl font-semibold tabular-nums">
            {formatVolume(totalVol)}
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-border bg-surface p-4">
        <p className="px-1 text-xs tracking-wide text-muted uppercase">
          Volume 8 tuần
        </p>
        {weekly.some((w) => w.volume > 0) ? (
          <ChartFrame className="mt-2 h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekly} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={CHART_GRID} vertical={false} />
                <XAxis
                  dataKey="label"
                  tick={{ fill: CHART_TICK, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: CHART_TICK, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip contentStyle={CHART_TOOLTIP} />
                <Bar dataKey="volume" fill={CHART_ACCENT} radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartFrame>
        ) : (
          <p className="px-1 py-8 text-center text-sm text-muted">
            Tập vài buổi để thấy cột volume.
          </p>
        )}
      </section>

      <section className="mt-6">
        <h2 className="font-display text-xl font-semibold tracking-tight">Kỷ lục</h2>
        {records.length === 0 ? (
          <p className="mt-3 text-sm text-muted">PR sẽ hiện khi bạn hoàn thành set.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {records.map((r) => {
              const ex = requireExercise(r.exerciseId);
              return (
                <li
                  key={r.exerciseId}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium">{ex.name}</p>
                    <p className="text-xs text-muted">{formatShortDate(r.at)}</p>
                  </div>
                  <div className="text-right">
                    <p className="tabular-nums">
                      {formatKg(r.weight)} × {r.reps}
                    </p>
                    <Badge tone="accent">e1RM {formatKg(r.e1rm)}</Badge>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section className="mt-8 rounded-xl border border-border bg-surface p-4">
        <div className="flex items-baseline justify-between px-1">
          <h2 className="font-display text-xl font-semibold tracking-tight">Cân nặng</h2>
          {lastBody ? (
            <p className="text-sm tabular-nums text-muted">
              {formatKg(lastBody.weight)} kg
            </p>
          ) : null}
        </div>
        <div className="mt-3 flex gap-2">
          <Input
            inputMode="decimal"
            placeholder="kg hôm nay"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveWeight();
            }}
          />
          <Button onClick={saveWeight}>Lưu</Button>
        </div>
        <p className="mt-2 px-1 text-xs text-subtle">Ngày {isoDay()}</p>
        {bodyChart.length >= 2 ? (
          <ChartFrame className="mt-3 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bodyChart} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <CartesianGrid stroke={CHART_GRID} vertical={false} />
                <XAxis
                  dataKey="label"
                  tick={{ fill: CHART_TICK, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={["auto", "auto"]}
                  tick={{ fill: CHART_TICK, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip contentStyle={CHART_TOOLTIP} />
                <Line
                  type="monotone"
                  dataKey="kg"
                  stroke={CHART_FG}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartFrame>
        ) : (
          <p className="px-1 py-6 text-center text-sm text-muted">
            Lưu 2 lần để vẽ đường cân nặng.
          </p>
        )}
      </section>
    </main>
  );
}
