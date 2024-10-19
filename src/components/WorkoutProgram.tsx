"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  exercisePrograms,
  phases,
  trainingDays,
  splitOptions,
  phaseDetails,
} from "@/lib/workoutData";
import DayCard from "./DayCard";

export default function WorkoutProgram() {
  const [selectedDays, setSelectedDays] = useState<number>(3);
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [selectedSplits, setSelectedSplits] = useState<string[]>(
    Array(5).fill("Full Body"),
  );

  const handleSplitChange = (day: number, split: string) => {
    const newSplits = [...selectedSplits];
    newSplits[day - 1] = split;
    setSelectedSplits(newSplits);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Fonksiyonel Fitness ve Estetik Antrenman Programı
      </h1>
      <div className="mb-4">
        <Select onValueChange={(value) => setSelectedDays(Number(value))}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Antrenman günü sayısı" />
          </SelectTrigger>
          <SelectContent>
            {trainingDays.map((day) => (
              <SelectItem key={day} value={day.toString()}>
                {day} Gün
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>
            {selectedDays} Günlük Fonksiyonel Fitness ve Estetik Programı
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="0"
            onValueChange={(value) => setSelectedPhase(Number(value))}
          >
            <TabsList className="grid w-full grid-cols-3">
              {phases.map((_, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                >{`Faz ${index + 1}`}</TabsTrigger>
              ))}
            </TabsList>
            {phases.map((_, index) => (
              <TabsContent key={index} value={index.toString()}>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">{phases[index]}</h2>
                  <p>
                    <strong>Odak:</strong> {phaseDetails[index + 1].focus}
                  </p>
                  <div>
                    <strong>Beslenme İpuçları:</strong>
                    <ul className="list-disc list-inside">
                      {phaseDetails[index + 1].nutritionTips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <strong>İlerleme Stratejisi:</strong>{" "}
                    {phaseDetails[index + 1].progressionStrategy}
                  </p>
                  {Array.from({ length: selectedDays }, (_, i) => i + 1).map(
                    (day) => (
                      <DayCard
                        key={day}
                        day={day}
                        program={exercisePrograms[day]}
                        selectedSplit={selectedSplits[day - 1]}
                        onSplitChange={(split) => handleSplitChange(day, split)}
                      />
                    ),
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
