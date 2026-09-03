import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { D as formatDate, O as formatDuration, P as requireExercise, a as Button, f as sessionSetCount, j as formatVolume, k as formatKg, o as useGymStore, p as sessionVolume, r as Route$1 } from "./router-Ct87w3e_.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-C7Akp23Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history._sessionId-BLNgJ2nl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SessionDetail() {
	const { sessionId } = Route$1.useParams();
	const navigate = useNavigate();
	const session = useGymStore((s) => s.sessions.find((x) => x.id === sessionId));
	const deleteSession = useGymStore((s) => s.deleteSession);
	const [open, setOpen] = (0, import_react.useState)(false);
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-12 pb-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Không tìm thấy buổi tập."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/history",
			className: "mt-3 inline-block text-sm underline",
			children: "Về lịch sử"
		})]
	});
	const { done, total } = sessionSetCount(session);
	const vol = sessionVolume(session);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/history",
				className: "text-sm text-muted hover:text-fg",
				children: "← Lịch sử"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl font-semibold tracking-tight",
				children: session.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted capitalize",
				children: formatDate(session.finishedAt ?? session.startedAt)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Thời gian",
						value: formatDuration(session.durationSec ?? 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Set",
						value: `${done}/${total}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Volume",
						value: formatVolume(vol)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-3",
				children: session.exercises.map((ex) => {
					const meta = requireExercise(ex.exerciseId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-xl border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold",
								children: meta.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: meta.nameEn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1",
								children: ex.sets.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between text-sm tabular-nums text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Set ", i + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: s.completed ? "text-fg" : "text-subtle",
										children: s.completed ? `${formatKg(s.weight)} kg × ${s.reps}` : "bỏ"
									})]
								}, s.id))
							})
						]
					}, ex.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				className: "mt-6 w-full text-danger",
				onClick: () => setOpen(true),
				children: "Xóa buổi này"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Xóa buổi tập?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Không hoàn tác được." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "flex-1",
						onClick: () => setOpen(false),
						children: "Giữ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "danger",
						className: "flex-1",
						onClick: () => {
							deleteSession(session.id);
							navigate({ to: "/history" });
						},
						children: "Xóa"
					})]
				})] })
			})
		]
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] tracking-wide text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg font-semibold tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { SessionDetail as component };
