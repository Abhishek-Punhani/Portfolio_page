import { stackData } from "@/data";
import Card from "../ui/card";
import Tooltip from "../ui/tooltip";

export default function StackCard() {
  return (
    <Card title="Tech Arsenal" className="animate-float">
      <div className="flex flex-col gap-8 mt-4">
        {stackData.map((tech, i) => (
          <div
            key={i}
            className="grid items-center gap-6 animate-slide-in-left"
            style={{
              gridTemplateColumns: "1fr 2fr",
              animationDelay: `${i * 300}ms`,
            }}
          >
            {/*Stack group name with tech styling*/}
            <div className="h-auto flex-none break-words whitespace-pre">
              <p
                className="text-gray-100 font-bold text-lg"
                data-text={tech.title}
              >
                {tech.title}
              </p>
              <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 mt-2 rounded-full"></div>
            </div>
            {/*Tech stack items with enhanced animations */}
            <div className="flex flex-wrap gap-4">
              {tech.stack.map((t, index) => (
                <div
                  key={t.id}
                  className="tech-item animate-scale-in"
                  style={{ animationDelay: `${i * 300 + index * 100}ms` }}
                >
                  <Tooltip
                    title={t.title}
                    image={t.image}
                    bgColor={t.bgColor}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
