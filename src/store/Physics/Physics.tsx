import * as React from "react";
import { Engine, World, Bodies, Events, Body, Runner, Vector } from "matter-js";
import { useGame } from "../Game";
import { useKeyPress } from "../../hooks";
import { Position } from "../Game/types";
import { Size } from "./math";

export const MAP_SIZE: Size = new Size(0, 0, 2000, 2000);

enum CollisionCategories {
  WALL = 1,
  PLAYER = 2,
}

type IPhysicsStoreContext = {
  engine?: Engine;
  world?: World;
  player?: Body;
  subscribeCollision: (callback: (bodyA: Body, bodyB: Body) => void) => void;
};

export const PhysicsStoreContext = React.createContext<IPhysicsStoreContext>({
  engine: undefined,
  world: undefined,
  player: undefined,
  subscribeCollision: () => {},
});

export function usePhysics() {
  return React.useContext(PhysicsStoreContext);
}

export function PhysicsStore(props: React.PropsWithChildren<{}>) {
  const game = useGame();

  const [collisionSubscribers] = React.useState<
    ((bodyA: Body, bodyB: Body) => void)[]
  >([]);
  const [enginePaused, pauseEngine] = React.useState(false);

  const [engine] = React.useState(
    Engine.create({
      gravity: { x: 0, y: 0 },
    })
  );
  const world = React.useMemo(() => {
    const world = engine.world;
    return world;
  }, [engine]);

  const runner = React.useMemo(() => {
    const _runner = Runner.create();
    Runner.run(_runner, engine);
    return _runner;
  }, [engine]);

  const walls = React.useRef<Body[]>([
    Bodies.rectangle(MAP_SIZE.width / 2, -25, MAP_SIZE.width, 50, {
      isStatic: true,
      collisionFilter: {
        category: CollisionCategories.WALL,
      },
    }),
    Bodies.rectangle(-25, MAP_SIZE.height / 2, 50, MAP_SIZE.height, {
      isStatic: true,
      collisionFilter: {
        category: CollisionCategories.WALL,
      },
    }),
    Bodies.rectangle(
      MAP_SIZE.width + 25,
      MAP_SIZE.height / 2,
      50,
      MAP_SIZE.height,
      {
        isStatic: true,
        collisionFilter: {
          category: CollisionCategories.WALL,
        },
      }
    ),

    Bodies.rectangle(
      MAP_SIZE.width / 2,
      MAP_SIZE.height + 25,
      MAP_SIZE.width,
      50,
      {
        isStatic: true,
        collisionFilter: {
          category: CollisionCategories.WALL,
        },
      }
    ),
  ]);

  const player = React.useRef<Body>(
    Bodies.circle(500, 500, 10, {
      mass: 100,
      frictionAir: 0.2,
      friction: 0,
      restitution: 0,
      plugin: "player",
      collisionFilter: {
        category: CollisionCategories.PLAYER,
      },
    })
  );

  const arrowLeft = useKeyPress(["ArrowLeft", "a"]);
  const arrowRight = useKeyPress(["ArrowRight", "d"]);
  const arrowUp = useKeyPress(["ArrowUp", "w"]);
  const arrowDown = useKeyPress(["ArrowDown", "s"]);
  const direction = React.useRef<Position>({ x: 0, y: 0 });

  React.useEffect(() => {
    direction.current = {
      x: -(arrowLeft ? 1 : 0) + (arrowRight ? 1 : 0),
      y: -(arrowUp ? 1 : 0) + (arrowDown ? 1 : 0),
    };
  }, [arrowLeft, arrowRight, arrowUp, arrowDown]);

  React.useEffect(() => {
    World.add(world, player.current);
    walls.current.map((wall) => World.add(world, wall));

    Events.on(engine, "afterUpdate", function (event) {
      if (direction.current.x || direction.current.y) {
        Body.applyForce(player.current, player.current.position, {
          x: direction.current.x,
          y: direction.current.y,
        });
      }
      game.onChangePlayerPosition(player.current.position);
    });

    Events.on(engine, "collisionStart", (e) => {
      e.pairs.forEach(({ bodyA, bodyB }) => {
        collisionSubscribers.forEach((cb) => {
          if (cb) {
            cb(bodyA, bodyB);
            cb(bodyB, bodyA);
          }
        });
      });
    });
  }, [engine]);

  const subscribeCollision = (cb: (bodyA: Body, bodyB: Body) => void) => {
    collisionSubscribers.push(cb);
  };

  const contextValue = {
    engine,
    world,
    subscribeCollision,
    player,
  };

  return (
    <PhysicsStoreContext.Provider value={contextValue}>
      {props.children}
    </PhysicsStoreContext.Provider>
  );
}
