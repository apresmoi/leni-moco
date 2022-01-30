import { useState } from "react";
import { useGame } from "../../store";
import { OpenInventoryButton } from "./openInventoryButton";
import { MovesLeft } from "./movesLeft";
import { Options } from "./options";
import { InstructionsModal } from "../../components/InstructionsModal";
import "./styles.scoped.scss";

export function UI() {
  const game = useGame();
  const [openInstructions, setOpenInstructions] = useState(false);

  function handleOpenInventory(){
    game.setShowInventory(true)
  }

  function onReset(){
    
  }

  function onSound(){
    
  }

  function onInstructions(){
    setOpenInstructions(!openInstructions);
  }

  function onClose(){
    
  }

  return <g transform={`translate(${0}, ${0})`}>
    <MovesLeft moves={2}/>
    <OpenInventoryButton onClick={handleOpenInventory}/>
    <Options
      onReset={onReset}
      onSound={onSound}
      onInstructions={onInstructions}
      onClose={onClose}
    />
    {openInstructions && (
      <InstructionsModal onInstructions={onInstructions} />
    )}
  </g>;
}
