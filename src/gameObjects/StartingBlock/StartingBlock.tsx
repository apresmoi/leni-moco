import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type { GameObject } from "../../sharedTypes";
import { CollisionCategories } from "../../store/Physics";

import frame01 from "./start.svg";

const StartingBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="start01"
        patternUnits="userSpaceOnUse"
        width={CELL_WIDTH}
        height={CELL_HEIGHT}
      >
        <image
          href={frame01}
          x="0"
          y="0"
          width={CELL_WIDTH}
          height={CELL_HEIGHT}
        />
      </pattern>
    </defs>
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#FFF" />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="url(#start01)" />
  </svg>
);
const gameObjectOptions = {
  isStatic: true,
  isSensor: true,
  collisionFilter: {
    group: -CollisionCategories.PLAYER,
  },
};
interface StartingBlockProps extends GameObject {}

export function StartingBlock(props: StartingBlockProps) {
  const { size } = useConstructGameObject({ ...props, gameObjectOptions });
  return <StartingBlockSVG x={size.min.x} y={size.min.y} />;
}
