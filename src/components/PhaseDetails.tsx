"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";
import ImprovedDayCard from "./ImprovedDayCard";
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

export default function PhaseDetails({
  phase,
  details,
  selectedDays,
}: PhaseDetailsProps) {
  const [selectedSplits, setSelectedSplits] = useState<string[]>([]);

  useEffect(() => {
    const initialSplits = Array(selectedDays)
      .fill("")
      .map((_, index) => {
        const availableSplits = Object.keys(
          exercisePrograms[index + 1].workoutSplits
        );
        return availableSplits[0];
      });
    setSelectedSplits(initialSplits);
  }, [selectedDays]);

  const handleSplitChange = (day: number, split: string) => {
    setSelectedSplits((prevSplits) => {
      const newSplits = [...prevSplits];
      newSplits[day - 1] = split;
      return newSplits;
    });
  };

  return (
    <div className="w-full">
      <Card className="space-y-6 my-6">
        <Separator />
        <CardContent>
          <CardTitle>
            <div className="text-xl sm:text-2xl font-bold">
              Faz {phase}:{" "}
              <span className="text-sm font-normal text-muted-foreground block sm:inline mt-1 sm:mt-0">
                {details.focus}
              </span>
            </div>
          </CardTitle>
          <div>
            <h3 className="text-lg font-semibold mb-2">Beslenme İpuçları</h3>
            <ul className="space-y-2">
              {details.nutritionTips.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Separator />

        <div>
          <h3 className="text-lg font-semibold mb-2">Antrenman</h3>
          <div className="space-y-4">
            {Array.from({ length: selectedDays }, (_, i) => i + 1).map(
              (day) => (
                <ImprovedDayCard
                  key={day}
                  day={day}
                  program={exercisePrograms[day]}
                  selectedSplit={
                    selectedSplits[day - 1] ||
                    Object.keys(exercisePrograms[day].workoutSplits)[0]
                  }
                  onSplitChange={(split) => handleSplitChange(day, split)}
                />
              )
            )}
          </div>
        </div>

        <Separator />

        <Card>
          <CardContent>
            <CardTitle>
              <h3 className="text-lg font-semibold my-3">Önerilen Methodlar</h3>
            </CardTitle>
            <div className="space-y-2">
              {Object.entries(details.recommendedSplits).map(
                ([days, splits]) => (
                  <div key={days} className="flex items-center space-x-2">
                    <Badge variant="secondary">{days} Gün</Badge>
                    <span className="text-sm text-muted-foreground">
                      {splits.join(" / ")}
                    </span>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
