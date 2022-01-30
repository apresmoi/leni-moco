import React from "react";
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from "../useConstructGameObject";
import type {
  GameObject,
  GameObjectBlock,
  GameObjectBody,
} from "../../sharedTypes";
import { shouldSolveBlock } from "../../utils/collisions";
import { CollisionCategories } from "../../store/Physics";
import { v4 as uuid } from "uuid";

import frame01 from "./ice_wall_01_01.svg";
import frame02 from "./ice_wall_01_01.svg";
import frame03 from "./ice_wall_01_01.svg";

const IceBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({
  x,
  y,
}) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <defs>
      <pattern
        id="iceFrame01"
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
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill="#DBF1FD" />
    <rect
      x={0}
      y={0}
      width={CELL_WIDTH}
      height={CELL_HEIGHT}
      fill="url(#iceFrame01)"
    />
  </svg>
);

const gameObjectOptions = {
  isStatic: true,
  // isSensor: true,
  collisionFilter: {
    category: CollisionCategories.ICE_BLOCK,
    mask: CollisionCategories.PLAYER | CollisionCategories.WATER_PLAYER,
  },
  allowedCollisionsCategories: [CollisionCategories.SHADOW_PLAYER],
  killCollisionCategories: [CollisionCategories.WATER_PLAYER],
  solutionCollisionsCategories: [CollisionCategories.FIRE_PLAYER],
};
interface IceBlockProps extends GameObjectBlock {}

export function IceBlock(props: IceBlockProps) {
  const [uniqueID] = React.useState<string>(uuid());
  const [isSolved, setIsSolved] = React.useState(false);
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
        uniqueID,
      },
    },
    hasSensor: true,
  });

  React.useEffect(() => {
    const fn = (playerObj: GameObjectBody, otherObj: GameObjectBody) => {
      if (
        otherObj.plugin?.uniqueID === uniqueID &&
        shouldSolveBlock(playerObj, otherObj)
      ) {
        setIsSolved(true);
        props.onSolve?.();
      }
    };

    physics.subscribeCollision(fn);
    return () => {
      physics.unsubscribeCollision(fn);
    };
  }, []);

  return isSolved ? null : (
    <IceBlockSVG
      x={size.min.x - 0.25 * props.width}
      y={size.min.y - 0.25 * props.height}
    />
  );
}
