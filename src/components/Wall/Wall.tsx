import { Bodies, Body, World } from "matter-js";
import * as React from "react";
import { usePhysics } from "../../store";
import { CollisionCategories } from "../../store/Physics";
import { Size } from "../../utils/math";

interface WallProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function Wall(props: WallProps) {
  const physics = usePhysics();
  const wall = React.useRef<Body>();

  const size = React.useMemo(() => {
    return new Size(
      props.x,
      props.y,
      props.x + props.width,
      props.y + props.height
    );
  }, [props]);

  React.useEffect(() => {
    wall.current = Bodies.rectangle(
      size.center.x,
      size.center.y,
      size.width,
      size.height,
      {
        isStatic: true,
        collisionFilter: {
          category: CollisionCategories.WALL,
        },
      }
    );
    if (physics.world) World.add(physics.world, wall.current);

    return () => {
      if (physics.world) World.remove(physics.world, wall.current);
    };
  }, [physics, size]);

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
