import * as React from "react";
import { Engine, World, Bodies, Events, Body, Runner } from "matter-js";
import { useGame } from "../Game";
import { useKeyPress } from "../../hooks";
import { Position } from "../Game/types";
import { Vector } from "../../utils/math";
import { CELL_SIZE } from "../../settings";
import debounce from "lodash.debounce";
import { useKeystrokeSound } from "../../assets";

export enum CollisionCategories {
  WALL = 1,
  PLAYER = 2,
  ICE_BLOCK = 3,
  PIT_HOLE = 4,
}

type IPhysicsStoreContext = {
  engine?: Engine;
  world?: World;
  subscribeCollision: (callback: (bodyA: Body, bodyB: Body) => void) => void;
  subscribeOnFrame: (
    callback: (event: Matter.IEventTimestamped<Engine>) => void
  ) => void;
  setPlayerPosition: (position: Vector) => void;
};

export const PhysicsStoreContext = React.createContext<IPhysicsStoreContext>({
  engine: undefined,
  world: undefined,
  subscribeCollision: () => {},
  subscribeOnFrame: () => {},
  setPlayerPosition: () => {},
});

export function usePhysics() {
  return React.useContext(PhysicsStoreContext);
}

export function PhysicsStore(props: React.PropsWithChildren<{}>) {
  const game = useGame();

  const [onFrameSubscribers] = React.useState<
    ((event: Matter.IEventTimestamped<Engine>) => void)[]
  >([]);
  const [collisionSubscribers] = React.useState<
    ((bodyA: Body, bodyB: Body) => void)[]
  >([]);

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

  // React.useEffect(() => {
  //   if (game.paused) Runner.stop(runner);
  //   else Runner.run(runner, engine);

  //   console.log(game.paused);
  // }, [game.paused]);

  const player = React.useRef<Body>(
    Bodies.rectangle(350, 350, CELL_SIZE.width, CELL_SIZE.height, {
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
  const onPressPlayerSplitState = React.useCallback(() => {
    game.onChangePlayerSplitState();
  }, [game.onChangePlayerSplitState]);

  const arrowLeft = useKeyPress(["ArrowLeft", "a"], useKeystrokeSound(1).play);
  const arrowRight = useKeyPress(
    ["ArrowRight", "d"],
    useKeystrokeSound(1).play
  );
  const arrowUp = useKeyPress(["ArrowUp", "w"], useKeystrokeSound(1).play);
  const arrowDown = useKeyPress(["ArrowDown", "s"], useKeystrokeSound(1).play);
  useKeyPress([" "], onPressPlayerSplitState);

  const direction = React.useRef<Vector>(new Vector(0, 0));

  React.useEffect(() => {
    direction.current = new Vector(
      arrowLeft || arrowRight ? -(arrowLeft ? 1 : 0) + (arrowRight ? 1 : 0) : 0,
      arrowLeft || arrowRight ? 0 : -(arrowUp ? 1 : 0) + (arrowDown ? 1 : 0)
    );
  }, [arrowLeft, arrowRight, arrowUp, arrowDown]);

  const updatePlayer = React.useCallback(
    debounce(() => {
      Body.applyForce(player.current, player.current.position, {
        x: direction.current.x * 7.5,
        y: direction.current.y * 7.5,
      });
    }, 0),
    []
  );

  React.useEffect(() => {
    World.add(world, player.current);
    // walls.current.map((wall) => World.add(world, wall));

    let tsStart = 0;

    Events.on(engine, "afterUpdate", function (event) {
      if (direction.current.x || direction.current.y) {
        if (event.timestamp - tsStart > 500) {
          tsStart = event.timestamp;
          updatePlayer();
        }
      }

      if (player.current.speed === 0) {
        player.current.position.x =
          Math.trunc(Math.round((player.current.position.x - 50) / 100)) * 100 +
          50;
        player.current.position.y =
          Math.trunc(Math.round((player.current.position.y - 50) / 100)) * 100 +
          50;
      } else if (Math.abs(player.current.speed) < 1) {
        Body.setVelocity(player.current, { x: 0, y: 0 });
      }

      game.onChangePlayerPosition(player.current.position);
      onFrameSubscribers.forEach((cb) => {
        if (cb) cb(event);
      });
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

  const subscribeOnFrame = (
    cb: (event: Matter.IEventTimestamped<Engine>) => void
  ) => {
    onFrameSubscribers.push(cb);
  };

  const setPlayerPosition = React.useCallback((position: Position) => {
    Body.setPosition(player.current, position);
  }, []);

  const contextValue = {
    engine,
    world,
    subscribeCollision,
    subscribeOnFrame,
    setPlayerPosition,
  };

  return (
    <PhysicsStoreContext.Provider value={contextValue}>
      {props.children}
    </PhysicsStoreContext.Provider>
  );
}
