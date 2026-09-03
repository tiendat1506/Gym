import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartFrame } from "@/components/gym/chart-frame";
import { getExercise } from "@/lib/gym/exercises";
import {
  EQUIPMENT_LABEL,
  formatKg,
  formatShortDate,
  MUSCLE_LABEL,
} from "@/lib/gym/format";
import {
  CHART_ACCENT,
  CHART_GRID,
  CHART_TICK,
  CHART_TOOLTIP,
} from "@/lib/gym/chart-theme";
import { bestRecords, exerciseHistory } from "@/lib/gym/stats";
import { useGymStore } from "@/lib/gym/store";

export const Route = createFileRoute("/library/$exerciseId")({
  component: ExerciseDetail,
});

function ExerciseDetail() {
  const { exerciseId } = Route.useParams();
  const navigate = useNavigate();
  const exercise = getExercise(exerciseId);
  const sessions = useGymStore((s) => s.sessions);
  const activeSession = useGymStore((s) => s.activeSession);
  const addExercise = useGymStore((s) => s.addExercise);
  const startEmpty = useGymStore((s) => s.startEmpty);

  if (!exercise) {
    return (
      <main className="px-5 pt-12 pb-36">
        <p className="text-muted">Không tìm thấy bài tập.</p>
        <Link to="/library" className="mt-3 inline-block text-sm underline">
          Về thư viện
        </Link>
      </main>
    );
  }

  const history = exerciseHistory(sessions, exercise.id);
  const pr = bestRecords(sessions).get(exercise.id);
  const chart = history.map((h) => ({
    label: formatShortDate(h.at),
    e1rm: Math.round(h.bestE1rm * 10) / 10,
    weight: h.bestWeight,
  }));

  function addToWorkout() {
    if (!activeSession) startEmpty();
    addExercise(exerciseId);
    void navigate({ to: "/workout" });
  }

  return (
    <main className="px-5 pt-8 pb-36">
      <Link to="/library" className="text-sm text-muted hover:text-fg">
        ← Thư viện
      </Link>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        {exercise.name}
      </h1>
      <p className="mt-1 text-muted">{exercise.nameEn}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Badge>{MUSCLE_LABEL[exercise.muscle]}</Badge>
        {exercise.secondary ? (
          <Badge tone="muted">{MUSCLE_LABEL[exercise.secondary]}</Badge>
        ) : null}
        <Badge tone="muted">{EQUIPMENT_LABEL[exercise.equipment]}</Badge>
      </div>

      <section className="mt-6 rounded-xl border border-border bg-surface p-5">
        <p className="text-xs tracking-widest text-muted uppercase">Kỹ thuật</p>
        <p className="mt-2 text-sm leading-relaxed text-fg">{exercise.cues}</p>
      </section>

      {pr ? (
        <section className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-border bg-surface px-4 py-4">
            <p className="text-xs tracking-wide text-subtle uppercase">PR set</p>
            <p className="font-display text-2xl font-semibold tabular-nums">
              {formatKg(pr.weight)} × {pr.reps}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface px-4 py-4">
            <p className="text-xs tracking-wide text-subtle uppercase">e1RM</p>
            <p className="font-display text-2xl font-semibold tabular-nums">
              {formatKg(pr.e1rm)} kg
            </p>
          </div>
        </section>
      ) : (
        <p className="mt-4 text-sm text-muted">
          Chưa có số liệu. Tập bài này một lần để hiện PR.
        </p>
      )}

      {chart.length >= 2 ? (
        <section className="mt-6 rounded-xl border border-border bg-surface p-4">
          <p className="mb-2 px-1 text-xs tracking-wide text-muted uppercase">
            e1RM theo thời gian
          </p>
          <ChartFrame className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chart} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
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
                <Line
                  type="monotone"
                  dataKey="e1rm"
                  stroke={CHART_ACCENT}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartFrame>
        </section>
      ) : null}

      <Button className="mt-6 w-full" size="lg" onClick={addToWorkout}>
        {activeSession ? "Thêm vào buổi đang tập" : "Bắt đầu với bài này"}
      </Button>
    </main>
  );
}
