import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type { GameObject } from "../../sharedTypes";
import { CollisionCategories } from "../../store/Physics";

import frame01 from "./pit_hole.svg";

const PitHoleBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="pitHole01"
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
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#A020F0" />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="url(#pitHole01)" />
  </svg>
);
const gameObjectOptions = {
  isStatic: true,
  isSensor: true,
  collisionFilter: {
    category: CollisionCategories.PIT_HOLE,
  },
};
interface PitHoleBlockProps extends GameObject {}

export function PitHoleBlock(props: PitHoleBlockProps) {
  const { size } = useConstructGameObject({ ...props, gameObjectOptions });
  return <PitHoleBlockSVG x={size.min.x} y={size.min.y} />;
}
