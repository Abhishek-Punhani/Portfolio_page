import { stackData } from "@/data";
import Card from "../ui/card";

export default function StackCard() {
  return (
    <Card title="Tech Arsenal" className="relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative flex flex-col gap-6 mt-6">
        {stackData.map((tech, i) => (
          <div
            key={i}
            className="group animate-slide-in-left"
            style={{
              animationDelay: `${i * 150}ms`,
            }}
          >
            {/* Category Header */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                <h3 className="text-sm font-bold text-cyan-400 tracking-wider uppercase">
                  {tech.title}
                </h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent"></div>
              </div>
            </div>

            {/* Tech Items */}
            <div className="flex flex-wrap gap-2.5">
              {tech.stack.map((item, index) => (
                <div
                  key={`${tech.title}-${index}`}
                  className="animate-scale-in"
                  style={{ animationDelay: `${i * 150 + index * 50}ms` }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-black/60 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-cyan-500/50 hover:bg-black/80 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default backdrop-blur-sm group-hover:border-white/20">
                    <span className="w-1 h-1 bg-cyan-400/70 rounded-full"></span>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
