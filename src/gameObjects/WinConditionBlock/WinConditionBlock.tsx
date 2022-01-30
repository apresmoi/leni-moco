import React from 'react';
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from '../useConstructGameObject'
import type { GameObject } from '../../sharedTypes'
import { CollisionCategories } from "../../store/Physics";



const WinConditionBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({ x, y }) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='#FFD700' />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='none' />
  </svg>
)
const gameObjectOptions = {
  isStatic: true,
  collisionFilter: {
    category: CollisionCategories.WIN_BLOCK,
  },
}
interface WinConditionBlockProps extends GameObject { }

export function WinConditionBlock(props: WinConditionBlockProps) {
  const { size } = useConstructGameObject({ ...props, gameObjectOptions });
  return <WinConditionBlockSVG x={size.min.x} y={size.min.y} />;
}
