import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function InstructorCard() {
  return (
    <Card title="Open Source Impact" className="animate-border-flow">
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-gray-100 mb-2">
            💻 CODE CONTRIBUTIONS
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-red-600 mx-auto rounded-full"></div>
        </div>
        <Timeline>
          {contributions.map((contrib, i) => (
            <TimelineItem
              key={i}
              date={contrib.date}
              title={contrib.title}
              subTitle={contrib.subTitle}
              link={contrib.link}
              tag={contrib.tag}
            />
          ))}
        </Timeline>
      </div>
    </Card>
  );
}

const contributions = [
  {
    date: "Ongoing",
    title: "Open Source Contributor - Learning Equality",
    subTitle: "10+ PRs & 4+ issues: UI, backend logic, unit tests",
    link: "https://docs.google.com/document/d/1gkuJ4mEpgCbHH7YcIucUL2zE5BifL_rIUrdSxugGeuw/edit?tab=t.0#heading=h.r2zi7329lmpx",
    tag: "View All",
  },
];
