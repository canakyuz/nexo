'use client'

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from 'lucide-react';
import ImprovedDayCard from './ImprovedDayCard';
import { exercisePrograms } from "@/lib/workoutData";

interface PhaseDetail {
  focus: string;
  nutritionTips: string[];
  progressionStrategy: string;
  recommendedSplits: {
    [key: number]: string[];
  };
}

interface PhaseDetailsProps {
  phase: number;
  details: PhaseDetail;
  selectedDays: number;
}

export default function PhaseDetails({ phase, details, selectedDays }: PhaseDetailsProps) {
  const [selectedSplits, setSelectedSplits] = useState<string[]>([]);

  useEffect(() => {
    const initialSplits = Array(selectedDays).fill('').map((_, index) => {
      const availableSplits = Object.keys(exercisePrograms[index + 1].workoutSplits);
      return availableSplits[0];
    });
    setSelectedSplits(initialSplits);
  }, [selectedDays]);

  const handleSplitChange = (day: number, split: string) => {
    setSelectedSplits(prevSplits => {
      const newSplits = [...prevSplits];
      newSplits[day - 1] = split;
      return newSplits;
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Faz {phase}: <span className='text-sm font-light text-gray-400 tracking-normal'>{details.focus}</span></CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Beslenme İpuçları</h3>
          <div className="grid gap-2">
            {details.nutritionTips.map((tip, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Antrenman</h3>
          <div className='grid gap-2'>
            {Array.from({ length: selectedDays }, (_, i) => i + 1).map(
              (day) => (
                <ImprovedDayCard
                  key={day}
                  day={day}
                  program={exercisePrograms[day]}
                  selectedSplit={selectedSplits[day - 1] || Object.keys(exercisePrograms[day].workoutSplits)[0]}
                  onSplitChange={(split) => handleSplitChange(day, split)}
                />
              )
            )}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Önerilen Methodlar</h3>
          <div className="space-y-2">
            {Object.entries(details.recommendedSplits).map(([days, splits]) => (
              <div key={days} className="flex items-center space-x-2">
                <Badge variant="secondary">{days} Gün</Badge>
                <span className="text-muted-foreground">{splits.join(' / ')}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}