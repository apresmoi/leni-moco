import React from 'react';
import { useConstructGameObject } from '../useConstructGameObject'
import type { GameObject } from '../../sharedTypes'
import { CollisionCategories } from "../../store/Physics";
import { CELL_HEIGHT, CELL_WIDTH } from '../../settings';


const LeftBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({ x, y }) => (
  <svg x={x} y={y}  width={CELL_WIDTH} height={CELL_HEIGHT}>
    <line stroke-width="50" y2="100%" x2="0" y1="0" x1="0" stroke="#000" />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='none' />
  </svg>
)
const TopBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({ x, y }) => (
  <svg x={x} y={y}  width={CELL_WIDTH} height={CELL_HEIGHT}>
    <line stroke-width="50" y2="0" x2="100%" y1="0" x1="0" stroke="#000" />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='none' />
  </svg>
)

const RightBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({ x, y }) => (
  <svg x={x} y={y}  width={CELL_WIDTH} height={CELL_HEIGHT}>
    <line stroke-width="50" y2="100%" x2="100%" y1="0" x1="100%" stroke="#000" />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='none' />
  </svg>
)
const BottomBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = ({ x, y }) => (
  <svg x={x} y={y}  width={CELL_WIDTH} height={CELL_HEIGHT}>
    <line stroke-width="50" y2="100%" x2="100%" y1="100%" x1="0" stroke="#000" />
    <rect x={0} y={0} width={CELL_WIDTH} height={CELL_HEIGHT} fill='none' />
  </svg>
)



const WALL_TYPE = {
  LEFT_BUMP: LeftBump,
  TOP_BUMP: TopBump,
  RIGHT_BUMP: RightBump,
  DOWN_BUMP: BottomBump,
} as const

interface WallBlockProps extends GameObject {
  type: keyof typeof WALL_TYPE
}

export function WallBlock(props: WallBlockProps) {
  const { size } = useConstructGameObject({ ...props, collisionFilterCategory: CollisionCategories.WALL });
  const { type = 'TOP_BUMP', ...rest } = props;
  const WallBlockSvg = WALL_TYPE[type];
  return <WallBlockSvg  {...rest}  x={size.min.x} y={size.min.y} width={CELL_WIDTH} height={CELL_HEIGHT} />;
}
