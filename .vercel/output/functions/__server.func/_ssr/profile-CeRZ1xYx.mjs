import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as LEVEL_LABEL, E as cn, S as GOAL_LABEL, a as Button, i as Input, o as useGymStore, y as getProgram } from "./router-Ct87w3e_.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./dialog-C7Akp23Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CeRZ1xYx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GOALS = [
	"muscle",
	"strength",
	"fat",
	"endurance"
];
var LEVELS = [
	"beginner",
	"intermediate",
	"advanced"
];
var RESTS = [
	60,
	90,
	120,
	180
];
function ProfilePage() {
	const profile = useGymStore((s) => s.profile);
	const updateProfile = useGymStore((s) => s.updateProfile);
	const program = getProgram(useGymStore((s) => s.activeProgramId));
	const sessions = useGymStore((s) => s.sessions);
	const bodyLogs = useGymStore((s) => s.bodyLogs);
	const resetAll = useGymStore((s) => s.resetAll);
	const [name, setName] = (0, import_react.useState)(profile.name);
	const [resetOpen, setResetOpen] = (0, import_react.useState)(false);
	function exportData() {
		const payload = {
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			profile,
			sessions,
			bodyLogs,
			programId: program?.id ?? null
		};
		const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "forge-gym.json";
		a.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold tracking-tight",
				children: "Hồ sơ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "Dữ liệu chỉ nằm trên thiết bị này — không cần tài khoản."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 rounded-xl border border-border bg-surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-xs tracking-wide text-muted uppercase",
					children: "Tên"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: name,
						onChange: (e) => setName(e.target.value),
						onBlur: () => updateProfile({ name: name.trim() || profile.name })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => updateProfile({ name: name.trim() || profile.name }),
						children: "Lưu"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Mục tiêu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: GOALS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => updateProfile({ goal: g }),
							className: cn("h-9 rounded-full px-3 text-sm", profile.goal === g ? "bg-primary text-primary-fg" : "bg-elevated text-muted"),
							children: GOAL_LABEL[g]
						}, g))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs tracking-wide text-muted uppercase",
						children: "Trình độ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: LEVELS.map((lv) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => updateProfile({ level: lv }),
							className: cn("h-9 rounded-full px-3 text-sm", profile.level === lv ? "bg-primary text-primary-fg" : "bg-elevated text-muted"),
							children: LEVEL_LABEL[lv]
						}, lv))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs tracking-wide text-muted uppercase",
						children: "Nghỉ mặc định"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: RESTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => updateProfile({ restDefault: r }),
							className: cn("h-9 rounded-full px-3 text-sm tabular-nums", profile.restDefault === r ? "bg-primary text-primary-fg" : "bg-elevated text-muted"),
							children: [r, "s"]
						}, r))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Giáo án"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl font-semibold",
						children: program?.name ?? "Chưa chọn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/programs",
						className: "mt-3 inline-flex h-11 items-center rounded-md border border-border px-4 text-sm hover:bg-elevated",
						children: "Xem / đổi giáo án"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full",
					onClick: exportData,
					children: "Xuất dữ liệu JSON"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "w-full text-danger",
					onClick: () => setResetOpen(true),
					children: "Xóa hết dữ liệu"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: resetOpen,
				onOpenChange: setResetOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Xóa toàn bộ?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Lịch sử, PR, cân nặng và hồ sơ sẽ mất. Nên xuất JSON trước." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "flex-1",
						onClick: () => setResetOpen(false),
						children: "Hủy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "danger",
						className: "flex-1",
						onClick: () => {
							resetAll();
							setResetOpen(false);
						},
						children: "Xóa hết"
					})]
				})] })
			})
		]
	});
}
//#endregion
export { ProfilePage as component };
