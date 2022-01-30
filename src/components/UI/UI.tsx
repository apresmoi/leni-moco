import { useState } from "react";
import { useGame } from "../../store";
import { OpenInventoryButton } from "./openInventoryButton";
import { MovesLeft } from "./movesLeft";
import { Options } from "./options";
import { InstructionsModal } from "../../components/InstructionsModal";
import { Confirmation } from "../../components/Confirmation";
import "./styles.scoped.scss";
import { useHistory } from "react-router";
import { useGameCanvas } from "../GameCanvas";

export function UI() {
  const size = useGameCanvas();
  const game = useGame();
  const history = useHistory();
  const [openInstructions, setOpenInstructions] = useState(false);
  const [openCloseModal, setOpenCloseModal] = useState(false);

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
    setOpenCloseModal(true);
  }

  function onClickYes() {
    history.push('/');
  }

  function onClickNo() {
    setOpenCloseModal(false);
  }

  return <g transform={`translate(${size.width / 2 - (1343) / 2})`}
  >
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
    {openCloseModal && (
      <Confirmation label="Are you sure you want to exit?" onClickYes={onClickYes} onClickNo={onClickNo} />
    )}
  </g>;
}
