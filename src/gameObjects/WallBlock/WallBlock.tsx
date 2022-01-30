import React from "react";
import { useConstructGameObject } from "../useConstructGameObject";
import type { GameObject } from "../../sharedTypes";
import { CollisionCategories } from "../../store/Physics";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";

import bottomWall from "./wall_01.svg";
import horizontalWall from "./wall_02.svg";
import wall03 from "./wall_03.svg";

const LeftBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="wall01"
        patternUnits="userSpaceOnUse"
        width={CELL_WIDTH}
        height={CELL_HEIGHT}
      >
        <image
          href={horizontalWall}
          x="0"
          y="0"
          width={CELL_WIDTH}
          height={CELL_HEIGHT}
        />
      </pattern>
    </defs>
    <line strokeWidth="50" y2="100%" x2="0" y1="0" x1="0" stroke="#000" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#wall01)"
    />
  </svg>
);
const TopBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="wall02"
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
    <line strokeWidth="50" y2="0" x2="100%" y1="0" x1="0" stroke="#000" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#wall02)"
    />
  </svg>
);

const RightBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="wall03"
        patternUnits="userSpaceOnUse"
        width={CELL_WIDTH}
        height={CELL_HEIGHT}
      >
        <image
          href={horizontalWall}
          x="0"
          y="0"
          width={CELL_WIDTH}
          height={CELL_HEIGHT}
        />
      </pattern>
    </defs>
    <line strokeWidth="50" y2="100%" x2="100%" y1="0" x1="100%" stroke="#000" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#wall03)"
    />
  </svg>
);
const BottomBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="wall04"
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
    <line strokeWidth="50" y2="100%" x2="100%" y1="100%" x1="0" stroke="#000" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#wall04)"
    />
  </svg>
);

const WALL_TYPE = {
  LEFT_BUMP: LeftBump,
  TOP_BUMP: TopBump,
  RIGHT_BUMP: RightBump,
  DOWN_BUMP: BottomBump,
} as const;

interface WallBlockProps extends GameObject {
  type: keyof typeof WALL_TYPE;
}
const gameObjectOptions = {
  isStatic: true,
  collisionFilter: {
    category: CollisionCategories.WALL,
  },
};

export function WallBlock(props: WallBlockProps) {
  const { size } = useConstructGameObject({ ...props, gameObjectOptions });
  const { type = "TOP_BUMP", ...rest } = props;
  const WallBlockSvg = WALL_TYPE[type];
  return (
    <WallBlockSvg
      {...rest}
      x={size.min.x}
      y={size.min.y}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
    />
  );
}
