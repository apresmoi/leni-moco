import { Bodies, Body, World } from "matter-js";
import * as React from "react";
import { usePhysics } from "../store";
import { CollisionCategories } from "../store/Physics";
import { Size } from "../utils/math";
import type { GameObject } from '../sharedTypes'

export const useConstructGameObject = (props: GameObject) => {
    const physics = usePhysics();
    const gameObject = React.useRef<Body>();

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
            {
                isStatic: true,
                collisionFilter: {
                    category: props.collisionFilterCategory,
                },
            }
        );
        if (physics.world) World.add(physics.world, gameObject.current);

        return () => {
            if (physics.world) World.remove(physics.world, gameObject.current);
        };
    }, [physics, size]);
    return { size, physics, gameObject }
}