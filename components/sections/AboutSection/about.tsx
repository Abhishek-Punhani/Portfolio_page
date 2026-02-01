import AcademicAchievementsCard from "@/components/cards/academic-achievements";
import BackgroundCard from "@/components/cards/background";
import CertificationsCard from "@/components/cards/certifications";
import CodingPlatformsCard from "@/components/cards/coding-platforms";
import EducationCard from "@/components/cards/education";
import ExperienceCard from "@/components/cards/experience";
import InstructorCard from "@/components/cards/instructor";
import MeCard from "@/components/cards/me";
import ResumeCard from "@/components/cards/resume";
import StackCard from "@/components/cards/stack";
import Heading from "@/components/heading/heading";
import React from "react";

export default function AboutSection() {
  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="py-8">
        {/* First Row - Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <MeCard />
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <ResumeCard />
          </div>
        </div>

        {/* Main Grid Layout - Two Columns on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Tech Arsenal, Education, Achievements & Rankings */}
          <div className="space-y-8">
            {/* Tech Arsenal */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <StackCard />
            </div>

            {/* Education */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <EducationCard />
            </div>

            {/* Academic Achievements */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "800ms" }}
            >
              <AcademicAchievementsCard />
            </div>

            {/* Certifications & Rankings */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "1000ms" }}
            >
              <CertificationsCard />
            </div>
          </div>

          {/* Right Column - Professional Experience & Coding */}
          <div className="space-y-8">
            {/* Background */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "1200ms" }}
            >
              <BackgroundCard />
            </div>

            {/* Experience */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "1400ms" }}
            >
              <ExperienceCard />
            </div>

            {/* Instructor */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "1600ms" }}
            >
              <InstructorCard />
            </div>

            {/* Coding Platforms */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "1800ms" }}
            >
              <CodingPlatformsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
