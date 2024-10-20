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
      <div key={exercise.name} className="mb-4">
        <div className="flex items-center mb-2">
          <Badge variant="default" className='rounded-full text-sm mr-3 h-7 w-7 flex items-center justify-center flex-shrink-0'>
            {index + 1}
          </Badge>
          <h4 className="text-sm sm:text-md font-semibold">{exercise.name}</h4>
        </div>
        <div className="ml-10">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge className='text-xs sm:text-sm' variant="destructive">
              Set: {exercise.sets}
            </Badge>
            <Badge className='text-xs sm:text-sm' variant="destructive">
              Tekrar: {exercise.reps}
            </Badge>
            <Badge className='text-xs sm:text-sm' variant="secondary">  
              Dinlenme: {exercise.rest}
            </Badge>
          </div>
          <Label className="text-xs sm:text-sm text-muted-foreground">{exercise.notes}</Label>
        </div>
      </div>
    ));
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <Card className='px-2 sm:px-3'>
        <AccordionItem value={`day-${day}`}>
          <AccordionTrigger className="text-base sm:text-lg font-bold">{`Gün ${day}`}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Select value={selectedSplit} onValueChange={onSplitChange}>
                <SelectTrigger className="w-full text-sm sm:text-base">
                  <SelectValue placeholder="Bölünme seçin" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(program.workoutSplits).map((split) => (
                    <SelectItem key={split} value={split}>{split}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm sm:text-base">Isınma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">{program.warmup}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm sm:text-base">Ana Antrenman</CardTitle>
                </CardHeader>
                <CardContent>
                  {renderExercises(program.workoutSplits[selectedSplit].exercises)}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm sm:text-base">Finisher / Kardiyovasküler Çalışma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">{program.cardio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm sm:text-base">Soğuma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">{program.cooldown}</p>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Card>
    </Accordion>
  );
}