import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Search } from "../_libs/lucide-react.mjs";
import { E as cn, T as MUSCLE_ORDER, b as EQUIPMENT_LABEL, i as Input, w as MUSCLE_LABEL, x as EXERCISES } from "./router-Ct87w3e_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-RgZyvD3P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LibraryPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [muscle, setMuscle] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return EXERCISES.filter((e) => {
			if (muscle !== "all" && e.muscle !== muscle && e.secondary !== muscle) return false;
			if (!q) return true;
			return e.name.toLowerCase().includes(q) || e.nameEn.toLowerCase().includes(q) || MUSCLE_LABEL[e.muscle].toLowerCase().includes(q);
		});
	}, [query, muscle]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold tracking-tight",
				children: "Bài tập"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [EXERCISES.length, " động tác, hướng dẫn ngắn."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "pl-10",
					placeholder: "Tìm squat, kéo xà, ngực…",
					value: query,
					onChange: (e) => setQuery(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: muscle === "all",
					onClick: () => setMuscle("all"),
					label: "Tất cả"
				}), MUSCLE_ORDER.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: muscle === m,
					onClick: () => setMuscle(m),
					label: MUSCLE_LABEL[m]
				}, m))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-5 space-y-2",
				children: [list.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/library/$exerciseId",
					params: { exerciseId: e.id },
					className: "flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: e.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted",
							children: [
								e.nameEn,
								" · ",
								MUSCLE_LABEL[e.muscle],
								" · ",
								EQUIPMENT_LABEL[e.equipment]
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-subtle",
						children: "›"
					})]
				}) }, e.id)), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl border border-dashed border-border px-4 py-10 text-center text-sm text-muted",
					children: "Không khớp. Thử nhóm cơ khác."
				}) : null]
			})
		]
	});
}
function FilterChip({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-9 shrink-0 rounded-full px-3 text-sm transition-colors duration-150", active ? "bg-primary text-primary-fg" : "bg-elevated text-muted hover:text-fg"),
		children: label
	});
}
//#endregion
export { LibraryPage as component };
