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
    warmup: "10 dakika hafif kardiyovasküler aktivite ve dinamik germe",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          {
            name: "Goblet Squat",
            sets: 3,
            reps: "10-12",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve ağırlığı göğsünüze yakın tutun."
          },
          {
            name: "Dumbbell Bench Press",
            sets: 3,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Omuzlarınızı geriye ve aşağıya doğru çekin."
          },
          {
            name: "One-Arm Dumbbell Row",
            sets: 3,
            reps: "10-12 her kol",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Wall Slides",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Sırtınızı duvara yaslayın ve kollarınızı yavaşça kaldırıp indirin."
          },
          {
            name: "Glute Bridge",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Kalçalarınızı sıkarak yukarı kaldırın ve yavaşça indirin."
          },
          {
            name: "Plank",
            sets: 3,
            reps: "30-45 saniye",
            rest: "30 saniye",
            notes: "Vücudunuzu düz bir çizgide tutun, kalçalarınızı düşürmeyin."
          },
        ],
      },
      Push: {
        name: "Push",
        exercises: [
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve dirseklerinizi kontrollü indirin."
          },
          {
            name: "Cable Chest Flyes",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Göğsünüzü sıkın ve kollarınızı yavaşça açın."
          },
          {
            name: "Tricep Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi yanlarınıza sabit tutun."
          },
          {
            name: "Face Pulls",
            sets: 3,
            reps: "15-20",
            rest: "45 saniye",
            notes: "Omuzlarınızı geriye doğru çekin ve sıkın."
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı hafifçe arkaya yatırın ve göğsünüze doğru çekin."
          },
          {
            name: "Seated Cable Row",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve omuzlarınızı geriye çekin."
          },
          {
            name: "Dumbbell Bicep Curls",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
          {
            name: "Reverse Flyes",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Üst sırtınızı sıkın ve kollarınızı yanlara doğru kaldırın."
          },
          {
            name: "Farmer's Walks",
            sets: 3,
            reps: "30 saniye",
            rest: "45 saniye",
            notes: "Omuzlarınızı geriye çekin ve düz bir çizgide yürüyün."
          },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Dumbbell Chest Press",
            sets: 3,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve kontrollü hareket edin."
          },
          {
            name: "Seated Cable Row",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve omuzlarınızı geriye çekin."
          },
          {
            name: "Arnold Press",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Hareketi yavaş ve kontrollü bir şekilde yapın."
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı hafifçe arkaya yatırın ve göğsünüze doğru çekin."
          },
          {
            name: "Tricep Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi yanlarınıza sabit tutun."
          },
          {
            name: "Hammer Curls",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          {
            name: "Goblet Squats",
            sets: 3,
            reps: "10-12",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve ağırlığı göğsünüze yakın tutun."
          },
          {
            name: "Romanian Deadlifts",
            sets: 3,
            reps: "10-12",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve kalçalarınızı geriye doğru itin."
          },
          {
            name: "Bulgarian Split Squats",
            sets: 3,
            reps: "10-12 her bacak",
            rest: "60 saniye",
            notes: "Ön bacağınızı dengeli bir şekilde yere basın."
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Sırtınızı koltuğa yaslayın ve kontrollü hareket edin."
          },
          {
            name: "Standing Calf Raises",
            sets: 3,
            reps: "15-20",
            rest: "45 saniye",
            notes: "Hareketin en üst noktasında bir an durun."
          },
        ],
      },
    },
    cardio: "15 dakika düşük etkili yürüyüş veya yüzme",
    cooldown: "10 dakika statik germe ve derin nefes egzersizleri",
  },
  2: {
    warmup: "10 dakika dinamik germe ve hafif pilates hareketleri",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          {
            name: "Dumbbell Lunges",
            sets: 3,
            reps: "10-12 her bacak",
            rest: "60 saniye",
            notes: "Adımlarınızı kontrollü atın ve dik durun."
          },
          {
            name: "Push-ups",
            sets: 3,
            reps: "10-15",
            rest: "45 saniye",
            notes: "Vücudunuzu düz bir çizgide tutun, gerekirse dizlerinizin üzerinde yapın."
          },
          {
            name: "Dumbbell Rows",
            sets: 3,
            reps: "10-12 her kol",
            rest: "45 saniye",
            notes: "Sırtınızı düz tutun ve dirseğinizi yukarı çekin."
          },
          {
            name: "Wall Slides",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Sırtınızı duvara yaslayın ve kollarınızı yavaşça kaldırıp indirin."
          },
          {
            name: "Glute Bridge",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Kalçalarınızı sıkarak yukarı kaldırın ve yavaşça indirin."
          },
          {
            name: "Bird Dog",
            sets: 3,
            reps: "10 her taraf",
            rest: "30 saniye",
            notes: "Karşıt kol ve bacağı aynı anda kaldırın, dengenizi koruyun."
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
            rest: "60 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve kontrollü hareket edin."
          },
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Incline Push-ups",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Ellerinizi yüksek bir yüzeye koyun, vücudunuzu düz tutun."
          },
          {
            name: "Cable Flyes",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Göğsünüzü sıkın ve kollarınızı yavaşça açın."
          },
          {
            name: "Tricep Overhead Extension",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi başınızın yanında sabit tutun."
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          {
            name: "Assisted Pull-ups",
            sets: 3,
            reps: "8-10",
            rest: "60 saniye",
            notes: "Omuzlarınızı geriye ve aşağıya doğru çekin."
          },
          {
            name: "One-Arm Dumbbell Rows",
            sets: 3,
            reps: "10-12 her kol",
            rest: "45 saniye",
            notes: "Sırtınızı düz tutun ve dirseğinizi yukarı çekin."
          },
          {
            name: "Face Pulls",
            sets: 3,
            reps: "15-20",
            rest: "45 saniye",
            notes: "Omuzlarınızı geriye doğru çekin ve sıkın."
          },
          {
            name: "Hammer Curls",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
          {
            name: "Reverse Flyes",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Üst sırtınızı sıkın ve kollarınızı yanlara doğru kaldırın."
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
            rest: "60 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve kontrollü hareket edin."
          },
          {
            name: "Seated Cable Row",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve omuzlarınızı geriye çekin."
          },
          {
            name: "Lateral Raises",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Kollarınızı yavaşça kaldırın, dirseklerinizi hafif bükün."
          },
          {
            name: "Tricep Dips",
            sets: 3,
            reps: "10-15",
            rest: "45 saniye",
            notes: "Omuzlarınızı aşağıda tutun, gerekirse ayaklarınızı yerden kaldırmayın."
          },
          {
            name: "Bicep Curls",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi  sabit tutun ve kontrollü hareket edin."
          },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          {
            name: "Bodyweight Squats",
            sets: 3,
            reps: "15-20",
            rest: "60 saniye",
            notes: "Ayaklarınızı omuz genişliğinde açın, sırtınızı düz tutun."
          },
          {
            name: "Romanian Deadlifts",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve kalçalarınızı geriye doğru itin."
          },
          {
            name: "Step-ups",
            sets: 3,
            reps: "12-15 her bacak",
            rest: "45 saniye",
            notes: "Yüksekliği rahat olduğunuz seviyede tutun."
          },
          {
            name: "Glute Bridge",
            sets: 3,
            reps: "15-20",
            rest: "45 saniye",
            notes: "Kalçalarınızı sıkarak yukarı kaldırın ve yavaşça indirin."
          },
          {
            name: "Calf Raises",
            sets: 3,
            reps: "15-20",
            rest: "30 saniye",
            notes: "Hareketin en üst noktasında bir an durun."
          },
        ],
      },
    },
    cardio: "20 dakika tempolu yürüyüş veya düşük etkili aerobik",
    cooldown: "10 dakika statik germe ve foam rolling",
  },
  3: {
    warmup: "10 dakika hafif koşu ve dinamik germe",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          {
            name: "Goblet Squats",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve ağırlığı göğsünüze yakın tutun."
          },
          {
            name: "Dumbbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve kontrollü hareket edin."
          },
          {
            name: "Assisted Pull-ups",
            sets: 3,
            reps: "8-10",
            rest: "60 saniye",
            notes: "Omuzlarınızı geriye ve aşağıya doğru çekin."
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "8-10",
            rest: "60 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Glute Bridge",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Kalçalarınızı sıkarak yukarı kaldırın ve yavaşça indirin."
          },
          {
            name: "Plank",
            sets: 3,
            reps: "30-45 saniye",
            rest: "45 saniye",
            notes: "Vücudunuzu düz bir çizgide tutun, kalçalarınızı düşürmeyin."
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
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve kontrollü hareket edin."
          },
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve dirseklerinizi kontrollü indirin."
          },
          {
            name: "Cable Flyes",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Göğsünüzü sıkın ve kollarınızı yavaşça açın."
          },
          {
            name: "Tricep Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi yanlarınıza sabit tutun."
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          {
            name: "Assisted Pull-ups",
            sets: 4,
            reps: "6-8",
            rest: "90 saniye",
            notes: "Omuzlarınızı geriye ve aşağıya doğru çekin."
          },
          {
            name: "Seated Cable Row",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve omuzlarınızı geriye çekin."
          },
          {
            name: "One-Arm Dumbbell Row",
            sets: 3,
            reps: "10-12 her kol",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve dirseğinizi yukarı çekin."
          },
          {
            name: "Face Pulls",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Omuzlarınızı geriye doğru çekin ve sıkın."
          },
          {
            name: "Hammer Curls",
            sets: 3,
            reps: "10-12",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Dumbbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve kontrollü hareket edin."
          },
          {
            name: "Assisted Pull-ups",
            sets: 4,
            reps: "6-8",
            rest: "90 saniye",
            notes: "Omuzlarınızı geriye ve aşağıya doğru çekin."
          },
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 3,
            reps: "8-10",
            rest: "60 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Cable Rows",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve omuzlarınızı geriye çekin."
          },
          {
            name: "Tricep Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi yanlarınıza sabit tutun."
          },
          {
            name: "Bicep Curls",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          {
            name: "Goblet Squats",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve ağırlığı göğsünüze yakın tutun."
          },
          {
            name: "Romanian Deadlifts",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve kalçalarınızı geriye doğru itin."
          },
          {
            name: "Walking Lunges",
            sets: 3,
            reps: "10-12 her bacak",
            rest: "60 saniye",
            notes: "Adımlarınızı kontrollü atın ve dik durun."
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Sırtınızı koltuğa yaslayın ve kontrollü hareket edin."
          },
          {
            name: "Standing Calf Raises",
            sets: 4,
            reps: "15-20",
            rest: "30 saniye",
            notes: "Hareketin en üst noktasında bir an durun."
          },
        ],
      },
    },
    cardio: "20 dakika interval yürüyüş (1 dakika hızlı, 1 dakika normal tempo)",
    cooldown: "10 dakika yoga temelli germe egzersizleri",
  },
  4: {
    warmup: "10 dakika eliptik bisiklet ve dinamik germe",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          {
            name: "Goblet Squats",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve ağırlığı göğsünüze yakın tutun."
          },
          {
            name: "Push-ups",
            sets: 4,
            reps: "10-15",
            rest: "60 saniye",
            notes: "Vücudunuzu düz bir çizgide tutun, gerekirse dizlerinizin üzerinde yapın."
          },
          {
            name: "Seated Cable Row",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve omuzlarınızı geriye çekin."
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "8-10",
            rest: "60 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Walking Lunges",
            sets: 3,
            reps: "10-12 her bacak",
            rest: "60 saniye",
            notes: "Adımlarınızı kontrollü atın ve dik durun."
          },
          {
            name: "Plank",
            sets: 3,
            reps: "30-45 saniye",
            rest: "45 saniye",
            notes: "Vücudunuzu düz bir çizgide tutun, kalçalarınızı düşürmeyin."
          },
        ],
      },
      Push: {
        name: "Push",
        exercises: [
          {
            name: "Incline Dumbbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve dirseklerinizi kontrollü indirin."
          },
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Cable Chest Flyes",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Göğsünüzü sıkın ve kollarınızı yavaşça açın."
          },
          {
            name: "Lateral Raises",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Kollarınızı yavaşça kaldırın, dirseklerinizi hafif bükün."
          },
          {
            name: "Tricep Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi yanlarınıza sabit tutun."
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          {
            name: "Assisted Pull-ups",
            sets: 4,
            reps: "6-8",
            rest: "90 saniye",
            notes: "Omuzlarınızı geriye ve aşağıya doğru çekin."
          },
          {
            name: "Seated Cable Row",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve omuzlarınızı geriye çekin."
          },
          {
            name: "Face Pulls",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Omuzlarınızı geriye doğru çekin ve sıkın."
          },
          {
            name: "Dumbbell Shrugs",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Omuzlarınızı kulaklarınıza doğru kaldırın ve yavaşça indirin."
          },
          {
            name: "Hammer Curls",
            sets: 3,
            reps: "10-12",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Dumbbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve kontrollü hareket edin."
          },
          {
            name: "Lat Pulldowns",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "S ırtınızı hafifçe arkaya yatırın ve göğsünüze doğru çekin."
          },
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 3,
            reps: "8-10",
            rest: "60 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "One-Arm Dumbbell Row",
            sets: 3,
            reps: "10-12 her kol",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve dirseğinizi yukarı çekin."
          },
          {
            name: "Tricep Overhead Extension",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi başınızın yanında sabit tutun."
          },
          {
            name: "Bicep Curls",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          {
            name: "Goblet Squats",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve ağırlığı göğsünüze yakın tutun."
          },
          {
            name: "Romanian Deadlifts",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve kalçalarınızı geriye doğru itin."
          },
          {
            name: "Bulgarian Split Squats",
            sets: 3,
            reps: "10-12 her bacak",
            rest: "60 saniye",
            notes: "Ön bacağınızı dengeli bir şekilde yere basın."
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Sırtınızı koltuğa yaslayın ve kontrollü hareket edin."
          },
          {
            name: "Standing Calf Raises",
            sets: 4,
            reps: "15-20",
            rest: "30 saniye",
            notes: "Hareketin en üst noktasında bir an durun."
          },
        ],
      },
    },
    cardio: "25 dakika tempolu yüzme veya su aerobiği",
    cooldown: "10 dakika foam rolling ve statik germe",
  },
  5: {
    warmup: "10 dakika ip atlama ve dinamik germe",
    workoutSplits: {
      "Full Body": {
        name: "Full Body",
        exercises: [
          {
            name: "Dumbbell Squats",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Ağırlıkları yanlarınızda tutun, sırtınızı düz tutun."
          },
          {
            name: "Incline Dumbbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve dirseklerinizi kontrollü indirin."
          },
          {
            name: "Assisted Pull-ups",
            sets: 4,
            reps: "6-8",
            rest: "90 saniye",
            notes: "Omuzlarınızı geriye ve aşağıya doğru çekin."
          },
          {
            name: "Dumbbell Shoulder Press",
            sets: 3,
            reps: "8-10",
            rest: "60 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Romanian Deadlifts",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı düz tutun ve kalçalarınızı geriye doğru itin."
          },
          {
            name: "Plank",
            sets: 3,
            reps: "45-60 saniye",
            rest: "45 saniye",
            notes: "Vücudunuzu düz bir çizgide tutun, kalçalarınızı düşürmeyin."
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
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve kontrollü hareket edin."
          },
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı destekleyin ve omurganızı nötr pozisyonda tutun."
          },
          {
            name: "Incline Push-ups",
            sets: 3,
            reps: "10-15",
            rest: "60 saniye",
            notes: "Ellerinizi yüksek bir yüzeye koyun, vücudunuzu düz tutun."
          },
          {
            name: "Lateral Raises",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Kollarınızı yavaşça kaldırın, dirseklerinizi hafif bükün."
          },
          {
            name: "Tricep Dips",
            sets: 3,
            reps: "10-15",
            rest: "45 saniye",
            notes: "Omuzlarınızı aşağıda tutun, gerekirse ayaklarınızı yerden kaldırmayın."
          },
        ],
      },
      Pull: {
        name: "Pull",
        exercises: [
          {
            name: "Assisted Pull-ups",
            sets: 4,
            reps: "6-8",
            rest: "90 saniye",
            notes: "Omuzlarınızı geriye ve aşağıya doğru çekin."
          },
          {
            name: "Bent Over Dumbbell Rows",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve dirseklerinizi yukarı çekin."
          },
          {
            name: "Face Pulls",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Omuzlarınızı geriye doğru çekin ve sıkın."
          },
          {
            name: "Reverse Flyes",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Üst sırtınızı sıkın ve kollarınızı yanlara doğru kaldırın."
          },
          {
            name: "Hammer Curls",
            sets: 3,
            reps: "10-12",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
        ],
      },
      Upper: {
        name: "Upper",
        exercises: [
          {
            name: "Incline Dumbbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Omuzlarınızı bench'e sabitleyin ve dirseklerinizi kontrollü indirin."
          },
          {
            name: "Seated Cable Row",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve omuzlarınızı geriye çekin."
          },
          {
            name: "Arnold Press",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Hareketi yavaş ve kontrollü bir şekilde yapın."
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "10-12",
            rest: "60 saniye",
            notes: "Sırtınızı hafifçe arkaya yatırın ve göğsünüze doğru çekin."
          },
          {
            name: "Tricep Pushdowns",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi yanlarınıza sabit tutun."
          },
          {
            name: "Bicep Curls",
            sets: 3,
            reps: "12-15",
            rest: "45 saniye",
            notes: "Dirseklerinizi sabit tutun ve kontrollü hareket edin."
          },
        ],
      },
      Lower: {
        name: "Lower",
        exercises: [
          {
            name: "Goblet Squats",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve ağırlığı göğsünüze yakın tutun."
          },
          {
            name: "Romanian Deadlifts",
            sets: 4,
            reps: "8-10",
            rest: "90 saniye",
            notes: "Sırtınızı düz tutun ve kalçalarınızı geriye doğru itin."
          },
          {
            name: "Walking Lunges",
            sets: 3,
            reps: "10-12 her bacak",
            rest: "60 saniye",
            notes: "Adımlarınızı kontrollü atın ve dik durun."
          },
          {
            name: "Leg Press",
            sets: 3,
            reps: "12-15",
            rest: "60 saniye",
            notes: "Sırtınızı koltuğa yaslayın ve kontrollü hareket edin."
          },
          {
            name: "Standing Calf Raises",
            sets: 4,
            reps: "15-20",
            rest: "30 saniye",
            notes: "Hareketin en üst noktasında bir an durun."
          },
        ],
      },
    },
    cardio: "25 dakika interval koşu (30 saniye hızlı, 90 saniye yavaş)",
    cooldown: "15 dakika yoga temelli germe ve gevşeme egzersizleri",
  },
};

export const phases = [
  "Faz 1: Temel Oluşturma (1-7. Haftalar)",
  "Faz 2: Güç ve Estetik Geliştirme (8-14. Haftalar)",
  "Faz 3: Performans ve Görünüm Optimizasyonu (15-21. Haftalar)",
];

export const trainingDays = [2, 3, 4, 5];

export const splitOptions = ["Full Body", "Push", "Pull", "Upper", "Lower"];

export const phaseDetails = {
  1: {
    focus:
      "Temel fitness seviyesini oluşturma, kas dayanıklılığını geliştirme ve yağ yakımını başlatma",
    nutritionTips: [
      "Hafif bir kalori açığı oluşturun",
      "Yüksek protein alımına odaklanın",
      "Tam gıdalara ve kompleks karbonhidratlara ağırlık verin",
    ],
    progressionStrategy:
      "Hafta hafta hacmi (tekrar ve set sayısını) kademeli olarak artırın",
    recommendedSplits: {
      2: ["Full Body", "Full Body"],
      3: ["Full Body", "Full Body", "Full Body"],
      4: ["Upper", "Lower", "Upper", "Lower"],
      5: ["Push", "Pull", "Full Body", "Upper", "Lower"],
    },
  },
  2: {
    focus:
      "Vücut kompozisyonunu iyileştirmeye devam ederken güç ve kas kütlesi inşa etme",
    nutritionTips: [
      "Kalori alımını hafifçe artırın",
      "Yüksek protein alımını sürdürün",
      "Karbonhidratları antrenmanlar etrafında zamanlayın",
    ],
    progressionStrategy:
      "Ağırlıkları artırıp tekrarları azaltarak progresif yüklenme uygulayın",  
    recommendedSplits: {
      2: ["Upper", "Lower"],
      3: ["Push", "Pull", "Full Body"],
      4: ["Upper", "Lower", "Push", "Pull"],
      5: ["Push", "Pull", "Full Body", "Upper", "Lower"],
    },
  },
  3: {
    focus:
      "Fiziği iyileştirme, atletik performansı artırma ve zirve kondisyona ulaşma",
    nutritionTips: [
      "Kalori alımını bireysel hedeflere göre ince ayarlayın",
      "Performans için öğün zamanlamasını optimize edin",
      "Hedefli takviyeler düşünün (örn. kreatin, BCAA'lar)",
    ],
    progressionStrategy:
      "Drop setler, süpersetler ve periyodizasyon gibi ileri teknikleri dahil edin",
    recommendedSplits: {
      2: ["Push", "Pull"],
      3: ["Push", "Pull", "Full Body"],
      4: ["Push", "Pull", "Upper", "Lower"],
      5: ["Push", "Pull", "Full Body", "Upper", "Lower"],
    },
  },
};
