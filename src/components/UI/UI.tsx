import * as React from "react";
import { useGame } from "../../store";
import { OpenInventoryButton } from "./openInventoryButton";
import "./styles.scoped.scss";

export function UI() {
  const game = useGame();

  function handleOpenInventory(){
    game.setShowInventory(true)
  }

  return <g>
    <OpenInventoryButton x="380" y="50" onClick={handleOpenInventory}/>
  </g>;
}
