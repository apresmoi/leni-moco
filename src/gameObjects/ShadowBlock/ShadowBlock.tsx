import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type { GameObject } from "../../sharedTypes";
import { isThisBlock } from "../../utils/collisions";
import { CollisionCategories } from "../../store/Physics";

const ShadowBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#222" />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="none" />
  </svg>
);
const gameObjectOptions = {
  isStatic: true,
  isSensor: true,
  collisionFilter: {
    category: CollisionCategories.SHADOW_BLOCK,
  },
  allowedCollisionsCategories: [CollisionCategories.SHADOW_PLAYER],
  killCollisionCategories: [],
  solutionCollisionsCategories: [],
};
interface ShadowBlockProps extends GameObject {}

export function ShadowBlock(props: ShadowBlockProps) {
  const { size, physics } = useConstructGameObject({
    ...props,
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
      if (
        isThisBlock(b, props.col, props.row) ||
        isThisBlock(a, props.col, props.row)
      ) {
        // here be magic
      }
    });
  }, []);
  return <ShadowBlockSVG x={size.min.x} y={size.min.y} />;
}
