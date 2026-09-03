import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Minus, d as Check, i as Trash2, o as Plus, t as X } from "../_libs/lucide-react.mjs";
import { E as cn, O as formatDuration, P as requireExercise, a as Button, b as EQUIPMENT_LABEL, d as lastPerformance, f as sessionSetCount, i as Input, j as formatVolume, k as formatKg, l as epley1rm, o as useGymStore, p as sessionVolume, s as bestRecords, w as MUSCLE_LABEL, x as EXERCISES } from "./router-Ct87w3e_.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-C7Akp23Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workout-Br3xFaHP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function parseNum(value) {
	const n = Number(value.replace(",", "."));
	return Number.isFinite(n) ? n : 0;
}
function SetRow({ index, set, pr, onChange, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid grid-cols-[2rem_1fr_1fr_2.75rem] items-center gap-2 rounded-md px-1 py-1", set.completed && "bg-accent/10"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-center text-xs tabular-nums text-subtle",
				children: index + 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 shrink-0 place-items-center rounded-sm text-muted hover:bg-elevated",
						onClick: () => onChange({ weight: Math.max(0, Math.round((set.weight - 2.5) * 10) / 10) }),
						"aria-label": "Giảm tạ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "decimal",
						value: set.weight === 0 ? "" : formatKg(set.weight),
						placeholder: "0",
						onChange: (e) => onChange({ weight: parseNum(e.target.value) }),
						className: "h-10 w-full min-w-0 rounded-sm border border-border bg-elevated text-center text-base tabular-nums text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
						"aria-label": "Kg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 shrink-0 place-items-center rounded-sm text-muted hover:bg-elevated",
						onClick: () => onChange({ weight: Math.round((set.weight + 2.5) * 10) / 10 }),
						"aria-label": "Tăng tạ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 shrink-0 place-items-center rounded-sm text-muted hover:bg-elevated",
						onClick: () => onChange({ reps: Math.max(0, set.reps - 1) }),
						"aria-label": "Giảm rep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						inputMode: "numeric",
						value: set.reps === 0 ? "" : String(set.reps),
						placeholder: "0",
						onChange: (e) => onChange({ reps: Math.round(parseNum(e.target.value)) }),
						className: "h-10 w-full min-w-0 rounded-sm border border-border bg-elevated text-center text-base tabular-nums text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
						"aria-label": "Reps"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 shrink-0 place-items-center rounded-sm text-muted hover:bg-elevated",
						onClick: () => onChange({ reps: set.reps + 1 }),
						"aria-label": "Tăng rep",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "icon-sm",
				variant: set.completed ? "sage" : "outline",
				onClick: onToggle,
				"aria-label": set.completed ? "Bỏ hoàn thành" : "Hoàn thành set",
				className: "justify-self-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
			}),
			pr && set.completed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "col-span-4 -mt-1 pr-1 text-right text-xs tracking-wide text-accent uppercase",
				children: "PR"
			}) : null
		]
	});
}
function WorkoutPage() {
	const navigate = useNavigate();
	const session = useGymStore((s) => s.activeSession);
	const sessions = useGymStore((s) => s.sessions);
	const updateSet = useGymStore((s) => s.updateSet);
	const toggleSet = useGymStore((s) => s.toggleSet);
	const addSet = useGymStore((s) => s.addSet);
	const removeSet = useGymStore((s) => s.removeSet);
	const addExercise = useGymStore((s) => s.addExercise);
	const removeExercise = useGymStore((s) => s.removeExercise);
	const finishWorkout = useGymStore((s) => s.finishWorkout);
	const discardWorkout = useGymStore((s) => s.discardWorkout);
	const [now, setNow] = (0, import_react.useState)(Date.now());
	const [pickerOpen, setPickerOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [finishOpen, setFinishOpen] = (0, import_react.useState)(false);
	const [discardOpen, setDiscardOpen] = (0, import_react.useState)(false);
	const hadSession = (0, import_react.useRef)(Boolean(session));
	if (session) hadSession.current = true;
	(0, import_react.useEffect)(() => {
		if (!session && !hadSession.current) navigate({ to: "/" });
	}, [session, navigate]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		let lock;
		const request = async () => {
			try {
				lock = await navigator.wakeLock?.request("screen");
			} catch {}
		};
		request();
		return () => {
			lock?.release();
		};
	}, []);
	const records = (0, import_react.useMemo)(() => bestRecords(sessions), [sessions]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return EXERCISES.filter((e) => {
			if (!q) return true;
			return e.name.toLowerCase().includes(q) || e.nameEn.toLowerCase().includes(q) || MUSCLE_LABEL[e.muscle].toLowerCase().includes(q);
		});
	}, [query]);
	if (!session) return null;
	const elapsed = Math.floor((now - session.startedAt) / 1e3);
	const { done, total } = sessionSetCount(session);
	const volume = sessionVolume({
		...session,
		finishedAt: Date.now()
	});
	function confirmFinish() {
		finishWorkout();
		setFinishOpen(false);
		navigate({ to: "/history" });
	}
	function confirmDiscard() {
		discardWorkout();
		setDiscardOpen(false);
		navigate({ to: "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 pt-4 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void navigate({ to: "/" }),
						className: "grid size-11 place-items-center rounded-md text-muted hover:bg-elevated hover:text-fg",
						"aria-label": "Thu nhỏ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate font-display text-2xl font-semibold tracking-tight",
							children: session.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tabular-nums text-muted",
							children: [
								formatDuration(elapsed),
								" · ",
								done,
								"/",
								total,
								" set · ",
								formatVolume(volume)
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => setFinishOpen(true),
						children: "Kết thúc"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-[2rem_1fr_1fr_2.75rem] gap-2 px-1 text-xs tracking-wide text-subtle uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center",
						children: "Set"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center",
						children: "Kg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center",
						children: "Reps"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 space-y-6",
				children: [session.exercises.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted",
					children: "Chưa có bài. Thêm từ thư viện bên dưới."
				}) : null, session.exercises.map((ex, ei) => {
					const meta = requireExercise(ex.exerciseId);
					const last = lastPerformance(sessions, ex.exerciseId, session.startedAt);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-border bg-surface p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2 px-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl font-semibold tracking-tight",
											children: meta.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted",
											children: [
												MUSCLE_LABEL[meta.muscle],
												" · ",
												EQUIPMENT_LABEL[meta.equipment]
											]
										}),
										last ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs tabular-nums text-subtle",
											children: [
												"Lần trước",
												" ",
												last.slice(0, 4).map((s) => `${formatKg(s.weight)}×${s.reps}`).join("  ")
											]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-subtle",
											children: "Chưa có lần trước"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeExercise(ei),
									className: "grid size-9 place-items-center rounded-sm text-subtle hover:bg-elevated hover:text-danger",
									"aria-label": "Xóa bài",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 space-y-1",
								children: ex.sets.map((set, si) => {
									const prevBest = records.get(ex.exerciseId)?.e1rm ?? 0;
									const pr = set.completed && set.weight > 0 && (epley1rm(set.weight, set.reps) || set.weight) > prevBest;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetRow, {
										index: si,
										set,
										pr,
										onChange: (patch) => updateSet(ei, si, patch),
										onToggle: () => toggleSet(ei, si)
									}, set.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between px-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => addSet(ei),
									className: "text-xs text-muted hover:text-fg",
									children: "+ Thêm set"
								}), ex.sets.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeSet(ei, ex.sets.length - 1),
									className: "text-xs text-subtle hover:text-fg",
									children: "Xóa set cuối"
								}) : null]
							})
						]
					}, ex.id);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				className: "mt-5 w-full",
				onClick: () => setPickerOpen(true),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Thêm bài tập"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setDiscardOpen(true),
				className: "mt-4 w-full text-center text-xs text-subtle hover:text-danger",
				children: "Hủy buổi tập"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: pickerOpen,
				onOpenChange: setPickerOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-h-[min(80dvh,40rem)] overflow-hidden p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Thêm bài" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Tìm theo tên hoặc nhóm cơ." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Tìm bench, squat, ngực…",
							value: query,
							onChange: (e) => setQuery(e.target.value),
							autoFocus: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "max-h-80 overflow-y-auto px-2 pb-4",
						children: filtered.map((e) => {
							const added = session.exercises.some((x) => x.exerciseId === e.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: added,
								onClick: () => {
									addExercise(e.id);
									setPickerOpen(false);
									setQuery("");
								},
								className: cn("flex w-full items-center justify-between rounded-md px-3 py-3 text-left hover:bg-elevated disabled:opacity-40"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-medium",
									children: e.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-muted",
									children: [
										e.nameEn,
										" · ",
										MUSCLE_LABEL[e.muscle]
									]
								})] }), added ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-accent" }) : null]
							}) }, e.id);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: finishOpen,
				onOpenChange: setFinishOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Kết thúc buổi?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
					done,
					" set hoàn thành · ",
					formatVolume(volume),
					" · ",
					formatDuration(elapsed)
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "flex-1",
						onClick: () => setFinishOpen(false),
						children: "Tập tiếp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "flex-1",
						onClick: confirmFinish,
						children: "Lưu buổi"
					})]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: discardOpen,
				onOpenChange: setDiscardOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Hủy buổi tập?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Set chưa lưu sẽ mất." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "flex-1",
						onClick: () => setDiscardOpen(false),
						children: "Giữ lại"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "danger",
						className: "flex-1",
						onClick: confirmDiscard,
						children: "Hủy buổi"
					})]
				})] })
			})
		]
	});
}
//#endregion
export { WorkoutPage as component };
