import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type { GameObject, GameObjectBlock } from "../../sharedTypes";
import { shouldSolveBlock } from "../../utils/collisions";
import { CollisionCategories } from "../../store/Physics";

import frame01 from "./lava_floor_01.svg";
import frame02 from "./lava_floor_02.svg";
import frame03 from "./lava_floor_03.svg";

const FireWallBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="lavaFrame01"
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
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#F00" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#lavaFrame01)"
    />
  </svg>
);

const gameObjectOptions = {
  isStatic: true,
  isSensor: true,
  collisionFilter: {
    category: CollisionCategories.FIRE_BLOCK,
  },
  allowedCollisionsCategories: [CollisionCategories.FIRE_PLAYER],
  killCollisionCategories: [CollisionCategories.SHADOW_PLAYER],
  solutionCollisionsCategories: [CollisionCategories.WATER_PLAYER],
};
interface FireWallBlockProps extends GameObjectBlock {}

export function FireWallBlock(props: FireWallBlockProps) {
  const [isSolved, setIsSolved] = React.useState(false);
  const { size, physics } = useConstructGameObject({
    ...props,
    width: props.width * 0.8,
    height: props.height * 0.8,
    x: props.x + props.width * 0.1,
    y: props.y + props.height * 0.1,

    gameObjectOptions: {
      ...gameObjectOptions,
      plugin: {
        ...props,
      },
    },
  });
  React.useEffect(() => {
    physics.subscribeCollision((a, b) => {
      // TODO - JC -check if collision detection is fine
      if (shouldSolveBlock(a, b) || shouldSolveBlock(b, a)) {
        setIsSolved(true);
        props.onSolve?.();
      }
    });
  }, []);
  return isSolved ? null : (
    <FireWallBlockSVG
      x={size.min.x - 0.1 * props.width}
      y={size.min.y - 0.1 * props.height}
    />
  );
}
