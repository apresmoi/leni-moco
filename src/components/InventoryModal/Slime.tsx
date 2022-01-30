import * as React from "react";
import * as sprites from "../Player/sprites";

interface SlimeProps {
  x: number;
  y: number;
  color: string;
  name?: string;
  onClick: (color: string) => void;
}

export function Slime(props: SlimeProps) {
  const ref = React.useRef<SVGRectElement>(null);

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i > 5) i = 1;
      ref.current?.setAttribute("fill", `url(#primary_frame0${i})`);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <g
      onClick={() => props.onClick(props.name || props.color)}
      transform={`translate(${props.x - 50}, ${props.y - 50})`}
    >
      <rect
        // ref={ref}
        x={0}
        y={0}
        width={100}
        height={100}
        fill={"red"}
        stroke={"none"}
        strokeWidth={10}
        opacity={0.5}
      />
      <g transform="translate(25, 25)">
        <rect
          ref={ref}
          x={0}
          y={0}
          width={50}
          height={50}
          fill="url(#primary_frame01)"
        />
      </g>
    </g>
  );
}
