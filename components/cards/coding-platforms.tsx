import React from "react";
import Card from "../ui/card";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function CodingPlatformsCard() {
  return (
    <Card title="Coding Platforms" className="matrix-bg animate-border-flow">
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3
            className="text-xl font-bold text-gray-100 mb-2"
            data-text="COMPETITIVE CODING"
          >
            COMPETITIVE CODING
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-joust to-pink-ice mx-auto rounded-full"></div>
        </div>
        <div className="grid gap-4">
          {codingPlatforms.map((platform, i) => (
            <Link
              key={i}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative p-4 bg-gradient-to-r from-secondary-background/90 to-secondary-background/70 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Platform Icon */}
                    <div className="relative">
                      <div
                        className={`w-12 h-12 ${platform.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <span className="text-lg font-bold text-white">
                          {platform.icon}
                        </span>
                      </div>
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 ${platform.bgColor} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>
                    </div>

                    {/* Platform Info */}
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-100 group-hover:text-primary transition-colors duration-300">
                        {platform.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-semibold text-gray-200">
                          {platform.rating}
                        </span>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {platform.rank}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* External Link Icon */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <FiExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-3 w-full bg-secondary-background/30 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${platform.progressColor} transition-all duration-500 ease-out rounded-full`}
                    style={{ width: platform.progress }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}

const codingPlatforms = [
  {
    name: "LeetCode",
    rating: "1663 Rating",
    rank: "Top 15%",
    icon: "LC",
    bgColor: "bg-gradient-to-br from-blue-joust to-blue-hera",
    progressColor: "bg-gradient-to-r from-blue-joust to-blue-hera",
    progress: "85%",
    link: "https://leetcode.com/u/abhishek-punhani/",
  },
  {
    name: "CodeChef",
    rating: "1623 Rating",
    rank: "3★",
    icon: "CC",
    bgColor: "bg-gradient-to-br from-green-benzol to-blue-joust",
    progressColor: "bg-gradient-to-r from-green-benzol to-blue-joust",
    progress: "80%",
    link: "https://www.codechef.com/users/abhishekpunhani",
  },
  {
    name: "Codeforces",
    rating: "1468 Rating",
    rank: "Specialist",
    icon: "CF",
    bgColor: "bg-gradient-to-br from-pink-ice to-blue-hera",
    progressColor: "bg-gradient-to-r from-pink-ice to-blue-hera",
    progress: "70%",
    link: "https://codeforces.com/profile/abhishekpunhani",
  },
];
