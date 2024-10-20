'use client'

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
  phases,
  trainingDays,
  phaseDetails,
} from "@/lib/workoutData";
import PhaseDetails from "./PhaseDetails";

export default function WorkoutProgram() {
  const [selectedDays, setSelectedDays] = useState<number>(3);

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
          <Tabs defaultValue="0">
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
                <div className="space-y-6">
                  <PhaseDetails 
                    phase={index + 1} 
                    details={phaseDetails[index + 1 as keyof typeof phaseDetails]}
                    selectedDays={selectedDays}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}