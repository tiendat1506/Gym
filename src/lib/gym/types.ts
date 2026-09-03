export type Muscle =
  | "chest"
  | "back"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "quads"
  | "hamstrings"
  | "glutes"
  | "calves"
  | "core";

export type Equipment =
  | "barbell"
  | "dumbbell"
  | "cable"
  | "machine"
  | "bodyweight"
  | "kettlebell";

export type Goal = "muscle" | "strength" | "fat" | "endurance";
export type Level = "beginner" | "intermediate" | "advanced";

export type Exercise = {
  id: string;
  name: string;
  nameEn: string;
  muscle: Muscle;
  secondary?: Muscle;
  equipment: Equipment;
  cues: string;
};

export type ProgramItem = {
  exerciseId: string;
  sets: number;
  reps: number;
  rest: number;
};

export type ProgramDay = {
  name: string;
  focus: string;
  items: ProgramItem[];
};

export type Program = {
  id: string;
  name: string;
  tagline: string;
  level: Level;
  daysPerWeek: number;
  minutes: number;
  days: ProgramDay[];
};

export type WorkoutSet = {
  id: string;
  weight: number;
  reps: number;
  completed: boolean;
};

export type SessionExercise = {
  id: string;
  exerciseId: string;
  sets: WorkoutSet[];
  rest: number;
};

export type Session = {
  id: string;
  name: string;
  programId?: string;
  dayIndex?: number;
  startedAt: number;
  finishedAt?: number;
  durationSec?: number;
  exercises: SessionExercise[];
};

export type BodyLog = {
  id: string;
  date: string;
  weight: number;
};

export type Profile = {
  name: string;
  goal: Goal;
  level: Level;
  restDefault: number;
};
