import * as React from "react";
import { SlimeFrames } from "../Player/SlimeFrames";

interface SlimeProps {
  x: number;
  y: number;
  color: string;
  name?: string;
  idx: string;
  isBlocked?: boolean;
  isSelected?: boolean;
  onClick?: (color: string) => void;
}

export function Slime(props: SlimeProps) {
  const ref = React.useRef<SVGRectElement>(null);

  return (
    <g
      onClick={() => props.onClick?.(props.name || props.color)}
      transform={`translate(${props.x - 50}, ${props.y - 50}) scale(0.7)`}
    >
      <g cursor="pointer" transform="translate(25, 25)">
        <SlimeFrames frameName={props.idx} spriteName={props.color}  widthHeight="90"/>
        <rect
          ref={ref}
          x={0}
          y={10}
          width={90}
          height={90}
          fill={`url(#${props.idx}_frame02)`}
          opacity={props.isBlocked ? "0.4": "1"}
          stroke={props.isSelected ? "#43D608": ""}
          rx="40"
          ry="60"
          strokeWidth={4}
        />
      </g>
    </g>
  );
}