import { FC, ReactNode } from "react";
import Header from "./header";
import GrainEffect from "../../visualEffects/grain-effect";

interface FeaturedCardProps {
  title: string;
  tag: string;
  description?: string;
  githubUrl?: string;
  deployUrl?: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  title,
  tag,
  description,
  githubUrl,
  deployUrl,
}) => {
  return (
    <div className="group w-full h-full bg-gradient-to-br from-black/95 via-black/90 to-gray-900/95 border-2 border-gray-800/60 shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:border-primary/50 transition-all duration-500 cursor-pointer flex flex-col gap-5 flex-nowrap p-6 rounded-3xl overflow-hidden hover:scale-[1.02] backdrop-blur-sm min-h-[320px] relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:via-blue-500/5 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500">
      {/* Grain Effect Overlay */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-10">
        <GrainEffect />
      </div>

      {/* Animated corner accent with glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 via-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/40 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

      {/*Header*/}
      <Header
        title={title}
        tag={tag}
        githubUrl={githubUrl}
        deployUrl={deployUrl}
      />

      {/*Description - Now the main content */}
      {description && (
        <div className="flex-1 relative z-20">
          <p className="text-sm text-gray-300 leading-relaxed line-clamp-6 group-hover:text-white transition-colors duration-300 font-light">
            {description}
          </p>
        </div>
      )}

      {/* Tech Stack Indicator with Deploy Highlight */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800/50 group-hover:border-primary/30 relative z-20 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary/70 rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
          <span className="text-xs text-gray-400 group-hover:text-gray-300 font-medium tracking-wide transition-colors duration-300">
            Active Project
          </span>
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300 border border-gray-700/40 group-hover:border-primary/30">
              <span className="text-base">📁</span>
            </div>
          )}
          {deployUrl && (
            <div className="relative w-8 h-8 bg-gradient-to-br from-green-500/25 to-blue-500/25 rounded-lg flex items-center justify-center group-hover:from-green-500/35 group-hover:to-blue-500/35 transition-all duration-300 border-2 border-green-500/50 group-hover:border-green-500/70 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50">
              <span className="text-base">🌐</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
