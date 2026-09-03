import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as LEVEL_LABEL, E as cn, P as requireExercise, a as Button, o as useGymStore, v as PROGRAMS } from "./router-Ct87w3e_.mjs";
import { t as Badge } from "./badge-BDkH5cM3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/programs-BpZBWRhZ.js
var import_jsx_runtime = require_jsx_runtime();
function ProgramsPage() {
	const navigate = useNavigate();
	const activeProgramId = useGymStore((s) => s.activeProgramId);
	const setProgram = useGymStore((s) => s.setProgram);
	const startFromProgram = useGymStore((s) => s.startFromProgram);
	const activeSession = useGymStore((s) => s.activeSession);
	function use(id) {
		setProgram(id);
	}
	function start(id, dayIndex) {
		if (activeSession) {
			navigate({ to: "/workout" });
			return;
		}
		startFromProgram(id, dayIndex);
		navigate({ to: "/workout" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold tracking-tight",
				children: "Giáo án"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Chọn lịch, rồi bắt đầu ngày tập từ trang chủ."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-4",
				children: PROGRAMS.map((p) => {
					const active = p.id === activeProgramId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("rounded-xl border bg-surface p-5", active ? "border-primary" : "border-border"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl font-semibold tracking-tight",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: p.tagline
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: LEVEL_LABEL[p.level] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										tone: "muted",
										children: [
											p.daysPerWeek,
											" buổi · ",
											p.minutes,
											"p"
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-4 space-y-3",
								children: p.days.map((day, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-lg border border-border bg-bg px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: day.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted",
											children: day.focus
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "outline",
											onClick: () => start(p.id, i),
											children: "Tập"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-subtle",
										children: day.items.map((it) => requireExercise(it.exerciseId).name).join(" · ")
									})]
								}, day.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4 w-full",
								variant: active ? "sage" : "default",
								onClick: () => use(p.id),
								children: active ? "Đang dùng giáo án này" : "Dùng giáo án này"
							})
						]
					}, p.id);
				})
			})
		]
	});
}
//#endregion
export { ProgramsPage as component };
