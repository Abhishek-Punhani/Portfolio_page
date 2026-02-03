import React from "react";
import Card from "../ui/card";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function CodingPlatformsCard() {
  return (
    <Card title="Coding Platforms" className="relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative space-y-6">
        {/* Header with cyber aesthetic */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3 tracking-wider"
              data-text="COMPETITIVE CODING"
            >
              COMPETITIVE CODING
            </h3>
            {/* Glowing underline */}
            <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-500"></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-purple-600"></div>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid gap-5">
          {codingPlatforms.map((platform, i) => (
            <Link
              key={i}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative p-5 bg-black/80 border border-white/5 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-[1.02] hover:-translate-y-1">
                {/* Animated gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.gradientOverlay} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                ></div>

                {/* Border glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${platform.glowEffect}`}
                ></div>

                {/* Content */}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    {/* Platform Icon with enhanced styling */}
                    <div className="relative group/icon">
                      <div
                        className={`w-16 h-16 ${platform.bgColor} rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10`}
                      >
                        <span className="text-2xl font-extrabold text-white drop-shadow-lg">
                          {platform.icon}
                        </span>
                      </div>
                      {/* Enhanced glow effect */}
                      <div
                        className={`absolute inset-0 ${platform.bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-75 group-hover:scale-110`}
                      ></div>
                      {/* Pulsing ring */}
                      <div
                        className={`absolute inset-0 ${platform.bgColor} rounded-2xl opacity-20 animate-ping`}
                        style={{ animationDuration: "3s" }}
                      ></div>
                    </div>

                    {/* Platform Info */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                        {platform.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        {/* Rating with icon */}
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                            {platform.rating}
                          </span>
                        </div>
                        {/* Rank badge */}
                        <span
                          className={`text-xs px-3 py-1.5 ${platform.badgeColor} backdrop-blur-sm rounded-full font-bold transition-all duration-300 group-hover:scale-110 shadow-lg`}
                        >
                          {platform.rank}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* External Link Icon with animation */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="relative">
                      <FiExternalLink className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-cyan-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Progress bar with enhanced styling */}
                <div className="mt-5 relative">
                  <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden shadow-inner">
                    <div
                      className={`h-full ${platform.progressColor} transition-all duration-700 ease-out rounded-full relative`}
                      style={{ width: platform.progress }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  {/* Progress percentage indicator */}
                  <span
                    className={`absolute -top-6 right-0 text-xs font-bold ${platform.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    {platform.progress}
                  </span>
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
    bgColor: "bg-gradient-to-br from-orange-500 via-yellow-500 to-amber-600",
    progressColor:
      "bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-600",
    badgeColor:
      "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-400 border border-orange-500/30",
    textColor: "text-orange-400",
    gradientOverlay: "from-orange-500 via-yellow-500 to-amber-600",
    glowEffect: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    progress: "85%",
    link: "https://leetcode.com/u/abhishek-punhani/",
  },
  {
    name: "CodeChef",
    rating: "1623 Rating",
    rank: "3★",
    icon: "CC",
    bgColor: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600",
    progressColor: "bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600",
    badgeColor:
      "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border border-emerald-500/30",
    textColor: "text-emerald-400",
    gradientOverlay: "from-emerald-500 via-teal-500 to-cyan-600",
    glowEffect: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    progress: "80%",
    link: "https://www.codechef.com/users/abhishekpunhani",
  },
  {
    name: "Codeforces",
    rating: "1576 Rating",
    rank: "Specialist",
    icon: "CF",
    bgColor: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600",
    progressColor:
      "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600",
    badgeColor:
      "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30",
    textColor: "text-blue-400",
    gradientOverlay: "from-blue-500 via-indigo-500 to-purple-600",
    glowEffect: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    progress: "70%",
    link: "https://codeforces.com/profile/abhishekpunhani",
  },
];
