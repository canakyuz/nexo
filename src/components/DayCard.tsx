import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DayProgram, Exercise } from "@/lib/workoutData";

interface DayCardProps {
  day: number;
  program: DayProgram;
  selectedSplit: string;
  onSplitChange: (split: string) => void;
}

export default function DayCard({
  day,
  program,
  selectedSplit,
  onSplitChange,
}: DayCardProps) {
  const renderExercise = (exercise: Exercise) => (
    <div key={exercise.name} className="mb-2">
      <h4 className="font-semibold">{exercise.name}</h4>
      <p>
        Set: {exercise.sets}, Tekrar: {exercise.reps}, Dinlenme: {exercise.rest}
      </p>
      {exercise.notes && (
        <p className="text-sm text-muted-foreground">{exercise.notes}</p>
      )}
    </div>
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={`day-${day}`}>
        <AccordionTrigger>{`Gün ${day}`}</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <Select value={selectedSplit} onValueChange={onSplitChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Bölünme seçin" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(program.workoutSplits).map((split) => (
                  <SelectItem key={split} value={split}>
                    {split}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div>
              <h3 className="font-semibold">Isınma</h3>
              <p>{program.warmup}</p>
            </div>
            <div>
              <h3 className="font-semibold">Ana Egzersizler</h3>
              {program.workoutSplits[selectedSplit].exercises.map(
                renderExercise,
              )}
            </div>
            <div>
              <h3 className="font-semibold">Kardiyovasküler Çalışma</h3>
              <p>{program.cardio}</p>
            </div>
            <div>
              <h3 className="font-semibold">Soğuma</h3>
              <p>{program.cooldown}</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
