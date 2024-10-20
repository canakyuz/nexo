import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from 'next/link';

const programOverview = [
  { phase: "Faz 1", duration: "Hafta 1-7", focus: "Temel oluşturma ve kas dayanıklılığını geliştirme" },
  { phase: "Faz 2", duration: "Hafta 8-14", focus: "Güç ve kas kütlesi geliştirme" },
  { phase: "Faz 3", duration: "Hafta 15-21", focus: "Performans ve görünüm optimizasyonu" },
];

export default function ProgramOverview() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Program Genel Bakış</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          Ana Programa Dön
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fonksiyonel Fitness ve Estetik Antrenman Programı Özeti</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Faz</TableHead>
                <TableHead>Süre</TableHead>
                <TableHead>Odak</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programOverview.map((phase) => (
                <TableRow key={phase.phase}>
                  <TableCell className="font-medium">{phase.phase}</TableCell>
                  <TableCell>{phase.duration}</TableCell>
                  <TableCell>{phase.focus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Program Hedefleri</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fonksiyonel gücü artırmak</li>
            <li>Kas kütlesini geliştirmek</li>
            <li>Vücut kompozisyonunu iyileştirmek</li>
            <li>Genel fitness seviyesini yükseltmek</li>
            <li>Estetik görünümü iyileştirmek</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}