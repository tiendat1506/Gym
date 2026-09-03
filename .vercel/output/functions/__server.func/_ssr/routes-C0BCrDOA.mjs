import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { s as Play, u as Flame } from "../_libs/lucide-react.mjs";
import { D as formatDate, F as weekdayDots, N as isoDay, P as requireExercise, a as Button, c as currentStreak, d as lastPerformance, g as trainedDayKeys, h as topRecords, j as formatVolume, k as formatKg, m as sessionsThisWeek, o as useGymStore, p as sessionVolume, y as getProgram } from "./router-Ct87w3e_.mjs";
import { t as Badge } from "./badge-BDkH5cM3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C0BCrDOA.js
var import_jsx_runtime = require_jsx_runtime();
function greeting(name) {
	const h = (/* @__PURE__ */ new Date()).getHours();
	const who = name || "bạn";
	if (h < 11) return `Chào buổi sáng, ${who}`;
	if (h < 17) return `Chào buổi chiều, ${who}`;
	return `Chào buổi tối, ${who}`;
}
function Home() {
	const navigate = useNavigate();
	const profile = useGymStore((s) => s.profile);
	const sessions = useGymStore((s) => s.sessions);
	const activeSession = useGymStore((s) => s.activeSession);
	const activeProgramId = useGymStore((s) => s.activeProgramId);
	const lastProgramDayIndex = useGymStore((s) => s.lastProgramDayIndex);
	const startFromProgram = useGymStore((s) => s.startFromProgram);
	const startEmpty = useGymStore((s) => s.startEmpty);
	const program = getProgram(activeProgramId);
	const nextIndex = program ? (lastProgramDayIndex + 1) % program.days.length : 0;
	const today = program?.days[nextIndex];
	const week = sessionsThisWeek(sessions);
	const streak = currentStreak(sessions);
	const trained = trainedDayKeys(sessions);
	const dots = weekdayDots();
	const records = topRecords(sessions, 3);
	const weekVolume = week.reduce((sum, s) => sum + sessionVolume(s), 0);
	const todayKey = isoDay();
	function startToday() {
		if (activeSession) {
			navigate({ to: "/workout" });
			return;
		}
		if (program && today) startFromProgram(program.id, nextIndex);
		else startEmpty();
		navigate({ to: "/workout" });
	}
	function startBlank() {
		if (!activeSession) startEmpty();
		navigate({ to: "/workout" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold tracking-widest text-muted",
						children: "FORGE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl leading-none font-semibold tracking-tight",
						children: greeting(profile.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted capitalize",
						children: formatDate(Date.now())
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/profile",
					className: "grid size-11 shrink-0 place-items-center rounded-full bg-elevated font-display text-lg font-semibold",
					children: (profile.name || "F").slice(0, 1).toUpperCase()
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Streak",
						value: `${streak}`,
						hint: "ngày"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Tuần này",
						value: `${week.length}`,
						hint: "buổi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Volume",
						value: formatVolume(weekVolume).replace(" kg", ""),
						hint: "kg"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-4 flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3",
				children: dots.map((d) => {
					const on = trained.has(d.key);
					const isToday = d.key === todayKey;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tracking-wide text-subtle",
							children: d.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: on ? "size-2 rounded-full bg-accent" : isToday ? "size-2 rounded-full border border-fg" : "size-2 rounded-full bg-elevated" })]
					}, d.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-muted uppercase",
							children: "Hôm nay"
						}), streak > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-xs text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3.5" }),
								" ",
								streak,
								" ngày"
							]
						}) : null]
					}),
					activeSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight",
						children: ["Đang tập · ", activeSession.name]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [activeSession.exercises.length, " bài · chạm để tiếp tục"]
					})] }) : today ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold tracking-tight",
							children: today.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								today.focus,
								" · ",
								today.items.length,
								" bài"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2",
							children: [today.items.slice(0, 4).map((item) => {
								const ex = requireExercise(item.exerciseId);
								const top = lastPerformance(sessions, item.exerciseId)?.[0];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline justify-between gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: ex.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 tabular-nums text-muted",
										children: [
											item.sets,
											"×",
											item.reps,
											top ? ` · ${formatKg(top.weight)}kg` : ""
										]
									})]
								}, item.exerciseId);
							}), today.items.length > 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-xs text-subtle",
								children: [
									"+",
									today.items.length - 4,
									" bài nữa"
								]
							}) : null]
						})
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold tracking-tight",
						children: "Buổi tự do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Chưa chọn giáo án. Thêm bài khi bắt đầu."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-5 w-full",
						size: "xl",
						onClick: startToday,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), activeSession ? "Tiếp tục buổi tập" : "Bắt đầu buổi tập"]
					}),
					!activeSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: startBlank,
						className: "mt-3 w-full text-center text-sm text-muted hover:text-fg",
						children: "Hoặc bắt đầu buổi trống"
					}) : null
				]
			}),
			program ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 px-1 text-xs text-subtle",
				children: [
					"Giáo án ",
					program.name,
					" ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/programs",
						className: "text-muted underline-offset-2 hover:text-fg hover:underline",
						children: "đổi"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 px-1 text-xs text-subtle",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/programs",
					className: "text-muted underline-offset-2 hover:text-fg hover:underline",
					children: "Chọn giáo án"
				})
			}),
			records.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold tracking-tight",
					children: "PR gần đây"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: records.map((r) => {
						const ex = requireExercise(r.exerciseId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium",
									children: ex.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: ex.nameEn
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-lg tabular-nums",
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
			}) : null
		]
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-2xl leading-tight font-semibold tabular-nums",
			children: [value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 text-sm font-normal text-muted",
				children: hint
			})]
		})]
	});
}
//#endregion
export { Home as component };
