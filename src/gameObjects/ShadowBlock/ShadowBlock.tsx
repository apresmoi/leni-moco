import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type { GameObject } from "../../sharedTypes";
import { CollisionCategories } from "../../store/Physics";

import frame01 from "./shadow_wall_01.svg";
import frame02 from "./shadow_wall_02.svg";
import frame03 from "./shadow_wall_03.svg";

const ShadowBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="shadowWall01"
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
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#222" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#shadowWall01)"
    />
  </svg>
);
const gameObjectOptions = {
  isStatic: true,
  collisionFilter: {
    category: CollisionCategories.SHADOW_BLOCK,
    mask:
      CollisionCategories.PLAYER |
      CollisionCategories.FIRE_PLAYER |
      CollisionCategories.WATER_PLAYER,
  },
  allowedCollisionsCategories: [CollisionCategories.SHADOW_PLAYER],
  killCollisionCategories: [],
};
interface ShadowBlockProps extends GameObject {}

export function ShadowBlock(props: ShadowBlockProps) {
  const { size, physics } = useConstructGameObject({
    ...props,

    width: props.width * 0.5,
    height: props.height * 0.5,
    x: props.x + props.width * 0.25,
    y: props.y + props.height * 0.25,

    gameObjectOptions: {
      ...gameObjectOptions,
      plugin: {
        ...props,
      },
    },
  });
  return (
    <ShadowBlockSVG
      x={size.min.x - 0.25 * props.width}
      y={size.min.y - 0.25 * props.height}
    />
  );
}
