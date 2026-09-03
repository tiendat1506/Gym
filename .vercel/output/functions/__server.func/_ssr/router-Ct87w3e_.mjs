import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as useRouter, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as CalendarDays, l as House, m as Activity, n as UserRound, p as BookOpen, r as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { l as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-B1dpmGwY.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
	return `id_${Math.random().toString(36).slice(2)}_${Date.now()}`;
}
var EXERCISES = [
	{
		id: "bench-press",
		name: "Nằm đẩy ngực",
		nameEn: "Bench Press",
		muscle: "chest",
		secondary: "triceps",
		equipment: "barbell",
		cues: "Hai chân chắc sàn, vai ép ghế. Hạ đòn chạm giữa ngực, đẩy thẳng lên. Không nẩy tạ trên ngực."
	},
	{
		id: "incline-bench",
		name: "Đẩy ngực ghế nghiêng",
		nameEn: "Incline Bench Press",
		muscle: "chest",
		secondary: "shoulders",
		equipment: "barbell",
		cues: "Ghế 30–45°. Hạ đòn về xương đòn, đẩy theo đường hơi chéo. Ngực trên làm việc chính."
	},
	{
		id: "db-bench",
		name: "Đẩy tạ đơn nằm",
		nameEn: "Dumbbell Bench Press",
		muscle: "chest",
		secondary: "triceps",
		equipment: "dumbbell",
		cues: "Tạ hạ sâu hơn đòn, lòng bàn tay hướng về phía trước. Ép ngực ở đỉnh, đừng chạm hai tạ vào nhau."
	},
	{
		id: "incline-db",
		name: "Đẩy tạ đơn nghiêng",
		nameEn: "Incline Dumbbell Press",
		muscle: "chest",
		secondary: "shoulders",
		equipment: "dumbbell",
		cues: "Ghế nghiêng vừa. Hạ chậm, khuỷu ~45° so với thân. Đẩy lên hơi khép tạ."
	},
	{
		id: "chest-fly",
		name: "Ép ngực tạ đơn",
		nameEn: "Dumbbell Fly",
		muscle: "chest",
		equipment: "dumbbell",
		cues: "Khuỷu hơi cong cố định. Hạ tạ rộng như ôm thùng, siết ngực khi khép. Đừng duỗi thẳng tay."
	},
	{
		id: "cable-crossover",
		name: "Crossover cáp",
		nameEn: "Cable Crossover",
		muscle: "chest",
		equipment: "cable",
		cues: "Bước một chân trước, hơi cúi. Kéo hai tay vòng ra trước ngực, siết 1 giây rồi về chậm."
	},
	{
		id: "push-up",
		name: "Chống đẩy",
		nameEn: "Push-up",
		muscle: "chest",
		secondary: "triceps",
		equipment: "bodyweight",
		cues: "Body một đường thẳng. Hạ ngực gần sàn, khuỷu 45°. Siết bụng, đừng võng lưng."
	},
	{
		id: "chest-dip",
		name: "Dip ngực",
		nameEn: "Chest Dip",
		muscle: "chest",
		secondary: "triceps",
		equipment: "bodyweight",
		cues: "Hơi cúi người ra trước, khuỷu sát thân. Hạ đến khi vai thấp hơn khuỷu, đẩy lên siết ngực."
	},
	{
		id: "deadlift",
		name: "Deadlift",
		nameEn: "Deadlift",
		muscle: "back",
		secondary: "hamstrings",
		equipment: "barbell",
		cues: "Đòn sát ống chân, lưng thẳng, hít bụng. Đẩy sàn bằng chân rồi siết hông. Không kéo bằng lưng."
	},
	{
		id: "barbell-row",
		name: "Kéo tạ đòn",
		nameEn: "Barbell Row",
		muscle: "back",
		secondary: "biceps",
		equipment: "barbell",
		cues: "Cúi ~45°, lưng thẳng. Kéo đòn vào rốn dưới, siết vai sau. Hạ có kiểm soát."
	},
	{
		id: "db-row",
		name: "Kéo tạ đơn",
		nameEn: "Dumbbell Row",
		muscle: "back",
		secondary: "biceps",
		equipment: "dumbbell",
		cues: "Một tay một gối trên ghế. Kéo tạ lên cạnh hông, khuỷu sát người. Đừng xoay thân."
	},
	{
		id: "lat-pulldown",
		name: "Kéo xà xuống",
		nameEn: "Lat Pulldown",
		muscle: "back",
		secondary: "biceps",
		equipment: "cable",
		cues: "Hơi ngả sau. Kéo thanh xuống xương đòn, khuỷu xuống dưới. Siết lưng, đừng dùng đà."
	},
	{
		id: "pull-up",
		name: "Hít xà",
		nameEn: "Pull-up",
		muscle: "back",
		secondary: "biceps",
		equipment: "bodyweight",
		cues: "Treo thẳng, siết vai xuống. Kéo cằm trên xà, hạ chậm. Không đung đưa."
	},
	{
		id: "seated-row",
		name: "Kéo cáp ngồi",
		nameEn: "Seated Cable Row",
		muscle: "back",
		secondary: "biceps",
		equipment: "cable",
		cues: "Ngực mở, vai hạ. Kéo tay cầm vào bụng dưới, siết xương bả. Duỗi ra hết biên độ."
	},
	{
		id: "face-pull",
		name: "Face pull",
		nameEn: "Face Pull",
		muscle: "shoulders",
		secondary: "back",
		equipment: "cable",
		cues: "Cáp ngang mặt. Kéo về mặt, khuỷu cao, xoay vai ngoài. Siết vai sau ở đỉnh."
	},
	{
		id: "ohp",
		name: "Đẩy vai đứng",
		nameEn: "Overhead Press",
		muscle: "shoulders",
		secondary: "triceps",
		equipment: "barbell",
		cues: "Siết bụng mông. Đẩy đòn thẳng lên, đầu hơi lùi rồi xuyên qua. Khóa khuỷu ở đỉnh."
	},
	{
		id: "db-shoulder-press",
		name: "Đẩy vai tạ đơn",
		nameEn: "Dumbbell Shoulder Press",
		muscle: "shoulders",
		secondary: "triceps",
		equipment: "dumbbell",
		cues: "Ngồi tựa nhẹ. Tạ ngang tai, đẩy lên không chạm nhau. Hạ chậm đến vai."
	},
	{
		id: "arnold-press",
		name: "Arnold press",
		nameEn: "Arnold Press",
		muscle: "shoulders",
		equipment: "dumbbell",
		cues: "Bắt đầu lòng bàn tay hướng mặt, xoay ra ngoài khi đẩy lên. Nhịp chậm, kiểm soát vai."
	},
	{
		id: "lateral-raise",
		name: "Dang tạ ngang",
		nameEn: "Lateral Raise",
		muscle: "shoulders",
		equipment: "dumbbell",
		cues: "Khuỷu mềm. Nâng tạ ngang vai, ngón út hơi cao. Không dùng đà từ thân."
	},
	{
		id: "front-raise",
		name: "Nâng tạ trước",
		nameEn: "Front Raise",
		muscle: "shoulders",
		equipment: "dumbbell",
		cues: "Nâng trước mặt đến ngang vai, hạ chậm. Siết bụng để khỏi đung đưa."
	},
	{
		id: "rear-delt-fly",
		name: "Ép vai sau",
		nameEn: "Rear Delt Fly",
		muscle: "shoulders",
		secondary: "back",
		equipment: "dumbbell",
		cues: "Cúi người, tay hơi cong. Dang tạ ra hai bên như mở cánh. Siết vai sau, không nhún lưng."
	},
	{
		id: "squat",
		name: "Squat",
		nameEn: "Back Squat",
		muscle: "quads",
		secondary: "glutes",
		equipment: "barbell",
		cues: "Đòn trên trap, ngực mở. Ngồi hông ra sau, gối theo mũi chân. Đùi song song sàn rồi đứng lên."
	},
	{
		id: "front-squat",
		name: "Squat trước",
		nameEn: "Front Squat",
		muscle: "quads",
		secondary: "core",
		equipment: "barbell",
		cues: "Đòn resting trên deltoid trước, khuỷu cao. Ngồi thẳng hơn back squat, giữ thân đứng."
	},
	{
		id: "leg-press",
		name: "Đạp chân",
		nameEn: "Leg Press",
		muscle: "quads",
		secondary: "glutes",
		equipment: "machine",
		cues: "Chân rộng vừa, hạ sâu không nhấc mông. Đẩy gót, đừng khóa gối mạnh."
	},
	{
		id: "lunge",
		name: "Lunge",
		nameEn: "Walking Lunge",
		muscle: "quads",
		secondary: "glutes",
		equipment: "dumbbell",
		cues: "Bước dài, gối trước trên mắt cá. Gối sau gần sàn. Thân thẳng, đẩy gót trước đứng lên."
	},
	{
		id: "bulgarian-split",
		name: "Squat Bulgaria",
		nameEn: "Bulgarian Split Squat",
		muscle: "quads",
		secondary: "glutes",
		equipment: "dumbbell",
		cues: "Chân sau gác ghế. Hạ thẳng xuống, gối trước không vượt mũi chân quá nhiều. Kiểm soát thăng bằng."
	},
	{
		id: "leg-extension",
		name: "Đá đùi trước",
		nameEn: "Leg Extension",
		muscle: "quads",
		equipment: "machine",
		cues: "Lưng tựa, đá đến khóa mềm, siết đùi 1 giây. Hạ chậm, đừng dùng đà."
	},
	{
		id: "rdl",
		name: "RDL",
		nameEn: "Romanian Deadlift",
		muscle: "hamstrings",
		secondary: "glutes",
		equipment: "barbell",
		cues: "Gối mềm cố định. Đẩy hông ra sau, đòn sát chân. Kéo căng đùi sau rồi siết hông đứng lên."
	},
	{
		id: "leg-curl",
		name: "Cuốn đùi sau",
		nameEn: "Lying Leg Curl",
		muscle: "hamstrings",
		equipment: "machine",
		cues: "Hông dính ghế. Cuốn gót về mông, siết 1 giây. Hạ chậm hết biên độ."
	},
	{
		id: "hip-thrust",
		name: "Hip thrust",
		nameEn: "Hip Thrust",
		muscle: "glutes",
		secondary: "hamstrings",
		equipment: "barbell",
		cues: "Lưng trên tựa ghế, đòn trên hông. Đẩy hông đến thân-đùi một đường. Siết mông, đừng ưỡn lưng."
	},
	{
		id: "calf-raise",
		name: "Nâng bắp chân",
		nameEn: "Standing Calf Raise",
		muscle: "calves",
		equipment: "machine",
		cues: "Hạ gót hết cỡ, nâng lên cao nhất, dừng 1 giây. Đầu gối thẳng mềm."
	},
	{
		id: "barbell-curl",
		name: "Cuốn biceps",
		nameEn: "Barbell Curl",
		muscle: "biceps",
		equipment: "barbell",
		cues: "Khuỷu dính hông. Cuốn lên, siết đỉnh, hạ 2 giây. Đừng đung đưa thân."
	},
	{
		id: "hammer-curl",
		name: "Hammer curl",
		nameEn: "Hammer Curl",
		muscle: "biceps",
		equipment: "dumbbell",
		cues: "Lòng bàn tay đối diện. Cuốn như cầm búa, khuỷu cố định. Làm chậm phần hạ."
	},
	{
		id: "preacher-curl",
		name: "Preacher curl",
		nameEn: "Preacher Curl",
		muscle: "biceps",
		equipment: "dumbbell",
		cues: "Nách áp đệm. Duỗi gần thẳng rồi cuốn lên. Không nhấc vai khỏi ghế."
	},
	{
		id: "tricep-pushdown",
		name: "Đẩy tay sau cáp",
		nameEn: "Tricep Pushdown",
		muscle: "triceps",
		equipment: "cable",
		cues: "Khuỷu dính sườn. Đẩy xuống khóa khuỷu, siết tay sau. Khuỷu không đi về trước."
	},
	{
		id: "skull-crusher",
		name: "Skull crusher",
		nameEn: "Skull Crusher",
		muscle: "triceps",
		equipment: "barbell",
		cues: "Nằm, hạ đòn về trán/tóc, khuỷu hướng trần. Duỗi thẳng, đừng xòe khuỷu."
	},
	{
		id: "oh-extension",
		name: "Duỗi tay sau trên đầu",
		nameEn: "Overhead Tricep Extension",
		muscle: "triceps",
		equipment: "dumbbell",
		cues: "Tạ sau đầu, khuỷu sát tai. Duỗi lên cao, hạ sâu căng tay sau. Siết bụng."
	},
	{
		id: "close-grip-bench",
		name: "Nằm đẩy hẹp",
		nameEn: "Close-Grip Bench",
		muscle: "triceps",
		secondary: "chest",
		equipment: "barbell",
		cues: "Tay rộng bằng vai. Khuỷu sát thân khi hạ. Đẩy lên siết tay sau."
	},
	{
		id: "plank",
		name: "Plank",
		nameEn: "Plank",
		muscle: "core",
		equipment: "bodyweight",
		cues: "Khuỷu dưới vai, body một đường. Siết bụng mông. Ghi số giây vào ô reps."
	},
	{
		id: "hanging-raise",
		name: "Nâng chân treo",
		nameEn: "Hanging Leg Raise",
		muscle: "core",
		equipment: "bodyweight",
		cues: "Treo thẳng, nâng chân (hoặc gối) lên bằng cách cuộn xương chậu. Hạ chậm, đừng đung đưa."
	},
	{
		id: "cable-crunch",
		name: "Crunch cáp",
		nameEn: "Cable Crunch",
		muscle: "core",
		equipment: "cable",
		cues: "Quỳ, kéo cáp bằng cách cuộn bụng, không gập hông. Siết 1 giây rồi về."
	},
	{
		id: "russian-twist",
		name: "Russian twist",
		nameEn: "Russian Twist",
		muscle: "core",
		equipment: "dumbbell",
		cues: "Ngồi ngả sau, chân nâng. Xoay tạ sang hai bên, vai xoay theo. Ghi số lần mỗi bên."
	}
];
var byId$1 = new Map(EXERCISES.map((e) => [e.id, e]));
function getExercise(id) {
	return byId$1.get(id);
}
function requireExercise(id) {
	const e = byId$1.get(id);
	if (!e) return {
		id,
		name: "Bài tập",
		nameEn: id,
		muscle: "chest",
		equipment: "barbell",
		cues: ""
	};
	return e;
}
var MUSCLE_LABEL = {
	chest: "Ngực",
	back: "Lưng",
	shoulders: "Vai",
	biceps: "Tay trước",
	triceps: "Tay sau",
	quads: "Đùi trước",
	hamstrings: "Đùi sau",
	glutes: "Mông",
	calves: "Bắp chân",
	core: "Bụng"
};
var EQUIPMENT_LABEL = {
	barbell: "Tạ đòn",
	dumbbell: "Tạ đơn",
	cable: "Cáp",
	machine: "Máy",
	bodyweight: "Bodyweight",
	kettlebell: "Kettlebell"
};
var GOAL_LABEL = {
	muscle: "Tăng cơ",
	strength: "Sức mạnh",
	fat: "Giảm mỡ",
	endurance: "Sức bền"
};
var LEVEL_LABEL = {
	beginner: "Mới tập",
	intermediate: "Trung bình",
	advanced: "Nâng cao"
};
var MUSCLE_ORDER = [
	"chest",
	"back",
	"shoulders",
	"quads",
	"hamstrings",
	"glutes",
	"biceps",
	"triceps",
	"calves",
	"core"
];
function formatKg(n) {
	if (!Number.isFinite(n)) return "0";
	const rounded = Math.round(n * 10) / 10;
	return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}
function formatVolume(n) {
	if (n >= 1e3) {
		const k = n / 1e3;
		return `${k >= 10 ? k.toFixed(0) : k.toFixed(1)}k kg`;
	}
	return `${Math.round(n).toLocaleString("vi-VN")} kg`;
}
function formatDuration(sec) {
	const s = Math.max(0, Math.floor(sec));
	const h = Math.floor(s / 3600);
	const m = Math.floor(s % 3600 / 60);
	const r = s % 60;
	if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
	return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function formatDate(ts) {
	return new Intl.DateTimeFormat("vi-VN", {
		weekday: "long",
		day: "numeric",
		month: "long"
	}).format(new Date(ts));
}
function formatShortDate(ts) {
	return new Intl.DateTimeFormat("vi-VN", {
		day: "numeric",
		month: "short"
	}).format(new Date(ts));
}
function startOfDay(ts = Date.now()) {
	const d = new Date(ts);
	d.setHours(0, 0, 0, 0);
	return d.getTime();
}
function isoDay(ts = Date.now()) {
	const d = new Date(ts);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function weekdayDots() {
	const now = /* @__PURE__ */ new Date();
	const day = now.getDay();
	const mondayOffset = day === 0 ? -6 : 1 - day;
	const monday = new Date(now);
	monday.setDate(now.getDate() + mondayOffset);
	monday.setHours(0, 0, 0, 0);
	return [
		"T2",
		"T3",
		"T4",
		"T5",
		"T6",
		"T7",
		"CN"
	].map((label, i) => {
		const d = new Date(monday);
		d.setDate(monday.getDate() + i);
		return {
			key: isoDay(d.getTime()),
			label,
			ts: d.getTime()
		};
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ct87w3e_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var PROGRAMS = [
	{
		id: "full-body",
		name: "Full Body 3 buổi",
		tagline: "Toàn thân mỗi buổi. Phù hợp người mới, lịch tập thưa.",
		level: "beginner",
		daysPerWeek: 3,
		minutes: 50,
		days: [
			{
				name: "Full A",
				focus: "Squat · Ngực · Lưng",
				items: [
					{
						exerciseId: "squat",
						sets: 3,
						reps: 8,
						rest: 120
					},
					{
						exerciseId: "bench-press",
						sets: 3,
						reps: 8,
						rest: 120
					},
					{
						exerciseId: "barbell-row",
						sets: 3,
						reps: 8,
						rest: 90
					},
					{
						exerciseId: "ohp",
						sets: 3,
						reps: 8,
						rest: 90
					},
					{
						exerciseId: "rdl",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "barbell-curl",
						sets: 2,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "plank",
						sets: 3,
						reps: 40,
						rest: 45
					}
				]
			},
			{
				name: "Full B",
				focus: "Deadlift · Vai · Kéo",
				items: [
					{
						exerciseId: "deadlift",
						sets: 3,
						reps: 5,
						rest: 180
					},
					{
						exerciseId: "incline-db",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "lat-pulldown",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "lateral-raise",
						sets: 3,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "lunge",
						sets: 3,
						reps: 10,
						rest: 75
					},
					{
						exerciseId: "tricep-pushdown",
						sets: 2,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "hanging-raise",
						sets: 3,
						reps: 10,
						rest: 45
					}
				]
			},
			{
				name: "Full C",
				focus: "Chân · Đẩy · Kéo",
				items: [
					{
						exerciseId: "front-squat",
						sets: 3,
						reps: 6,
						rest: 150
					},
					{
						exerciseId: "db-bench",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "seated-row",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "arnold-press",
						sets: 3,
						reps: 10,
						rest: 75
					},
					{
						exerciseId: "hip-thrust",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "hammer-curl",
						sets: 2,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "cable-crunch",
						sets: 3,
						reps: 12,
						rest: 45
					}
				]
			}
		]
	},
	{
		id: "upper-lower",
		name: "Upper / Lower 4 buổi",
		tagline: "Trên–dưới xen kẽ. Tăng cơ đều, phục hồi tốt.",
		level: "intermediate",
		daysPerWeek: 4,
		minutes: 55,
		days: [
			{
				name: "Upper A",
				focus: "Đẩy ngang · Kéo",
				items: [
					{
						exerciseId: "bench-press",
						sets: 4,
						reps: 6,
						rest: 150
					},
					{
						exerciseId: "barbell-row",
						sets: 4,
						reps: 8,
						rest: 120
					},
					{
						exerciseId: "ohp",
						sets: 3,
						reps: 8,
						rest: 90
					},
					{
						exerciseId: "lat-pulldown",
						sets: 3,
						reps: 10,
						rest: 75
					},
					{
						exerciseId: "lateral-raise",
						sets: 3,
						reps: 15,
						rest: 45
					},
					{
						exerciseId: "barbell-curl",
						sets: 3,
						reps: 10,
						rest: 60
					},
					{
						exerciseId: "tricep-pushdown",
						sets: 3,
						reps: 12,
						rest: 60
					}
				]
			},
			{
				name: "Lower A",
				focus: "Squat · Hamstring",
				items: [
					{
						exerciseId: "squat",
						sets: 4,
						reps: 6,
						rest: 180
					},
					{
						exerciseId: "rdl",
						sets: 3,
						reps: 8,
						rest: 120
					},
					{
						exerciseId: "leg-press",
						sets: 3,
						reps: 12,
						rest: 90
					},
					{
						exerciseId: "leg-curl",
						sets: 3,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "calf-raise",
						sets: 4,
						reps: 12,
						rest: 45
					},
					{
						exerciseId: "plank",
						sets: 3,
						reps: 45,
						rest: 45
					}
				]
			},
			{
				name: "Upper B",
				focus: "Đẩy nghiêng · Kéo dọc",
				items: [
					{
						exerciseId: "incline-bench",
						sets: 4,
						reps: 8,
						rest: 120
					},
					{
						exerciseId: "pull-up",
						sets: 4,
						reps: 6,
						rest: 120
					},
					{
						exerciseId: "db-shoulder-press",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "seated-row",
						sets: 3,
						reps: 10,
						rest: 75
					},
					{
						exerciseId: "face-pull",
						sets: 3,
						reps: 15,
						rest: 45
					},
					{
						exerciseId: "hammer-curl",
						sets: 3,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "chest-dip",
						sets: 3,
						reps: 8,
						rest: 75
					}
				]
			},
			{
				name: "Lower B",
				focus: "Deadlift · Mông",
				items: [
					{
						exerciseId: "deadlift",
						sets: 3,
						reps: 5,
						rest: 180
					},
					{
						exerciseId: "front-squat",
						sets: 3,
						reps: 8,
						rest: 120
					},
					{
						exerciseId: "bulgarian-split",
						sets: 3,
						reps: 8,
						rest: 90
					},
					{
						exerciseId: "hip-thrust",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "leg-extension",
						sets: 3,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "hanging-raise",
						sets: 3,
						reps: 10,
						rest: 45
					}
				]
			}
		]
	},
	{
		id: "ppl",
		name: "Push Pull Legs",
		tagline: "6 buổi/tuần. Volume cao, tách nhóm cơ.",
		level: "advanced",
		daysPerWeek: 6,
		minutes: 60,
		days: [
			{
				name: "Push A",
				focus: "Ngực · Vai · Tay sau",
				items: [
					{
						exerciseId: "bench-press",
						sets: 4,
						reps: 6,
						rest: 150
					},
					{
						exerciseId: "incline-db",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "ohp",
						sets: 3,
						reps: 8,
						rest: 90
					},
					{
						exerciseId: "lateral-raise",
						sets: 4,
						reps: 15,
						rest: 45
					},
					{
						exerciseId: "cable-crossover",
						sets: 3,
						reps: 12,
						rest: 45
					},
					{
						exerciseId: "tricep-pushdown",
						sets: 3,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "oh-extension",
						sets: 2,
						reps: 12,
						rest: 60
					}
				]
			},
			{
				name: "Pull A",
				focus: "Lưng · Tay trước",
				items: [
					{
						exerciseId: "deadlift",
						sets: 3,
						reps: 5,
						rest: 180
					},
					{
						exerciseId: "lat-pulldown",
						sets: 4,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "barbell-row",
						sets: 3,
						reps: 8,
						rest: 90
					},
					{
						exerciseId: "face-pull",
						sets: 3,
						reps: 15,
						rest: 45
					},
					{
						exerciseId: "barbell-curl",
						sets: 3,
						reps: 10,
						rest: 60
					},
					{
						exerciseId: "hammer-curl",
						sets: 2,
						reps: 12,
						rest: 60
					}
				]
			},
			{
				name: "Legs A",
				focus: "Squat · Đùi sau",
				items: [
					{
						exerciseId: "squat",
						sets: 4,
						reps: 6,
						rest: 180
					},
					{
						exerciseId: "rdl",
						sets: 3,
						reps: 8,
						rest: 120
					},
					{
						exerciseId: "leg-press",
						sets: 3,
						reps: 12,
						rest: 90
					},
					{
						exerciseId: "leg-curl",
						sets: 3,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "calf-raise",
						sets: 4,
						reps: 12,
						rest: 45
					},
					{
						exerciseId: "hanging-raise",
						sets: 3,
						reps: 12,
						rest: 45
					}
				]
			},
			{
				name: "Push B",
				focus: "Ngực trên · Vai",
				items: [
					{
						exerciseId: "incline-bench",
						sets: 4,
						reps: 8,
						rest: 120
					},
					{
						exerciseId: "db-bench",
						sets: 3,
						reps: 10,
						rest: 90
					},
					{
						exerciseId: "arnold-press",
						sets: 3,
						reps: 10,
						rest: 75
					},
					{
						exerciseId: "chest-fly",
						sets: 3,
						reps: 12,
						rest: 45
					},
					{
						exerciseId: "lateral-raise",
						sets: 3,
						reps: 15,
						rest: 45
					},
					{
						exerciseId: "close-grip-bench",
						sets: 3,
						reps: 8,
						rest: 90
					},
					{
						exerciseId: "skull-crusher",
						sets: 2,
						reps: 10,
						rest: 75
					}
				]
			},
			{
				name: "Pull B",
				focus: "Kéo dọc · Vai sau",
				items: [
					{
						exerciseId: "pull-up",
						sets: 4,
						reps: 6,
						rest: 120
					},
					{
						exerciseId: "seated-row",
						sets: 4,
						reps: 10,
						rest: 75
					},
					{
						exerciseId: "db-row",
						sets: 3,
						reps: 10,
						rest: 75
					},
					{
						exerciseId: "rear-delt-fly",
						sets: 3,
						reps: 15,
						rest: 45
					},
					{
						exerciseId: "preacher-curl",
						sets: 3,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "face-pull",
						sets: 3,
						reps: 15,
						rest: 45
					}
				]
			},
			{
				name: "Legs B",
				focus: "Mông · Đơn chân",
				items: [
					{
						exerciseId: "front-squat",
						sets: 4,
						reps: 6,
						rest: 150
					},
					{
						exerciseId: "hip-thrust",
						sets: 4,
						reps: 8,
						rest: 90
					},
					{
						exerciseId: "bulgarian-split",
						sets: 3,
						reps: 8,
						rest: 75
					},
					{
						exerciseId: "leg-extension",
						sets: 3,
						reps: 15,
						rest: 45
					},
					{
						exerciseId: "leg-curl",
						sets: 3,
						reps: 12,
						rest: 60
					},
					{
						exerciseId: "calf-raise",
						sets: 4,
						reps: 15,
						rest: 45
					}
				]
			}
		]
	},
	{
		id: "starting-strength",
		name: "Sức mạnh 5×5",
		tagline: "Ba bài kép mỗi buổi. Tăng tạ tuyến tính.",
		level: "beginner",
		daysPerWeek: 3,
		minutes: 45,
		days: [{
			name: "Buổi A",
			focus: "Squat · Bench · Row",
			items: [
				{
					exerciseId: "squat",
					sets: 5,
					reps: 5,
					rest: 180
				},
				{
					exerciseId: "bench-press",
					sets: 5,
					reps: 5,
					rest: 180
				},
				{
					exerciseId: "barbell-row",
					sets: 5,
					reps: 5,
					rest: 150
				}
			]
		}, {
			name: "Buổi B",
			focus: "Squat · Vai · Deadlift",
			items: [
				{
					exerciseId: "squat",
					sets: 5,
					reps: 5,
					rest: 180
				},
				{
					exerciseId: "ohp",
					sets: 5,
					reps: 5,
					rest: 150
				},
				{
					exerciseId: "deadlift",
					sets: 1,
					reps: 5,
					rest: 180
				}
			]
		}]
	}
];
var byId = new Map(PROGRAMS.map((p) => [p.id, p]));
function getProgram(id) {
	if (!id) return void 0;
	return byId.get(id);
}
function recommendProgram(level) {
	if (level === "beginner") return PROGRAMS[0];
	if (level === "intermediate") return PROGRAMS[1];
	return PROGRAMS[2];
}
function setVolume(set) {
	if (!set.completed) return 0;
	return set.weight * set.reps;
}
function exerciseVolume(ex) {
	return ex.sets.reduce((sum, s) => sum + setVolume(s), 0);
}
function sessionVolume(session) {
	return session.exercises.reduce((sum, ex) => sum + exerciseVolume(ex), 0);
}
function sessionSetCount(session) {
	let done = 0;
	let total = 0;
	for (const ex of session.exercises) for (const s of ex.sets) {
		total += 1;
		if (s.completed) done += 1;
	}
	return {
		done,
		total
	};
}
/** Epley 1RM. Returns 0 if unusable. */
function epley1rm(weight, reps) {
	if (weight <= 0 || reps <= 0) return 0;
	if (reps === 1) return weight;
	if (reps > 12) return 0;
	return weight * (1 + reps / 30);
}
function bestRecords(sessions) {
	const map = /* @__PURE__ */ new Map();
	for (const session of sessions) {
		if (!session.finishedAt) continue;
		for (const ex of session.exercises) for (const s of ex.sets) {
			if (!s.completed || s.weight <= 0 || s.reps <= 0) continue;
			const e1rm = epley1rm(s.weight, s.reps) || s.weight;
			const prev = map.get(ex.exerciseId);
			if (!prev || e1rm > prev.e1rm) map.set(ex.exerciseId, {
				exerciseId: ex.exerciseId,
				weight: s.weight,
				reps: s.reps,
				e1rm,
				at: session.finishedAt
			});
		}
	}
	return map;
}
function lastPerformance(sessions, exerciseId, beforeTs) {
	const cutoff = beforeTs ?? Date.now();
	for (const session of sessions) {
		if (!session.finishedAt || session.finishedAt >= cutoff) continue;
		const ex = session.exercises.find((e) => e.exerciseId === exerciseId);
		if (!ex) continue;
		const done = ex.sets.filter((s) => s.completed);
		if (done.length) return done;
	}
	return null;
}
function currentStreak(sessions) {
	const days = new Set(sessions.filter((s) => s.finishedAt).map((s) => startOfDay(s.finishedAt)));
	if (days.size === 0) return 0;
	const today = startOfDay();
	const yesterday = today - 864e5;
	let cursor = days.has(today) ? today : days.has(yesterday) ? yesterday : 0;
	if (!cursor) return 0;
	let n = 0;
	while (days.has(cursor)) {
		n += 1;
		cursor -= 864e5;
	}
	return n;
}
function sessionsThisWeek(sessions) {
	const now = /* @__PURE__ */ new Date();
	const day = now.getDay();
	const mondayOffset = day === 0 ? -6 : 1 - day;
	const monday = startOfDay(now.getTime() + mondayOffset * 864e5);
	return sessions.filter((s) => s.finishedAt && s.finishedAt >= monday);
}
function trainedDayKeys(sessions) {
	const keys = /* @__PURE__ */ new Set();
	for (const s of sessions) {
		if (!s.finishedAt) continue;
		const d = new Date(s.finishedAt);
		const y = d.getFullYear();
		const m = String(d.getMonth() + 1).padStart(2, "0");
		const day = String(d.getDate()).padStart(2, "0");
		keys.add(`${y}-${m}-${day}`);
	}
	return keys;
}
function weeklyVolumeSeries(sessions, weeks = 8) {
	const now = /* @__PURE__ */ new Date();
	const day = now.getDay();
	const mondayOffset = day === 0 ? -6 : 1 - day;
	const thisMonday = startOfDay(now.getTime() + mondayOffset * 864e5);
	const out = [];
	for (let i = weeks - 1; i >= 0; i--) {
		const start = thisMonday - i * 7 * 864e5;
		const end = start + 6048e5;
		const volume = sessions.filter((s) => s.finishedAt && s.finishedAt >= start && s.finishedAt < end).reduce((sum, s) => sum + sessionVolume(s), 0);
		const d = new Date(start);
		out.push({
			label: `${d.getDate()}/${d.getMonth() + 1}`,
			volume: Math.round(volume)
		});
	}
	return out;
}
function topRecords(sessions, limit = 4) {
	const all = [...bestRecords(sessions).values()];
	all.sort((a, b) => b.e1rm - a.e1rm);
	return all.filter((r) => getExercise(r.exerciseId)).slice(0, limit);
}
function exerciseHistory(sessions, exerciseId) {
	const rows = [];
	const finished = [...sessions].filter((s) => s.finishedAt).sort((a, b) => a.finishedAt - b.finishedAt);
	for (const s of finished) {
		const ex = s.exercises.find((e) => e.exerciseId === exerciseId);
		if (!ex) continue;
		const done = ex.sets.filter((x) => x.completed && x.weight > 0);
		if (!done.length) continue;
		let bestE1rm = 0;
		let bestWeight = 0;
		for (const set of done) {
			bestWeight = Math.max(bestWeight, set.weight);
			bestE1rm = Math.max(bestE1rm, epley1rm(set.weight, set.reps) || set.weight);
		}
		rows.push({
			at: s.finishedAt,
			bestE1rm,
			bestWeight,
			volume: exerciseVolume(ex)
		});
	}
	return rows;
}
var defaultProfile = {
	name: "",
	goal: "muscle",
	level: "beginner",
	restDefault: 90
};
function setsFromItem(item, previous) {
	const count = item.sets;
	return Array.from({ length: count }, (_, i) => {
		const prev = previous?.[i];
		return {
			id: uid(),
			weight: prev?.weight ?? 0,
			reps: prev?.reps ?? item.reps,
			completed: false
		};
	});
}
function sessionFromItems(name, items, history, programId, dayIndex) {
	const exercises = items.filter((it) => getExercise(it.exerciseId)).map((it) => ({
		id: uid(),
		exerciseId: it.exerciseId,
		rest: it.rest,
		sets: setsFromItem(it, lastPerformance(history, it.exerciseId))
	}));
	return {
		id: uid(),
		name,
		programId,
		dayIndex,
		startedAt: Date.now(),
		exercises
	};
}
var useGymStore = create()(persist((set, get) => ({
	hydrated: false,
	onboarded: false,
	profile: defaultProfile,
	activeProgramId: null,
	lastProgramDayIndex: -1,
	sessions: [],
	activeSession: null,
	restUntil: null,
	bodyLogs: [],
	setHydrated: (v) => set({ hydrated: v }),
	completeOnboarding: ({ name, goal, level, programId }) => {
		set({
			onboarded: true,
			profile: {
				name: name.trim() || "Bạn",
				goal,
				level,
				restDefault: level === "beginner" ? 90 : 120
			},
			activeProgramId: programId,
			lastProgramDayIndex: -1
		});
	},
	updateProfile: (patch) => set((s) => ({ profile: {
		...s.profile,
		...patch
	} })),
	setProgram: (programId) => set({
		activeProgramId: programId,
		lastProgramDayIndex: -1
	}),
	startFromProgram: (programId, dayIndex) => {
		const program = getProgram(programId);
		if (!program) return get().startEmpty();
		const day = program.days[dayIndex] ?? program.days[0];
		const session = sessionFromItems(day.name, day.items, get().sessions, programId, dayIndex);
		set({
			activeSession: session,
			restUntil: null
		});
		return session;
	},
	startEmpty: (name = "Buổi tự do") => {
		const session = {
			id: uid(),
			name,
			startedAt: Date.now(),
			exercises: []
		};
		set({
			activeSession: session,
			restUntil: null
		});
		return session;
	},
	updateSet: (exerciseIndex, setIndex, patch) => {
		const active = get().activeSession;
		if (!active) return;
		const exercises = active.exercises.map((ex, i) => {
			if (i !== exerciseIndex) return ex;
			return {
				...ex,
				sets: ex.sets.map((s, j) => j === setIndex ? {
					...s,
					...patch
				} : s)
			};
		});
		set({ activeSession: {
			...active,
			exercises
		} });
	},
	toggleSet: (exerciseIndex, setIndex) => {
		const active = get().activeSession;
		if (!active) return;
		const target = active.exercises[exerciseIndex]?.sets[setIndex];
		if (!target) return;
		const completing = !target.completed;
		const exercises = active.exercises.map((ex, i) => {
			if (i !== exerciseIndex) return ex;
			const sets = ex.sets.map((s, j) => {
				if (j !== setIndex) return s;
				return {
					...s,
					completed: completing
				};
			});
			if (completing) {
				const next = sets[setIndex + 1];
				const cur = sets[setIndex];
				if (next && !next.completed && next.weight === 0 && cur) sets[setIndex + 1] = {
					...next,
					weight: cur.weight,
					reps: cur.reps
				};
			}
			return {
				...ex,
				sets
			};
		});
		const rest = completing ? active.exercises[exerciseIndex]?.rest ?? get().profile.restDefault : 0;
		set({
			activeSession: {
				...active,
				exercises
			},
			restUntil: completing && rest > 0 ? Date.now() + rest * 1e3 : get().restUntil
		});
	},
	addSet: (exerciseIndex) => {
		const active = get().activeSession;
		if (!active) return;
		const exercises = active.exercises.map((ex, i) => {
			if (i !== exerciseIndex) return ex;
			const last = ex.sets[ex.sets.length - 1];
			return {
				...ex,
				sets: [...ex.sets, {
					id: uid(),
					weight: last?.weight ?? 0,
					reps: last?.reps ?? 8,
					completed: false
				}]
			};
		});
		set({ activeSession: {
			...active,
			exercises
		} });
	},
	removeSet: (exerciseIndex, setIndex) => {
		const active = get().activeSession;
		if (!active) return;
		const exercises = active.exercises.map((ex, i) => {
			if (i !== exerciseIndex) return ex;
			if (ex.sets.length <= 1) return ex;
			return {
				...ex,
				sets: ex.sets.filter((_, j) => j !== setIndex)
			};
		});
		set({ activeSession: {
			...active,
			exercises
		} });
	},
	addExercise: (exerciseId) => {
		const active = get().activeSession;
		if (!active) return;
		if (active.exercises.some((e) => e.exerciseId === exerciseId)) return;
		const prev = lastPerformance(get().sessions, exerciseId);
		const rest = get().profile.restDefault;
		const sets = (prev && prev.length ? prev : [{
			id: "",
			weight: 0,
			reps: 10,
			completed: false
		}]).map((s) => ({
			id: uid(),
			weight: s.weight,
			reps: s.reps || 10,
			completed: false
		}));
		while (sets.length < 3) {
			const last = sets[sets.length - 1];
			sets.push({
				id: uid(),
				weight: last?.weight ?? 0,
				reps: last?.reps ?? 10,
				completed: false
			});
		}
		set({ activeSession: {
			...active,
			exercises: [...active.exercises, {
				id: uid(),
				exerciseId,
				rest,
				sets
			}]
		} });
	},
	removeExercise: (exerciseIndex) => {
		const active = get().activeSession;
		if (!active) return;
		set({ activeSession: {
			...active,
			exercises: active.exercises.filter((_, i) => i !== exerciseIndex)
		} });
	},
	startRest: (seconds) => set({ restUntil: Date.now() + seconds * 1e3 }),
	skipRest: () => set({ restUntil: null }),
	adjustRest: (deltaSec) => {
		const until = get().restUntil;
		if (!until) return;
		set({ restUntil: Math.max(Date.now() + 1e3, until + deltaSec * 1e3) });
	},
	finishWorkout: () => {
		const active = get().activeSession;
		if (!active) return null;
		const finished = {
			...active,
			finishedAt: Date.now(),
			durationSec: Math.max(1, Math.round((Date.now() - active.startedAt) / 1e3))
		};
		const dayIndex = active.dayIndex;
		set((s) => ({
			sessions: [finished, ...s.sessions].slice(0, 250),
			activeSession: null,
			restUntil: null,
			lastProgramDayIndex: typeof dayIndex === "number" ? dayIndex : s.lastProgramDayIndex
		}));
		return finished;
	},
	discardWorkout: () => set({
		activeSession: null,
		restUntil: null
	}),
	deleteSession: (id) => set((s) => ({ sessions: s.sessions.filter((x) => x.id !== id) })),
	addBodyLog: (weight, date) => {
		const day = date ?? isoDay();
		set((s) => {
			return { bodyLogs: [...s.bodyLogs.filter((b) => b.date !== day), {
				id: uid(),
				date: day,
				weight
			}].sort((a, b) => a.date.localeCompare(b.date)) };
		});
	},
	deleteBodyLog: (id) => set((s) => ({ bodyLogs: s.bodyLogs.filter((b) => b.id !== id) })),
	resetAll: () => set({
		onboarded: false,
		profile: defaultProfile,
		activeProgramId: null,
		lastProgramDayIndex: -1,
		sessions: [],
		activeSession: null,
		restUntil: null,
		bodyLogs: []
	})
}), {
	name: "forge-gym-v1",
	storage: createJSONStorage(() => localStorage),
	skipHydration: true,
	partialize: (s) => ({
		onboarded: s.onboarded,
		profile: s.profile,
		activeProgramId: s.activeProgramId,
		lastProgramDayIndex: s.lastProgramDayIndex,
		sessions: s.sessions,
		activeSession: s.activeSession,
		restUntil: s.restUntil,
		bodyLogs: s.bodyLogs
	})
}));
function rehydrateGymStore() {
	const finish = () => {
		if (!useGymStore.getState().hydrated) useGymStore.getState().setHydrated(true);
	};
	try {
		const result = useGymStore.persist.rehydrate();
		if (result != null && typeof result === "object" && "then" in result && typeof result.then === "function") result.then(finish, finish);
		else finish();
	} catch {
		finish();
	}
	window.setTimeout(finish, 50);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none transition-[transform,background-color,color,opacity,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "border border-border bg-transparent text-fg hover:bg-elevated",
			ghost: "text-fg hover:bg-elevated",
			sage: "bg-accent text-accent-fg hover:bg-accent/90",
			danger: "bg-danger text-fg hover:bg-danger/90",
			muted: "bg-elevated text-fg hover:bg-elevated/80"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			xl: "h-14 rounded-lg px-6 text-base",
			icon: "size-11 rounded-md",
			"icon-sm": "size-9 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-elevated px-3 text-base text-fg transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-40", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
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
var GOAL_HINT = {
	muscle: "Hypertrophy, 8–12 reps",
	strength: "Tạ nặng, rest dài",
	fat: "Volume đều, ít nghỉ",
	endurance: "Nhiều set, nhịp nhanh"
};
var LEVEL_HINT = {
	beginner: "3 buổi / tuần",
	intermediate: "4 buổi / tuần",
	advanced: "5–6 buổi / tuần"
};
function Onboarding() {
	const complete = useGymStore((s) => s.completeOnboarding);
	const [step, setStep] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)("");
	const [goal, setGoal] = (0, import_react.useState)("muscle");
	const [level, setLevel] = (0, import_react.useState)("beginner");
	const [programId, setProgramId] = (0, import_react.useState)(recommendProgram("beginner").id);
	function pickLevel(next) {
		setLevel(next);
		setProgramId(recommendProgram(next).id);
	}
	function finish() {
		complete({
			name: name.trim() || "Bạn",
			goal,
			level,
			programId
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm font-semibold tracking-[0.2em] text-muted",
				children: "FORGE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex-1",
				children: [
					step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl font-semibold leading-none tracking-tight",
							children: "Tên bạn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Dùng để chào trước buổi tập."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-8 h-14 rounded-lg text-lg",
							placeholder: "Ví dụ: Minh",
							value: name,
							autoFocus: true,
							onChange: (e) => setName(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") setStep(1);
							}
						})
					] }) : null,
					step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl font-semibold leading-none tracking-tight",
							children: "Mục tiêu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Chọn một. Có thể đổi sau."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-2 gap-3",
							children: GOALS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setGoal(g),
								className: cn("rounded-xl border px-4 py-5 text-left transition-[border-color,background-color] duration-150", goal === g ? "border-primary bg-elevated" : "border-border bg-surface hover:border-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-semibold",
									children: GOAL_LABEL[g]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: GOAL_HINT[g]
								})]
							}, g))
						})
					] }) : null,
					step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl font-semibold leading-none tracking-tight",
							children: "Kinh nghiệm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Để gợi ý giáo án phù hợp."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-col gap-3",
							children: LEVELS.map((lv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => pickLevel(lv),
								className: cn("rounded-xl border px-4 py-5 text-left transition-[border-color,background-color] duration-150", level === lv ? "border-primary bg-elevated" : "border-border bg-surface hover:border-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl font-semibold",
									children: LEVEL_LABEL[lv]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: LEVEL_HINT[lv]
								})]
							}, lv))
						})
					] }) : null,
					step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-5xl font-semibold leading-none tracking-tight",
							children: "Giáo án"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Bắt đầu với một lịch. Đổi bất cứ lúc nào."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-col gap-3",
							children: PROGRAMS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setProgramId(p.id),
								className: cn("rounded-xl border px-4 py-4 text-left transition-[border-color,background-color] duration-150", programId === p.id ? "border-primary bg-elevated" : "border-border bg-surface hover:border-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl font-semibold",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted",
										children: [
											p.daysPerWeek,
											" buổi · ",
											p.minutes,
											"p"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: p.tagline
								})]
							}, p.id))
						})
					] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center gap-3",
				children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					className: "flex-1",
					onClick: () => setStep(step - 1),
					children: "Quay lại"
				}) : null, step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => setStep(step + 1),
					children: "Tiếp"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: finish,
					children: "Bắt đầu"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-center text-xs text-subtle",
				children: [step + 1, " / 4"]
			})
		]
	});
}
function beep() {
	try {
		const ctx = new AudioContext();
		const now = ctx.currentTime;
		for (let i = 0; i < 3; i++) {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "sine";
			osc.frequency.value = 880;
			gain.gain.setValueAtTime(1e-4, now);
			gain.gain.exponentialRampToValueAtTime(.07, now + i * .18 + .01);
			gain.gain.exponentialRampToValueAtTime(1e-4, now + i * .18 + .12);
			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(now + i * .18);
			osc.stop(now + i * .18 + .13);
		}
	} catch {}
}
function RestTimer() {
	const restUntil = useGymStore((s) => s.restUntil);
	const skipRest = useGymStore((s) => s.skipRest);
	const adjustRest = useGymStore((s) => s.adjustRest);
	const inWorkout = useRouterState({ select: (s) => s.location.pathname.startsWith("/workout") });
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		if (!restUntil) return;
		const id = window.setInterval(() => setNow(Date.now()), 200);
		return () => window.clearInterval(id);
	}, [restUntil]);
	(0, import_react.useEffect)(() => {
		if (!restUntil) return;
		if (restUntil - Date.now() <= 0) {
			beep();
			skipRest();
		}
	}, [
		now,
		restUntil,
		skipRest
	]);
	if (!restUntil) return null;
	const remainMs = Math.max(0, restUntil - now);
	const remainSec = Math.ceil(remainMs / 1e3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 z-50 px-4",
		style: { bottom: inWorkout ? "calc(5rem + env(safe-area-inset-bottom))" : "calc(8.75rem + env(safe-area-inset-bottom))" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-lg items-center gap-3 rounded-xl border border-border bg-elevated p-3 shadow-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted uppercase",
						children: "Nghỉ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl leading-none font-semibold tabular-nums tracking-tight",
						children: formatDuration(remainSec)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => adjustRest(15),
					children: "+15s"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "muted",
					size: "sm",
					onClick: skipRest,
					children: "Bỏ qua"
				})
			]
		})
	});
}
function ActiveBar() {
	const session = useGymStore((s) => s.activeSession);
	const [now, setNow] = (0, import_react.useState)(Date.now());
	(0, import_react.useEffect)(() => {
		if (!session) return;
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, [session]);
	if (!session) return null;
	const { done, total } = sessionSetCount(session);
	const elapsed = Math.floor((now - session.startedAt) / 1e3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/workout",
		className: "fixed inset-x-0 z-30 mx-auto max-w-2xl px-4",
		style: { bottom: "calc(4.5rem + env(safe-area-inset-bottom))" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 rounded-xl border border-border bg-elevated px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-display text-lg font-semibold leading-none",
					children: session.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted tabular-nums",
					children: [
						formatDuration(elapsed),
						" · ",
						done,
						"/",
						total,
						" set"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-fg",
				children: "Tiếp tục"
			})]
		})
	});
}
var NAV = [
	{
		to: "/",
		label: "Hôm nay",
		icon: House
	},
	{
		to: "/library",
		label: "Bài tập",
		icon: BookOpen
	},
	{
		to: "/history",
		label: "Lịch sử",
		icon: CalendarDays
	},
	{
		to: "/progress",
		label: "Tiến độ",
		icon: Activity
	},
	{
		to: "/profile",
		label: "Tôi",
		icon: UserRound
	}
];
function AppShell({ children }) {
	const hydrated = useGymStore((s) => s.hydrated);
	const onboarded = useGymStore((s) => s.onboarded);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const inWorkout = pathname.startsWith("/workout");
	(0, import_react.useEffect)(() => {
		rehydrateGymStore();
	}, []);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-5xl font-semibold tracking-tight text-fg",
			children: "FORGE"
		})
	});
	if (!onboarded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("mx-auto min-h-dvh w-full", inWorkout ? "max-w-lg" : "max-w-2xl"),
				children
			}),
			!inWorkout ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveBar, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95",
				style: { paddingBottom: "env(safe-area-inset-bottom)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto flex h-16 max-w-2xl items-stretch",
					children: NAV.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex h-full flex-col items-center justify-center gap-0.5 text-xs tracking-wide transition-colors duration-150", active ? "text-fg" : "text-subtle hover:text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: active ? 2.2 : 1.8
								}), item.label]
							})
						}, item.to);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RestTimer, {})
		]
	});
}
var styles_default = "/assets/styles-Br8KpAWx.css";
var APP_NAME = "FORGE";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0b0c0b"
			},
			{
				name: "description",
				content: "Ghi log buổi tập, theo dõi PR và giáo án gym — FORGE."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Outfit:wght@400;500;600&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "vi",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-C0BCrDOA.mjs");
var Route$8 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./history-yK9MbaCQ.mjs");
var Route$7 = createFileRoute("/history")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./library-RgZyvD3P.mjs");
var Route$6 = createFileRoute("/library")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./profile-CeRZ1xYx.mjs");
var Route$5 = createFileRoute("/profile")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./programs-BpZBWRhZ.mjs");
var Route$4 = createFileRoute("/programs")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./progress-DBzbYDRA.mjs");
var Route$3 = createFileRoute("/progress")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./workout-Br3xFaHP.mjs");
var Route$2 = createFileRoute("/workout")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./history._sessionId-BLNgJ2nl.mjs");
var Route$1 = createFileRoute("/history/$sessionId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./library._exerciseId-D0tBSpKB.mjs");
var Route = createFileRoute("/library/$exerciseId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var HistoryRoute = Route$7.update({
	id: "/history",
	path: "/history",
	getParentRoute: () => Route$9
});
var LibraryRoute = Route$6.update({
	id: "/library",
	path: "/library",
	getParentRoute: () => Route$9
});
var ProfileRoute = Route$5.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$9
});
var ProgramsRoute = Route$4.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$9
});
var ProgressRoute = Route$3.update({
	id: "/progress",
	path: "/progress",
	getParentRoute: () => Route$9
});
var WorkoutRoute = Route$2.update({
	id: "/workout",
	path: "/workout",
	getParentRoute: () => Route$9
});
var HistorySessionIdRoute = Route$1.update({
	id: "/$sessionId",
	path: "/$sessionId",
	getParentRoute: () => HistoryRoute
});
var LibraryExerciseIdRoute = Route.update({
	id: "/$exerciseId",
	path: "/$exerciseId",
	getParentRoute: () => LibraryRoute
});
var HistoryRouteChildren = { HistorySessionIdRoute };
var HistoryRouteWithChildren = HistoryRoute._addFileChildren(HistoryRouteChildren);
var LibraryRouteChildren = { LibraryExerciseIdRoute };
var rootRouteChildren = {
	IndexRoute,
	HistoryRoute: HistoryRouteWithChildren,
	LibraryRoute: LibraryRoute._addFileChildren(LibraryRouteChildren),
	ProfileRoute,
	ProgramsRoute,
	ProgressRoute,
	WorkoutRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { formatShortDate as A, LEVEL_LABEL as C, formatDate as D, cn as E, weekdayDots as F, getExercise as M, isoDay as N, formatDuration as O, requireExercise as P, GOAL_LABEL as S, MUSCLE_ORDER as T, weeklyVolumeSeries as _, Button as a, EQUIPMENT_LABEL as b, currentStreak as c, lastPerformance as d, sessionSetCount as f, trainedDayKeys as g, topRecords as h, Input as i, formatVolume as j, formatKg as k, epley1rm as l, sessionsThisWeek as m, Route as n, useGymStore as o, sessionVolume as p, Route$1 as r, bestRecords as s, router_exports as t, exerciseHistory as u, PROGRAMS as v, MUSCLE_LABEL as w, EXERCISES as x, getProgram as y };
