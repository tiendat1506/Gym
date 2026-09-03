import type { Goal, Level, Muscle, Equipment } from "./types";

export const MUSCLE_LABEL: Record<Muscle, string> = {
  chest: "Ngực",
  back: "Lưng",
  shoulders: "Vai",
  biceps: "Tay trước",
  triceps: "Tay sau",
  quads: "Đùi trước",
  hamstrings: "Đùi sau",
  glutes: "Mông",
  calves: "Bắp chân",
  core: "Bụng",
};

export const EQUIPMENT_LABEL: Record<Equipment, string> = {
  barbell: "Tạ đòn",
  dumbbell: "Tạ đơn",
  cable: "Cáp",
  machine: "Máy",
  bodyweight: "Bodyweight",
  kettlebell: "Kettlebell",
};

export const GOAL_LABEL: Record<Goal, string> = {
  muscle: "Tăng cơ",
  strength: "Sức mạnh",
  fat: "Giảm mỡ",
  endurance: "Sức bền",
};

export const LEVEL_LABEL: Record<Level, string> = {
  beginner: "Mới tập",
  intermediate: "Trung bình",
  advanced: "Nâng cao",
};

export const MUSCLE_ORDER: Muscle[] = [
  "chest",
  "back",
  "shoulders",
  "quads",
  "hamstrings",
  "glutes",
  "biceps",
  "triceps",
  "calves",
  "core",
];

export function formatKg(n: number): string {
  if (!Number.isFinite(n)) return "0";
  const rounded = Math.round(n * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

export function formatVolume(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    return `${k >= 10 ? k.toFixed(0) : k.toFixed(1)}k kg`;
  }
  return `${Math.round(n).toLocaleString("vi-VN")} kg`;
}

export function formatDuration(sec: number): string {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
  }
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

export function formatDate(ts: number): string {
  return new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(ts));
}

export function formatShortDate(ts: number): string {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "numeric",
    month: "short",
  }).format(new Date(ts));
}

export function startOfDay(ts = Date.now()): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function isoDay(ts = Date.now()): string {
  const d = new Date(ts);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function weekdayDots(): { key: string; label: string; ts: number }[] {
  const now = new Date();
  const day = now.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + mondayOffset);
  monday.setHours(0, 0, 0, 0);
  const labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  return labels.map((label, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { key: isoDay(d.getTime()), label, ts: d.getTime() };
  });
}
