import * as React from "react";
import { useGame } from "../../store";
import { useGameCanvas } from "../GameCanvas";

export function GameCamera(props: React.PropsWithChildren<{}>) {
  const size = useGameCanvas();
  const { player } = useGame();

  if (!player) return null;

  let x = -player.position.x + size.width / 2;
  let y = -player.position.y + size.height / 2;
  if (x > 0) x = 0;
  if (y > 0) y = 0;
  if (x < -2000 + size.width) x = -2000 + size.width;
  if (y < -2000 + size.height - 0) y = -2000 + size.height - 0;

  return <g transform={`translate(${x}, ${y})`}>{props.children}</g>;
}
