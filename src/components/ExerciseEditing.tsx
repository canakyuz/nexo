import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/lib/workoutData";

interface ExerciseEditingProps {
  exercise: Exercise;
  onSave: (updatedExercise: Exercise) => void;
}

export default function ExerciseEditing({
  exercise,
  onSave,
}: ExerciseEditingProps) {
  const [editedExercise, setEditedExercise] = useState<Exercise>(exercise);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedExercise((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedExercise);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        value={editedExercise.name}
        onChange={handleChange}
        placeholder="Egzersiz Adı"
      />
      <Input
        name="sets"
        type="number"
        value={editedExercise.sets}
        onChange={handleChange}
        placeholder="Set Sayısı"
      />
      <Input
        name="reps"
        value={editedExercise.reps}
        onChange={handleChange}
        placeholder="Tekrar Sayısı"
      />
      <Input
        name="rest"
        value={editedExercise.rest}
        onChange={handleChange}
        placeholder="Dinlenme Süresi"
      />
      <Input
        name="notes"
        value={editedExercise.notes || ""}
        onChange={handleChange}
        placeholder="Notlar (isteğe bağlı)"
      />
      <Button type="submit">Değişiklikleri Kaydet</Button>
    </form>
  );
}
