import React from 'react';
import { CELL_HEIGHT, CELL_WIDTH } from "../../settings";
import { useConstructGameObject } from '../useConstructGameObject'
import type { GameObject } from '../../sharedTypes'
import { CollisionCategories } from "../../store/Physics";



const IceBlockSVG: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({ x, y }) => (
  <svg x={x} y={y} width={CELL_WIDTH} height={CELL_HEIGHT}>
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='#DBF1FD' />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='none' />
  </svg>
)

interface IceBlockProps extends GameObject { }

export function IceBlock(props: IceBlockProps) {
  const { size } = useConstructGameObject({ ...props, collisionFilterCategory: CollisionCategories.ICE_BLOCK });
  return <IceBlockSVG x={size.min.x} y={size.min.y} />;
}
