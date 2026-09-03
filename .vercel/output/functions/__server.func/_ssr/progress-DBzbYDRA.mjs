import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as formatShortDate, N as isoDay, P as requireExercise, _ as weeklyVolumeSeries, a as Button, h as topRecords, i as Input, j as formatVolume, k as formatKg, o as useGymStore, p as sessionVolume } from "./router-Ct87w3e_.mjs";
import { t as Badge } from "./badge-BDkH5cM3.mjs";
import { a as CHART_TOOLTIP, i as CHART_TICK, n as CHART_FG, o as ChartFrame, r as CHART_GRID, t as CHART_ACCENT } from "./chart-theme-BTGX3qlN.mjs";
import { a as Line, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-DBzbYDRA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProgressPage() {
	const sessions = useGymStore((s) => s.sessions);
	const bodyLogs = useGymStore((s) => s.bodyLogs);
	const addBodyLog = useGymStore((s) => s.addBodyLog);
	const [weight, setWeight] = (0, import_react.useState)("");
	const weekly = (0, import_react.useMemo)(() => weeklyVolumeSeries(sessions, 8), [sessions]);
	const records = (0, import_react.useMemo)(() => topRecords(sessions, 6), [sessions]);
	const finished = sessions.filter((s) => s.finishedAt);
	const totalVol = finished.reduce((sum, s) => sum + sessionVolume(s), 0);
	const bodyChart = bodyLogs.map((b) => ({
		label: b.date.slice(5).replace("-", "/"),
		kg: b.weight
	}));
	const lastBody = bodyLogs[bodyLogs.length - 1];
	function saveWeight() {
		const n = Number(weight.replace(",", "."));
		if (!Number.isFinite(n) || n < 20 || n > 300) return;
		addBodyLog(Math.round(n * 10) / 10);
		setWeight("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold tracking-tight",
				children: "Tiến độ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Volume, PR và cân nặng — lưu trên máy này."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-subtle uppercase",
						children: "Tổng buổi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-semibold tabular-nums",
						children: finished.length
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-subtle uppercase",
						children: "Tổng volume"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-semibold tabular-nums",
						children: formatVolume(totalVol)
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-border bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-1 text-xs tracking-wide text-muted uppercase",
					children: "Volume 8 tuần"
				}), weekly.some((w) => w.volume > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, {
					className: "mt-2 h-44",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: weekly,
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "volume",
									fill: CHART_ACCENT,
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						})
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-1 py-8 text-center text-sm text-muted",
					children: "Tập vài buổi để thấy cột volume."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold tracking-tight",
					children: "Kỷ lục"
				}), records.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "PR sẽ hiện khi bạn hoàn thành set."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: records.map((r) => {
						const ex = requireExercise(r.exerciseId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium",
									children: ex.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: formatShortDate(r.at)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "tabular-nums",
									children: [
										formatKg(r.weight),
										" × ",
										r.reps
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									tone: "accent",
									children: ["e1RM ", formatKg(r.e1rm)]
								})]
							})]
						}, r.exerciseId);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-border bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold tracking-tight",
							children: "Cân nặng"
						}), lastBody ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm tabular-nums text-muted",
							children: [formatKg(lastBody.weight), " kg"]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							inputMode: "decimal",
							placeholder: "kg hôm nay",
							value: weight,
							onChange: (e) => setWeight(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") saveWeight();
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: saveWeight,
							children: "Lưu"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 px-1 text-xs text-subtle",
						children: ["Ngày ", isoDay()]
					}),
					bodyChart.length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, {
						className: "mt-3 h-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: bodyChart,
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
										domain: ["auto", "auto"],
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
										dataKey: "kg",
										stroke: CHART_FG,
										strokeWidth: 2,
										dot: false
									})
								]
							})
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 py-6 text-center text-sm text-muted",
						children: "Lưu 2 lần để vẽ đường cân nặng."
					})
				]
			})
		]
	});
}
//#endregion
export { ProgressPage as component };
