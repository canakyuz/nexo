import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface DayAccordionProps {
  days: number;
  onDayContentChange?: (day: number) => React.ReactNode;
}

export default function DayAccordion({ days, onDayContentChange }: DayAccordionProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Günlük Antrenman Programı</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          {Array.from({ length: days }, (_, i) => (
            <AccordionItem key={i} value={`day-${i + 1}`}>
              <AccordionTrigger>Gün {i + 1}</AccordionTrigger>
              <AccordionContent>
                {onDayContentChange ? onDayContentChange(i + 1) : (
                  <p>Gün {i + 1} antrenman içeriği buraya gelecek.</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}