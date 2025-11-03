import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="Professional Journey" className="matrix-bg">
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-gray-100 mb-2">PAST INTERNSHIPS</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto rounded-full"></div>
        </div>
        <Timeline>
          {experiencesData.map((ex, i) => (
            <TimelineItem
              key={i}
              date={ex.date}
              title={ex.title}
              subTitle={ex.subTitle}
              link={ex.link}
              tag={ex.tag}
            />
          ))}
        </Timeline>
      </div>
    </Card>
  );
}
const experiencesData = [
  {
    date: "July 2025 - Sept 2025",
    title: "Full Stack Developer Intern",
    subTitle: "Neecop Consultants",
    link: "",
    tag: "",
  },
  {
    date: "May 2025 - June 2025",
    title: "Frontend Developer Intern",
    subTitle: "Woog.ai",
    link: "",
    tag: "",
  },
];
