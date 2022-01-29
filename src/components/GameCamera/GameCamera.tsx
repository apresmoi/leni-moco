import * as React from "react";
import { useGame } from "../../store";
import { useFrame } from "../../store/Physics/Physics";
import { useGameCanvas } from "../GameCanvas";

export function GameCamera(props: React.PropsWithChildren<{}>) {
  const size = useGameCanvas();
  const { level } = useGame();
  const playerRef = React.useRef<SVGGElement>(null);

  useFrame((event) => {
    const player = event.source.world.bodies.find(
      (body) => body.plugin.id === "player2"
    );
    if (player) {
      let x = -player.position.x + size.width / 2;
      let y = -player.position.y + size.height / 2;

      if ((level?.size.width || 0) > size.width) {
        if (x > (level?.size.min.x || 0)) x = 0;
        if (x < -(level?.size.width || 0) + size.width)
          x = -(level?.size.width || 0) + size.width;
      } else {
        x = size.width / 4;
      }
      if ((level?.size.height || 0) > size.height) {
        if (y > (level?.size.min.y || 0)) y = 0;
        if (y < -(level?.size.height || 0) + size.height)
          y = -(level?.size.height || 0) + size.height;
      } else {
        y = size.height / 4;
      }
      playerRef.current?.setAttribute("transform", `translate(${x}, ${y})`);
    }
  });

  return (
    <g ref={playerRef} transform={`translate(${0}, ${0})`}>
      {props.children}
    </g>
  );
}
