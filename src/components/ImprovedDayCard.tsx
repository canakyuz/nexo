import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DayProgram, Exercise } from '@/lib/workoutData';
import { Badge } from './ui/badge';
import { Label } from './ui/label';

interface ImprovedDayCardProps {
  day: number;
  program: DayProgram;
  selectedSplit: string;
  onSplitChange: (split: string) => void;
}

export default function ImprovedDayCard({ day, program, selectedSplit, onSplitChange }: ImprovedDayCardProps) {
  const renderExercises = (exercises: Exercise[]) => {
    return exercises.map((exercise, index) => (
      <div key={exercise.name} className="mb-4 flex flex-row align-baseline items-center">
        <div>
          <Badge variant="default" className='rounded-full text-[1em] mr-3 h-9 w-9 text-center justify-center'>
            {index + 1}
          </Badge>
        </div>
        <div>
          <h4 className="text-md font-semibold">{exercise.name}</h4>
            <div>
              <Badge className='mx-1 my-1' variant="destructive">
                Set: {exercise.sets}
              </Badge>
              <Badge className='mx-1 my-1' variant="destructive">
                Tekrar: {exercise.reps}
              </Badge>
              <Badge className='mx-1 my-1' variant="secondary">  
                Dinlenme: {exercise.rest}
              </Badge>
            </div>
          <Label>{ exercise.notes }</Label>
        </div>
      </div>
    ));
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <Card className='px-3'>
        <AccordionItem value={`day-${day}`}>
          <AccordionTrigger className="text-lg font-bold">{`Gün ${day}`}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Select value={selectedSplit} onValueChange={onSplitChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Bölünme seçin" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(program.workoutSplits).map((split) => (
                    <SelectItem key={split} value={split}>{split}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Card>
                <CardHeader>
                  <CardTitle>Isınma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{program.warmup}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ana Antrenman</CardTitle>
                </CardHeader>
                <CardContent>
                  {renderExercises(program.workoutSplits[selectedSplit].exercises)}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Finisher / Kardiyovasküler Çalışma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{program.cardio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Soğuma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{program.cooldown}</p>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
}