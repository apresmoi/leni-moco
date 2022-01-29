import * as React from "react";
import { useGame } from "../../store";
import { useGameCanvas } from "../GameCanvas";

export function GameCamera(props: React.PropsWithChildren<{}>) {
  const size = useGameCanvas();
  const { player, level } = useGame();

  if (!player) return null;

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

  return <g transform={`translate(${x}, ${y})`}>{props.children}</g>;
}
