import type { Level, Program } from "./types";

export const PROGRAMS: Program[] = [
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
          { exerciseId: "squat", sets: 3, reps: 8, rest: 120 },
          { exerciseId: "bench-press", sets: 3, reps: 8, rest: 120 },
          { exerciseId: "barbell-row", sets: 3, reps: 8, rest: 90 },
          { exerciseId: "ohp", sets: 3, reps: 8, rest: 90 },
          { exerciseId: "rdl", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "barbell-curl", sets: 2, reps: 12, rest: 60 },
          { exerciseId: "plank", sets: 3, reps: 40, rest: 45 },
        ],
      },
      {
        name: "Full B",
        focus: "Deadlift · Vai · Kéo",
        items: [
          { exerciseId: "deadlift", sets: 3, reps: 5, rest: 180 },
          { exerciseId: "incline-db", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "lat-pulldown", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "lateral-raise", sets: 3, reps: 12, rest: 60 },
          { exerciseId: "lunge", sets: 3, reps: 10, rest: 75 },
          { exerciseId: "tricep-pushdown", sets: 2, reps: 12, rest: 60 },
          { exerciseId: "hanging-raise", sets: 3, reps: 10, rest: 45 },
        ],
      },
      {
        name: "Full C",
        focus: "Chân · Đẩy · Kéo",
        items: [
          { exerciseId: "front-squat", sets: 3, reps: 6, rest: 150 },
          { exerciseId: "db-bench", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "seated-row", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "arnold-press", sets: 3, reps: 10, rest: 75 },
          { exerciseId: "hip-thrust", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "hammer-curl", sets: 2, reps: 12, rest: 60 },
          { exerciseId: "cable-crunch", sets: 3, reps: 12, rest: 45 },
        ],
      },
    ],
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
          { exerciseId: "bench-press", sets: 4, reps: 6, rest: 150 },
          { exerciseId: "barbell-row", sets: 4, reps: 8, rest: 120 },
          { exerciseId: "ohp", sets: 3, reps: 8, rest: 90 },
          { exerciseId: "lat-pulldown", sets: 3, reps: 10, rest: 75 },
          { exerciseId: "lateral-raise", sets: 3, reps: 15, rest: 45 },
          { exerciseId: "barbell-curl", sets: 3, reps: 10, rest: 60 },
          { exerciseId: "tricep-pushdown", sets: 3, reps: 12, rest: 60 },
        ],
      },
      {
        name: "Lower A",
        focus: "Squat · Hamstring",
        items: [
          { exerciseId: "squat", sets: 4, reps: 6, rest: 180 },
          { exerciseId: "rdl", sets: 3, reps: 8, rest: 120 },
          { exerciseId: "leg-press", sets: 3, reps: 12, rest: 90 },
          { exerciseId: "leg-curl", sets: 3, reps: 12, rest: 60 },
          { exerciseId: "calf-raise", sets: 4, reps: 12, rest: 45 },
          { exerciseId: "plank", sets: 3, reps: 45, rest: 45 },
        ],
      },
      {
        name: "Upper B",
        focus: "Đẩy nghiêng · Kéo dọc",
        items: [
          { exerciseId: "incline-bench", sets: 4, reps: 8, rest: 120 },
          { exerciseId: "pull-up", sets: 4, reps: 6, rest: 120 },
          { exerciseId: "db-shoulder-press", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "seated-row", sets: 3, reps: 10, rest: 75 },
          { exerciseId: "face-pull", sets: 3, reps: 15, rest: 45 },
          { exerciseId: "hammer-curl", sets: 3, reps: 12, rest: 60 },
          { exerciseId: "chest-dip", sets: 3, reps: 8, rest: 75 },
        ],
      },
      {
        name: "Lower B",
        focus: "Deadlift · Mông",
        items: [
          { exerciseId: "deadlift", sets: 3, reps: 5, rest: 180 },
          { exerciseId: "front-squat", sets: 3, reps: 8, rest: 120 },
          { exerciseId: "bulgarian-split", sets: 3, reps: 8, rest: 90 },
          { exerciseId: "hip-thrust", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "leg-extension", sets: 3, reps: 12, rest: 60 },
          { exerciseId: "hanging-raise", sets: 3, reps: 10, rest: 45 },
        ],
      },
    ],
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
          { exerciseId: "bench-press", sets: 4, reps: 6, rest: 150 },
          { exerciseId: "incline-db", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "ohp", sets: 3, reps: 8, rest: 90 },
          { exerciseId: "lateral-raise", sets: 4, reps: 15, rest: 45 },
          { exerciseId: "cable-crossover", sets: 3, reps: 12, rest: 45 },
          { exerciseId: "tricep-pushdown", sets: 3, reps: 12, rest: 60 },
          { exerciseId: "oh-extension", sets: 2, reps: 12, rest: 60 },
        ],
      },
      {
        name: "Pull A",
        focus: "Lưng · Tay trước",
        items: [
          { exerciseId: "deadlift", sets: 3, reps: 5, rest: 180 },
          { exerciseId: "lat-pulldown", sets: 4, reps: 10, rest: 90 },
          { exerciseId: "barbell-row", sets: 3, reps: 8, rest: 90 },
          { exerciseId: "face-pull", sets: 3, reps: 15, rest: 45 },
          { exerciseId: "barbell-curl", sets: 3, reps: 10, rest: 60 },
          { exerciseId: "hammer-curl", sets: 2, reps: 12, rest: 60 },
        ],
      },
      {
        name: "Legs A",
        focus: "Squat · Đùi sau",
        items: [
          { exerciseId: "squat", sets: 4, reps: 6, rest: 180 },
          { exerciseId: "rdl", sets: 3, reps: 8, rest: 120 },
          { exerciseId: "leg-press", sets: 3, reps: 12, rest: 90 },
          { exerciseId: "leg-curl", sets: 3, reps: 12, rest: 60 },
          { exerciseId: "calf-raise", sets: 4, reps: 12, rest: 45 },
          { exerciseId: "hanging-raise", sets: 3, reps: 12, rest: 45 },
        ],
      },
      {
        name: "Push B",
        focus: "Ngực trên · Vai",
        items: [
          { exerciseId: "incline-bench", sets: 4, reps: 8, rest: 120 },
          { exerciseId: "db-bench", sets: 3, reps: 10, rest: 90 },
          { exerciseId: "arnold-press", sets: 3, reps: 10, rest: 75 },
          { exerciseId: "chest-fly", sets: 3, reps: 12, rest: 45 },
          { exerciseId: "lateral-raise", sets: 3, reps: 15, rest: 45 },
          { exerciseId: "close-grip-bench", sets: 3, reps: 8, rest: 90 },
          { exerciseId: "skull-crusher", sets: 2, reps: 10, rest: 75 },
        ],
      },
      {
        name: "Pull B",
        focus: "Kéo dọc · Vai sau",
        items: [
          { exerciseId: "pull-up", sets: 4, reps: 6, rest: 120 },
          { exerciseId: "seated-row", sets: 4, reps: 10, rest: 75 },
          { exerciseId: "db-row", sets: 3, reps: 10, rest: 75 },
          { exerciseId: "rear-delt-fly", sets: 3, reps: 15, rest: 45 },
          { exerciseId: "preacher-curl", sets: 3, reps: 12, rest: 60 },
          { exerciseId: "face-pull", sets: 3, reps: 15, rest: 45 },
        ],
      },
      {
        name: "Legs B",
        focus: "Mông · Đơn chân",
        items: [
          { exerciseId: "front-squat", sets: 4, reps: 6, rest: 150 },
          { exerciseId: "hip-thrust", sets: 4, reps: 8, rest: 90 },
          { exerciseId: "bulgarian-split", sets: 3, reps: 8, rest: 75 },
          { exerciseId: "leg-extension", sets: 3, reps: 15, rest: 45 },
          { exerciseId: "leg-curl", sets: 3, reps: 12, rest: 60 },
          { exerciseId: "calf-raise", sets: 4, reps: 15, rest: 45 },
        ],
      },
    ],
  },
  {
    id: "starting-strength",
    name: "Sức mạnh 5×5",
    tagline: "Ba bài kép mỗi buổi. Tăng tạ tuyến tính.",
    level: "beginner",
    daysPerWeek: 3,
    minutes: 45,
    days: [
      {
        name: "Buổi A",
        focus: "Squat · Bench · Row",
        items: [
          { exerciseId: "squat", sets: 5, reps: 5, rest: 180 },
          { exerciseId: "bench-press", sets: 5, reps: 5, rest: 180 },
          { exerciseId: "barbell-row", sets: 5, reps: 5, rest: 150 },
        ],
      },
      {
        name: "Buổi B",
        focus: "Squat · Vai · Deadlift",
        items: [
          { exerciseId: "squat", sets: 5, reps: 5, rest: 180 },
          { exerciseId: "ohp", sets: 5, reps: 5, rest: 150 },
          { exerciseId: "deadlift", sets: 1, reps: 5, rest: 180 },
        ],
      },
    ],
  },
];

const byId = new Map(PROGRAMS.map((p) => [p.id, p]));

export function getProgram(id: string | null | undefined): Program | undefined {
  if (!id) return undefined;
  return byId.get(id);
}

export function recommendProgram(level: Level): Program {
  if (level === "beginner") return PROGRAMS[0]!;
  if (level === "intermediate") return PROGRAMS[1]!;
  return PROGRAMS[2]!;
}
