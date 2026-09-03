import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { E as cn } from "./router-Ct87w3e_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-BDkH5cM3.js
var import_jsx_runtime = require_jsx_runtime();
function Badge({ className, tone = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", tone === "default" && "bg-elevated text-muted", tone === "accent" && "bg-accent/15 text-accent", tone === "muted" && "border border-border text-muted", tone === "warn" && "bg-warn/15 text-warn", className),
		...props
	});
}
//#endregion
export { Badge as t };
