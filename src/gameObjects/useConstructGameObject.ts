import { Bodies, Body, World } from "matter-js";
import * as React from "react";
import { usePhysics } from "../store";
import { CollisionCategories } from "../store/Physics";
import { Size } from "../utils/math";
import type { GameObject } from "../sharedTypes";

export const useConstructGameObject = (props: GameObject) => {
  const physics = usePhysics();
  const gameObject = React.useRef<Body>();
  const sensorObject = React.useRef<Body>();

  const size = React.useMemo(() => {
    return new Size(
      props.x,
      props.y,
      props.x + props.width,
      props.y + props.height
    );
  }, [props]);

  React.useEffect(() => {
    gameObject.current = Bodies.rectangle(
      size.center.x,
      size.center.y,
      size.width,
      size.height,
      props.gameObjectOptions
    );

    if (props.hasSensor)
      sensorObject.current = Bodies.rectangle(
        size.center.x,
        size.center.y,
        size.width,
        size.height,
        {
          ...props.gameObjectOptions,
          collisionFilter: {
          },
          isSensor: true,
        }
      );

    if (physics.world) {
      World.add(physics.world, gameObject.current);
      if (props.hasSensor && sensorObject.current)
        World.add(physics.world, sensorObject.current);
    }

    return () => {
      //@ts-ignore
      if (physics.world) World.remove(physics.world, gameObject.current);
      if (props.hasSensor && sensorObject.current)
        //@ts-ignore
        World.remove(physics.world, sensorObject.current);
    };
  }, [physics, size]);
  return { size, physics, gameObject };
};
