import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="Achievements & Rankings" className="animate-pulse-glow">
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-gray-100 mb-2">
            🏆 EXCELLENCE RECOGNIZED
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full"></div>
        </div>
        <Timeline>
          {CertificationssData.map((cert, i) => (
            <TimelineItem
              key={i}
              date={cert.date}
              title={cert.title}
              subTitle={cert.subTitle}
            />
          ))}
        </Timeline>
      </div>
    </Card>
  );
}

const CertificationssData = [
  {
    date: "2025",
    title: "Inter IIT Tech Meet 14.0 Team Member",
    subTitle: "Pathway, IIT BHU",
  },
  {
    date: "2024",
    title: "Inter IIT Tech Meet 13.0 Team Member",
    subTitle: "Dream 11 - Averera, IIT BHU",
  },
  {
    date: "2024",
    title: "Inter IIT Tech Meet 13.0 - 3rd Team, 8th Individual",
    subTitle: "Selection Round",
  },
  {
    date: "2024",
    title: "2nd Runner-Up, Design Rush UI/UX",
    subTitle: "E-Summit 2024",
  },
  {
    date: "2024",
    title: "Chemistry Subject Runner-Up",
    subTitle: "Mimamsa Prelims 2024 (IISER Pune)",
  },
  {
    date: "2022",
    title: "Punjab State Topper NSEP Physics",
    subTitle: "National Standard Examination in Physics",
  },
];
