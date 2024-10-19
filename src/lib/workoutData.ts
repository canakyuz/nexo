// src/lib/workoutData.ts

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  notes?: string;
}

export interface WorkoutSplit {
  name: string;
  exercises: Exercise[];
}

export interface DayProgram {
  warmup: string;
  workoutSplits: Record<string, WorkoutSplit>;
  cardio: string;
  cooldown: string;
}

export const exercisePrograms: Record<number, DayProgram> = {
  1: {
    warmup: "10 minutes light cardiovascular activity and dynamic stretching",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          {
            name: "Barbell Back Squat",
            sets: 3,
            reps: "8-10",
            rest: "90 seconds",
          },
          { name: "Bench Press", sets: 3, reps: "8-10", rest: "90 seconds" },
          { name: "Bent-over Row", sets: 3, reps: "10-12", rest: "60 seconds" },
          { name: "Overhead Press", sets: 3, reps: "8-10", rest: "60 seconds" },
          {
            name: "Romanian Deadlift",
            sets: 3,
            reps: "10-12",
            rest: "90 seconds",
          },
          { name: "Plank", sets: 3, reps: "30-60 seconds", rest: "30 seconds" },
        ],
      },
      Push: {
        name: "Push",
        exercises: [
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          {
            name: "Seated Shoulder Press",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          { name: "Tricep Dips", sets: 3, reps: "12-15", rest: "45 seconds" },
          { name: "Chest Flyes", sets: 3, reps: "12-15", rest: "45 seconds" },
          {
            name: "Lateral Raises",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          { name: "Deadlifts", sets: 3, reps: "6-8", rest: "120 seconds" },
          {
            name: "Pull-ups or Lat Pulldown",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          { name: "Barbell Rows", sets: 3, reps: "8-10", rest: "60 seconds" },
          { name: "Face Pulls", sets: 3, reps: "12-15", rest: "45 seconds" },
          { name: "Bicep Curls", sets: 3, reps: "10-12", rest: "45 seconds" },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Incline Bench Press",
            sets: 3,
            reps: "8-10",
            rest: "90 seconds",
          },
          {
            name: "Seated Cable Row",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          { name: "Overhead Press", sets: 3, reps: "8-10", rest: "60 seconds" },
          { name: "Lat Pulldown", sets: 3, reps: "10-12", rest: "60 seconds" },
          {
            name: "Tricep Pushdown",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          { name: "Bicep Curls", sets: 3, reps: "12-15", rest: "45 seconds" },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          { name: "Back Squats", sets: 3, reps: "6-8", rest: "120 seconds" },
          {
            name: "Romanian Deadlifts",
            sets: 3,
            reps: "8-10",
            rest: "90 seconds",
          },
          {
            name: "Walking Lunges",
            sets: 3,
            reps: "10-12 each leg",
            rest: "60 seconds",
          },
          { name: "Leg Press", sets: 3, reps: "12-15", rest: "60 seconds" },
          { name: "Calf Raises", sets: 3, reps: "15-20", rest: "45 seconds" },
          {
            name: "Planks",
            sets: 3,
            reps: "30-60 seconds",
            rest: "30 seconds",
          },
        ],
      },
    },
    cardio: "20 minutes moderate-intensity running or cycling",
    cooldown: "10 minutes static stretching",
  },
  2: {
    warmup: "10 minutes dynamic stretching and light plyometric movements",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          {
            name: "Dumbbell Lunges",
            sets: 3,
            reps: "10-12 each leg",
            rest: "60 seconds",
          },
          { name: "Push-ups", sets: 3, reps: "12-15", rest: "45 seconds" },
          {
            name: "Dumbbell Rows",
            sets: 3,
            reps: "10-12 each arm",
            rest: "45 seconds",
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          { name: "Goblet Squats", sets: 3, reps: "12-15", rest: "60 seconds" },
          {
            name: "Russian Twists",
            sets: 3,
            reps: "20 total",
            rest: "30 seconds",
          },
        ],
      },
      Push: {
        name: "Push",
        exercises: [
          {
            name: "Dumbbell Bench Press",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          { name: "Arnold Press", sets: 3, reps: "10-12", rest: "60 seconds" },
          {
            name: "Incline Push-ups",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          {
            name: "Dumbbell Flyes",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          {
            name: "Tricep Overhead Extension",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          {
            name: "Chin-ups or Assisted Chin-ups",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          {
            name: "One-Arm Dumbbell Rows",
            sets: 3,
            reps: "10-12 each arm",
            rest: "45 seconds",
          },
          { name: "Face Pulls", sets: 3, reps: "15-20", rest: "45 seconds" },
          { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "45 seconds" },
          {
            name: "Back Extensions",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Dumbbell Chest Press",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          {
            name: "Bent-Over Dumbbell Rows",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          {
            name: "Lateral Raises",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          { name: "Tricep Dips", sets: 3, reps: "12-15", rest: "45 seconds" },
          {
            name: "Dumbbell Curls",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          {
            name: "Dumbbell Squats",
            sets: 3,
            reps: "10-12",
            rest: "90 seconds",
          },
          {
            name: "Dumbbell Romanian Deadlifts",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          {
            name: "Bulgarian Split Squats",
            sets: 3,
            reps: "10-12 each leg",
            rest: "60 seconds",
          },
          {
            name: "Step-ups",
            sets: 3,
            reps: "12-15 each leg",
            rest: "45 seconds",
          },
          { name: "Calf Raises", sets: 3, reps: "15-20", rest: "30 seconds" },
        ],
      },
    },
    cardio:
      "20 minutes HIIT: 30 seconds high intensity, 30 seconds rest (10 rounds)",
    cooldown: "10 minutes static stretching and foam rolling",
  },
  3: {
    warmup: "10 minutes light jogging and dynamic stretching",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          { name: "Barbell Squats", sets: 4, reps: "6-8", rest: "120 seconds" },
          {
            name: "Incline Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          {
            name: "Weighted Pull-ups",
            sets: 3,
            reps: "6-8",
            rest: "90 seconds",
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          {
            name: "Barbell Hip Thrusts",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          {
            name: "Hanging Leg Raises",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
        ],
      },
      Push: {
        name: "Push",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: 4,
            reps: "6-8",
            rest: "120 seconds",
          },
          { name: "Military Press", sets: 4, reps: "6-8", rest: "90 seconds" },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          { name: "Cable Flyes", sets: 3, reps: "10-12", rest: "45 seconds" },
          {
            name: "Skull Crushers",
            sets: 3,
            reps: "10-12",
            rest: "45 seconds",
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          { name: "Barbell Rows", sets: 4, reps: "6-8", rest: "90 seconds" },
          {
            name: "Weighted Pull-ups",
            sets: 4,
            reps: "6-8",
            rest: "90 seconds",
          },
          { name: "T-Bar Rows", sets: 3, reps: "8-10", rest: "60 seconds" },
          { name: "Face Pulls", sets: 3, reps: "12-15", rest: "45 seconds" },
          { name: "Barbell Curls", sets: 3, reps: "8-10", rest: "60 seconds" },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: 4,
            reps: "6-8",
            rest: "120 seconds",
          },
          {
            name: "Weighted Pull-ups",
            sets: 4,
            reps: "6-8",
            rest: "90 seconds",
          },
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          { name: "Cable Rows", sets: 3, reps: "10-12", rest: "60 seconds" },
          { name: "Dips", sets: 3, reps: "10-12", rest: "45 seconds" },
          { name: "EZ-Bar Curls", sets: 3, reps: "10-12", rest: "45 seconds" },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          { name: "Barbell Squats", sets: 4, reps: "6-8", rest: "120 seconds" },
          {
            name: "Romanian Deadlifts",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          { name: "Leg Press", sets: 3, reps: "10-12", rest: "60 seconds" },
          {
            name: "Walking Lunges",
            sets: 3,
            reps: "10-12 each leg",
            rest: "60 seconds",
          },
          {
            name: "Seated Calf Raises",
            sets: 4,
            reps: "12-15",
            rest: "30 seconds",
          },
        ],
      },
    },
    cardio:
      "20 minutes Metabolic Circuit: 45 seconds work, 15 seconds rest (8 rounds) - Burpee, Mountain Climber, Kettlebell Swing, Jump Rope",
    cooldown: "10 minutes yoga-based stretching exercises",
  },
  4: {
    warmup: "10 minutes elliptical machine and dynamic stretching",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          { name: "Front Squats", sets: 4, reps: "6-8", rest: "120 seconds" },
          { name: "Weighted Dips", sets: 4, reps: "6-8", rest: "90 seconds" },
          { name: "Pendlay Rows", sets: 4, reps: "6-8", rest: "90 seconds" },
          {
            name: "Standing Overhead Press",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          {
            name: "Dumbbell Walking Lunges",
            sets: 3,
            reps: "10-12 each leg",
            rest: "60 seconds",
          },
          {
            name: "Cable Crunches",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
        ],
      },
      Push: {
        name: "Push",
        exercises: [
          {
            name: "Incline Barbell Bench Press",
            sets: 4,
            reps: "6-8",
            rest: "120 seconds",
          },
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          {
            name: "Close-Grip Bench Press",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          {
            name: "Cable Lateral Raises",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          {
            name: "Overhead Tricep Extension",
            sets: 3,
            reps: "10-12",
            rest: "45 seconds",
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          { name: "Deadlifts", sets: 4, reps: "5-6", rest: "180 seconds" },
          {
            name: "Weighted Chin-ups",
            sets: 4,
            reps: "6-8",
            rest: "90 seconds",
          },
          {
            name: "Seated Cable Rows",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          {
            name: "Dumbbell Shrugs",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          {
            name: "Preacher Curls",
            sets: 3,
            reps: "10-12",
            rest: "45 seconds",
          },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          { name: "Lat Pulldowns", sets: 4, reps: "8-10", rest: "90 seconds" },
          {
            name: "Machine Shoulder Press",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          { name: "Face Pulls", sets: 3, reps: "12-15", rest: "45 seconds" },
          {
            name: "Cable Tricep Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          { name: "Hammer Curls", sets: 3, reps: "12-15", rest: "45 seconds" },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          { name: "Hack Squats", sets: 4, reps: "8-10", rest: "120 seconds" },
          {
            name: "Stiff-Legged Deadlifts",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          {
            name: "Leg Extensions",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          { name: "Leg Curls", sets: 3, reps: "12-15", rest: "45 seconds" },
          {
            name: "Standing Calf Raises",
            sets: 4,
            reps: "15-20",
            rest: "30 seconds",
          },
        ],
      },
    },
    cardio: "20 minutes Tabata protocol (20 seconds work, 10 seconds rest)",
    cooldown: "10 minutes static stretching and deep breathing exercises",
  },
  5: {
    warmup: "10 minutes yoga-based movements and dynamic stretching",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          {
            name: "Trap Bar Deadlifts",
            sets: 4,
            reps: "6-8",
            rest: "120 seconds",
          },
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          {
            name: "Bulgarian Split Squats",
            sets: 3,
            reps: "10-12 each leg",
            rest: "60 seconds",
          },
          { name: "Pull-ups", sets: 3, reps: "8-10", rest: "60 seconds" },
          {
            name: "Dumbbell Lateral Raises",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          {
            name: "Ab Wheel Rollouts",
            sets: 3,
            reps: "10-12",
            rest: "45 seconds",
          },
        ],
      },
      Push: {
        name: "Push",
        exercises: [
          {
            name: "Dumbbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          { name: "Push Press", sets: 4, reps: "6-8", rest: "90 seconds" },
          {
            name: "Landmine Press",
            sets: 3,
            reps: "10-12 each arm",
            rest: "60 seconds",
          },
          { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "45 seconds" },
          {
            name: "Tricep Rope Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          { name: "Rack Pulls", sets: 4, reps: "6-8", rest: "120 seconds" },
          {
            name: "Chest-Supported Rows",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          {
            name: "Single-Arm Dumbbell Rows",
            sets: 3,
            reps: "10-12 each arm",
            rest: "60 seconds",
          },
          { name: "Reverse Flyes", sets: 3, reps: "12-15", rest: "45 seconds" },
          {
            name: "Incline Dumbbell Curls",
            sets: 3,
            reps: "10-12",
            rest: "45 seconds",
          },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Neutral-Grip Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 seconds",
          },
          { name: "Chin-ups", sets: 4, reps: "6-8", rest: "90 seconds" },
          { name: "Arnold Press", sets: 3, reps: "10-12", rest: "60 seconds" },
          {
            name: "Supinated Grip Lat Pulldowns",
            sets: 3,
            reps: "10-12",
            rest: "60 seconds",
          },
          {
            name: "Cable Tricep Kickbacks",
            sets: 3,
            reps: "12-15",
            rest: "45 seconds",
          },
          { name: "Zottman Curls", sets: 3, reps: "10-12", rest: "45 seconds" },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          {
            name: "Safety Bar Squats",
            sets: 4,
            reps: "6-8",
            rest: "120 seconds",
          },
          { name: "Good Mornings", sets: 4, reps: "8-10", rest: "90 seconds" },
          { name: "Leg Press", sets: 3, reps: "12-15", rest: "60 seconds" },
          {
            name: "Nordic Hamstring Curls",
            sets: 3,
            reps: "8-10",
            rest: "60 seconds",
          },
          {
            name: "Single-Leg Calf Raises",
            sets: 4,
            reps: "12-15 each leg",
            rest: "30 seconds",
          },
        ],
      },
    },
    cardio:
      "20 minutes low-intensity cardiovascular activity (walking or light swimming)",
    cooldown: "10 minutes meditation and breathing exercises",
  },
};

export const phases = [
  "Phase 1: Foundation Building (Weeks 1-7)",
  "Phase 2: Strength and Aesthetics Development (Weeks 8-14)",
  "Phase 3: Performance and Appearance Optimization (Weeks 15-21)",
];

export const trainingDays = [2, 3, 4, 5];

export const splitOptions = ["Full Body", "Push", "Pull", "Upper", "Lower"];

export const phaseDetails = {
  1: {
    focus:
      "Establishing baseline fitness, improving muscular endurance, and initiating fat loss",
    nutritionTips: [
      "Create a slight caloric deficit",
      "Focus on high-protein intake",
      "Emphasize whole foods and complex carbohydrates",
    ],
    progressionStrategy:
      "Gradually increase volume (reps and sets) week by week",
    recommendedSplits: {
      2: ["Full Body", "Full Body"],
      3: ["Full Body", "Full Body", "Full Body"],
      4: ["Upper", "Lower", "Upper", "Lower"],
      5: ["Push", "Pull", "Full Body", "Upper", "Lower"],
    },
  },
  2: {
    focus:
      "Building strength and muscle mass while continuing to improve body composition",
    nutritionTips: [
      "Increase caloric intake slightly",
      "Maintain high protein intake",
      "Time carbohydrates around workouts",
    ],
    progressionStrategy:
      "Progressive overload by increasing weights and decreasing reps",
    recommendedSplits: {
      2: ["Upper", "Lower"],
      3: ["Push", "Pull", "Full Body"],
      4: ["Upper", "Lower", "Push", "Pull"],
      5: ["Push", "Pull", "Full Body", "Upper", "Lower"],
    },
  },
  3: {
    focus:
      "Refining physique, enhancing athletic performance, and peak conditioning",
    nutritionTips: [
      "Fine-tune caloric intake based on individual goals",
      "Optimize meal timing for performance",
      "Consider targeted supplementation (e.g., creatine, BCAAs)",
    ],
    progressionStrategy:
      "Incorporate advanced techniques like drop sets, supersets, and periodization",
    recommendedSplits: {
      2: ["Push", "Pull"],
      3: ["Push", "Pull", "Full Body"],
      4: ["Push", "Pull", "Upper", "Lower"],
      5: ["Push", "Pull", "Full Body", "Upper", "Lower"],
    },
  },
};
