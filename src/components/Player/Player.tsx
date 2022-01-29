import * as React from "react";
import { useGame } from "../../store";
import { useKeyPress } from "../../hooks";

export function Player(props: React.PropsWithChildren<{}>) {
  const { player } = useGame();

  if (!player) return null;

  // console.log(player);

  return (
    <g transform={`translate(${player.position.x}, ${player.position.y})`}>
      <circle cx={0} cy={0} r={20} fill="red" />
    </g>
  );
}
