import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { A as formatShortDate, O as formatDuration, P as requireExercise, f as sessionSetCount, j as formatVolume, o as useGymStore, p as sessionVolume } from "./router-Ct87w3e_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/history-yK9MbaCQ.js
var import_jsx_runtime = require_jsx_runtime();
function HistoryPage() {
	const finished = useGymStore((s) => s.sessions).filter((s) => s.finishedAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold tracking-tight",
				children: "Lịch sử"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [finished.length, " buổi đã lưu trên máy này."]
			}),
			finished.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl border border-dashed border-border px-5 py-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold",
						children: "Chưa có buổi nào"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Kết thúc buổi đầu, nhật ký sẽ hiện ở đây."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-5 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg",
						children: "Về trang chủ"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2",
				children: finished.map((s) => {
					const { done } = sessionSetCount(s);
					const vol = sessionVolume(s);
					const names = s.exercises.slice(0, 3).map((e) => requireExercise(e.exerciseId).name);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/history/$sessionId",
						params: { sessionId: s.id },
						className: "block rounded-xl border border-border bg-surface px-4 py-4 transition-colors hover:border-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-semibold tracking-tight",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: formatShortDate(s.finishedAt)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs tabular-nums text-muted",
								children: [
									formatDuration(s.durationSec ?? 0),
									" · ",
									done,
									" set · ",
									formatVolume(vol)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 truncate text-sm text-subtle",
								children: [names.join(" · "), s.exercises.length > 3 ? ` · +${s.exercises.length - 3}` : ""]
							})
						]
					}) }, s.id);
				})
			})
		]
	});
}
//#endregion
export { HistoryPage as component };
