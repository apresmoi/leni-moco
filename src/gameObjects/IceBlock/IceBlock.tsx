import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type { GameObject, GameObjectBlock } from "../../sharedTypes";
import { shouldSolveBlock } from "../../utils/collisions";
import { CollisionCategories } from "../../store/Physics";

const IceBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#DBF1FD" />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="none" />
  </svg>
);

const gameObjectOptions = {
  isStatic: true,
  isSensor: true,
  collisionFilter: {
    category: CollisionCategories.ICE_BLOCK,
  },
  allowedCollisionsCategories: [CollisionCategories.SHADOW_PLAYER],
  killCollisionCategories: [CollisionCategories.WATER_PLAYER],
  solutionCollisionsCategories: [CollisionCategories.FIRE_PLAYER],
};
interface IceBlockProps extends GameObjectBlock {}

export function IceBlock(props: IceBlockProps) {
  const [isSolved, setIsSolved] = React.useState(false);
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
        shouldSolveBlock(a, b, props.col, props.row) ||
        shouldSolveBlock(b, a, props.col, props.row)
      ) {
        setIsSolved(true);
        props.onSolve?.();
      }
    });
  }, []);
  return isSolved ? null : <IceBlockSVG x={size.min.x} y={size.min.y} />;
}
