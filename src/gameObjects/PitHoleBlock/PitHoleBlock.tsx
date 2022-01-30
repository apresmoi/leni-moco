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
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#pitHole01)"
    />
  </svg>
);
const gameObjectOptions = {
  isStatic: true,
  isSensor: true,
  collisionFilter: {
    category: CollisionCategories.PIT_HOLE,
    mask:
      CollisionCategories.PLAYER |
      CollisionCategories.SHADOW_PLAYER |
      CollisionCategories.WATER_PLAYER |
      CollisionCategories.FIRE_PLAYER,
  },
  killCollisionCategories: [
    CollisionCategories.PLAYER,
    CollisionCategories.FIRE_PLAYER,
    CollisionCategories.WATER_PLAYER,
    CollisionCategories.SHADOW_PLAYER,
  ],
};
interface PitHoleBlockProps extends GameObject {}

export function PitHoleBlock(props: PitHoleBlockProps) {
  const { size } = useConstructGameObject({
    ...props,
    width: props.width * 0.5,
    height: props.height * 0.5,
    x: props.x + props.width * 0.25,
    y: props.y + props.height * 0.25,

    gameObjectOptions,
    hasSensor: true,
  });
  return (
    <PitHoleBlockSVG
      x={size.min.x - 0.25 * props.width}
      y={size.min.y - 0.25 * props.height}
    />
  );
}
