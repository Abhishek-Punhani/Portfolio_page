import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="Education" className="matrix-bg animate-border-flow">
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3
            className="text-xl font-bold text-gray-100 mb-2"
            data-text="ACADEMIC JOURNEY"
          >
            ACADEMIC JOURNEY
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <Timeline>
          {EducationsData.map((ed, i) => (
            <TimelineItem
              key={i}
              date={ed.date}
              title={ed.title}
              subTitle={ed.subTitle}
            />
          ))}
        </Timeline>
      </div>
    </Card>
  );
}
const EducationsData = [
  {
    date: "2027",
    title: "B-Tech Electrical Engineering",
    subTitle: "IIT (BHU), Varanasi • 9.17 CGPA",
  },
  {
    date: "2023",
    title: "CBSE (XII)",
    subTitle: "Baba Isher Singh Sen Sec School, Kattianwali • 97.2%",
  },
  {
    date: "2021",
    title: "ICSE (X)",
    subTitle: "Sacred Heart Convent School, Malout • 94.8%",
  },
];
