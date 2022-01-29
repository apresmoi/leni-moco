import React from 'react';
import { useConstructGameObject } from '../useConstructGameObject'
import type { GameObject } from '../../sharedTypes'
import { CollisionCategories } from "../../store/Physics";


const LeftBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props}>
  <line stroke-width="50" y2="25" x2="75" y1="25" x1="25" stroke="#000" />
</svg>
const TopBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props}>
  <line stroke-width="50" y2="0" x2="100" y1="0" x1="0" stroke="#000" />
</svg>

const RightBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props}>
  <line stroke-width="50" y2="75" x2="75" y1="25" x1="75" stroke="#000" />
</svg>
const BottomBump: React.ComponentType<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props}>
  <line stroke-width="50" y2="75" x2="100" y1="50" x1="100" stroke="#000" />
</svg>



const WALL_TYPE = {
  LEFT_BUMP: LeftBump,
  TOP_BUMP: TopBump,
  RIGHT_BUMP: RightBump,
  DOWN_BUMP: BottomBump,
} as const

interface WallProps extends GameObject {
  type: keyof typeof WALL_TYPE
}

export function Wall(props: WallProps) {
  const { size } = useConstructGameObject({ ...props, collisionFilterCategory: CollisionCategories.WALL });
  const { type = 'TOP_BUMP' } = props;
  const WallSvg = WALL_TYPE[type];
  // return <WallSvg x={size.min.x} y={size.min.y} width={size.width} height={size.height} fill="black" />;

  return (
    <rect
      x={size.min.x}
      y={size.min.y}
      width={size.width}
      height={size.height}
      fill="black"
    />
  );
}
