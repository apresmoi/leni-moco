import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type {
  GameObject,
  GameObjectBlock,
  GameObjectBody,
} from "../../sharedTypes";
import { CollisionCategories } from "../../store/Physics";

import frame01 from "./finish.svg";

const WinConditionBlockSVG: React.ComponentType<
  React.SVGProps<SVGSVGElement>
> = ({ x, y }) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="finish01"
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
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#FFD700" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#finish01)"
    />
  </svg>
);
const gameObjectOptions = {
  isStatic: true,
  isSensor: true,
  collisionFilter: {
    category: CollisionCategories.WIN_BLOCK,
    mask: CollisionCategories.PLAYER
  },
};
interface WinConditionBlockProps extends GameObjectBlock {}

export function WinConditionBlock(props: WinConditionBlockProps) {
  const { size, physics } = useConstructGameObject({
    ...props,
    width: props.width / 2,
    height: props.height / 2,
    x: props.x + props.width / 4,
    y: props.y + props.height / 4,
    gameObjectOptions,
  });
  React.useEffect(() => {
    const fn = (a: GameObjectBody, b: GameObjectBody) => {
      if (
        (a.collisionFilter.category === CollisionCategories.WIN_BLOCK &&
          b.collisionFilter.category === CollisionCategories.PLAYER) ||
        (b.collisionFilter.category === CollisionCategories.WIN_BLOCK &&
          a.collisionFilter.category === CollisionCategories.PLAYER)
      ) {
        props.onSolve?.();
      }
    };
    physics.subscribeCollision(fn);
    return () => {
      physics.unsubscribeCollision(fn);
    };
  }, [props.onSolve]);
  return (
    <WinConditionBlockSVG
      x={size.min.x - props.width / 4}
      y={size.min.y - props.width / 4}
    />
  );
}
