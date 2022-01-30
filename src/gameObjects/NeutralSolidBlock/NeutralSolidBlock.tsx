import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type { GameObject } from "../../sharedTypes";
import { CollisionCategories } from "../../store/Physics";

import bottomWall from "./wall_01.svg";

const NeutralSolidBlockSVG: React.ComponentType<
  React.SVGProps<SVGSVGElement>
> = ({ x, y }) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="neutral01"
        patternUnits="userSpaceOnUse"
        width={CELL_WIDTH}
        height={CELL_HEIGHT}
      >
        <image
          href={bottomWall}
          x="0"
          y="0"
          width={CELL_WIDTH}
          height={CELL_HEIGHT}
        />
      </pattern>
    </defs>
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#FFF" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#neutral01)"
    />
  </svg>
);
const gameObjectOptions = {
  isStatic: true,
  collisionFilter: {
    category: CollisionCategories.NEUTRAL_BLOCK,
    mask:
      CollisionCategories.PLAYER |
      CollisionCategories.WATER_PLAYER |
      CollisionCategories.FIRE_PLAYER |
      CollisionCategories.SHADOW_PLAYER,
  },
};
interface NeutralSolidBlockProps extends GameObject {}

export function NeutralSolidBlock(props: NeutralSolidBlockProps) {
  const { size } = useConstructGameObject({ ...props, gameObjectOptions });
  return <NeutralSolidBlockSVG x={size.min.x} y={size.min.y} />;
}
