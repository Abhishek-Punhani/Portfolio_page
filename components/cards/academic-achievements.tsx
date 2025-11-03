import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function AcademicAchievementsCard() {
  return (
    <Card
      title="Academic Achievements"
      className="matrix-bg animate-border-flow"
    >
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-100 mb-2">
            🎓 ACADEMIC EXCELLENCE
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <Timeline>
          {academicData.map((achievement, i) => (
            <TimelineItem
              key={i}
              date={achievement.date}
              title={achievement.title}
              subTitle={achievement.subTitle}
            />
          ))}
        </Timeline>
      </div>
    </Card>
  );
}

const academicData = [
  {
    date: "2023",
    title: "JEE Advanced AIR 3254",
    subTitle: "JEE Advanced 2023",
  },
  {
    date: "2023",
    title: "JEE Mains AIR 2471",
    subTitle: "JEE Mains 2023",
  },
];
