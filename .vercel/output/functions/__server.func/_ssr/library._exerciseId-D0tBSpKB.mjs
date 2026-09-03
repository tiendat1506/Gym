import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as formatShortDate, M as getExercise, a as Button, b as EQUIPMENT_LABEL, k as formatKg, n as Route, o as useGymStore, s as bestRecords, u as exerciseHistory, w as MUSCLE_LABEL } from "./router-Ct87w3e_.mjs";
import { t as Badge } from "./badge-BDkH5cM3.mjs";
import { a as CHART_TOOLTIP, i as CHART_TICK, o as ChartFrame, r as CHART_GRID, t as CHART_ACCENT } from "./chart-theme-BTGX3qlN.mjs";
import { a as Line, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as CartesianGrid, r as YAxis } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library._exerciseId-D0tBSpKB.js
var import_jsx_runtime = require_jsx_runtime();
function ExerciseDetail() {
	const { exerciseId } = Route.useParams();
	const navigate = useNavigate();
	const exercise = getExercise(exerciseId);
	const sessions = useGymStore((s) => s.sessions);
	const activeSession = useGymStore((s) => s.activeSession);
	const addExercise = useGymStore((s) => s.addExercise);
	const startEmpty = useGymStore((s) => s.startEmpty);
	if (!exercise) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-12 pb-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Không tìm thấy bài tập."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/library",
			className: "mt-3 inline-block text-sm underline",
			children: "Về thư viện"
		})]
	});
	const history = exerciseHistory(sessions, exercise.id);
	const pr = bestRecords(sessions).get(exercise.id);
	const chart = history.map((h) => ({
		label: formatShortDate(h.at),
		e1rm: Math.round(h.bestE1rm * 10) / 10,
		weight: h.bestWeight
	}));
	function addToWorkout() {
		if (!activeSession) startEmpty();
		addExercise(exerciseId);
		navigate({ to: "/workout" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/library",
				className: "text-sm text-muted hover:text-fg",
				children: "← Thư viện"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl font-semibold tracking-tight",
				children: exercise.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-muted",
				children: exercise.nameEn
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: MUSCLE_LABEL[exercise.muscle] }),
					exercise.secondary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "muted",
						children: MUSCLE_LABEL[exercise.secondary]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "muted",
						children: EQUIPMENT_LABEL[exercise.equipment]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted uppercase",
					children: "Kỹ thuật"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-fg",
					children: exercise.cues
				})]
			}),
			pr ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-subtle uppercase",
						children: "PR set"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl font-semibold tabular-nums",
						children: [
							formatKg(pr.weight),
							" × ",
							pr.reps
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-subtle uppercase",
						children: "e1RM"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl font-semibold tabular-nums",
						children: [formatKg(pr.e1rm), " kg"]
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Chưa có số liệu. Tập bài này một lần để hiện PR."
			}),
			chart.length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 px-1 text-xs tracking-wide text-muted uppercase",
					children: "e1RM theo thời gian"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, {
					className: "h-44",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: chart,
							margin: {
								top: 8,
								right: 8,
								left: -18,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									stroke: CHART_GRID,
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "label",
									tick: {
										fill: CHART_TICK,
										fontSize: 11
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tick: {
										fill: CHART_TICK,
										fontSize: 11
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: CHART_TOOLTIP }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "e1rm",
									stroke: CHART_ACCENT,
									strokeWidth: 2,
									dot: false
								})
							]
						})
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6 w-full",
				size: "lg",
				onClick: addToWorkout,
				children: activeSession ? "Thêm vào buổi đang tập" : "Bắt đầu với bài này"
			})
		]
	});
}
//#endregion
export { ExerciseDetail as component };
