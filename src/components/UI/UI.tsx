import * as React from "react";
import { useGame } from "../../store";
import { OpenInventoryButton } from "./openInventoryButton";
import { MovesLeft } from "./movesLeft";
import "./styles.scoped.scss";

export function UI() {
  const game = useGame();

  function handleOpenInventory(){
    game.setShowInventory(true)
  }

  return <g transform={`translate(${0}, ${0})`}>
    <MovesLeft moves={2}/>
    <OpenInventoryButton onClick={handleOpenInventory}/>
  </g>;
}
