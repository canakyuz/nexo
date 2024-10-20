import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ExerciseCardProps {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  onNoteChange: (note: string) => void;
}

export function ExerciseCard({ name, sets, reps, rest, onNoteChange }: ExerciseCardProps) {
  const [note, setNote] = useState('');

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
    onNoteChange(e.target.value);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">
          Set: {sets}, Tekrar: {reps}, Dinlenme: {rest}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full">
          <Label htmlFor={`note-${name}`} className="text-sm font-medium">
            Not:
          </Label>
          <Input
            id={`note-${name}`}
            value={note}
            onChange={handleNoteChange}
            placeholder="Egzersiz hakkında not ekleyin..."
            className="mt-1"
            type="text" // Specify the type of input
          />
        </div>
      </CardFooter>
    </Card>
  );
}