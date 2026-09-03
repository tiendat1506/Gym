import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chart-theme-BTGX3qlN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChartFrame({ children, className }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
}
var CHART_TICK = "var(--color-muted)";
var CHART_GRID = "color-mix(in oklab, var(--color-fg) 8%, transparent)";
var CHART_ACCENT = "var(--color-accent)";
var CHART_FG = "var(--color-fg)";
var CHART_TOOLTIP = {
	background: "var(--color-surface)",
	border: "1px solid var(--color-border)",
	borderRadius: 12,
	color: "var(--color-fg)"
};
//#endregion
export { CHART_TOOLTIP as a, CHART_TICK as i, CHART_FG as n, ChartFrame as o, CHART_GRID as r, CHART_ACCENT as t };
