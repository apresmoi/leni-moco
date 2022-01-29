import React from 'react';
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from '../useConstructGameObject'
import type { GameObject } from '../../sharedTypes'
import { CollisionCategories } from "../../store/Physics";



const FireWallBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({ x, y }) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='#F00' />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='none' />
  </svg>
)

interface FireWallBlockProps extends GameObject { }

export function FireWallBlock(props: FireWallBlockProps) {
  const { size } = useConstructGameObject({ ...props, collisionFilterCategory: CollisionCategories.FIRE_BLOCK });
  return <FireWallBlockSVG x={size.min.x} y={size.min.y} />;
}
