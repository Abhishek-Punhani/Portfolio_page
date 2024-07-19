import { FC } from "react";
import AnimatedCursor from "react-animated-cursor";
interface CursorProps {
  color: string;
}

export const Cursor: FC<CursorProps> = ({ color }) => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      outerAlpha={0.2}
      innerScale={1}
      outerScale={2}
      innerStyle={{
        backgroundColor: color,
      }}
      outerStyle={{
        border: `1px solid ${color}`,
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};
