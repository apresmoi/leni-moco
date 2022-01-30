import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useGame } from "../../store";
import { OpenInventoryButton } from "./openInventoryButton";
import { MovesLeft } from "./movesLeft";
import { Options } from "./options";
import { InstructionsModal } from "../../components/InstructionsModal";
import { Confirmation } from "../../components/Confirmation";
import { sounds } from "../../assets/sounds";
import "./styles.scoped.scss";

export function UI() {
  const game = useGame();
  const history = useHistory();
  const [openInstructions, setOpenInstructions] = useState(false);
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const [toggleSound, setToggleSound] = useState(true);

  useEffect(() => {
    const volume = toggleSound ? 1 : 0;

    Object.values(sounds).forEach(sound => sound.volume = volume);
  }, [toggleSound]);

  function handleOpenInventory(){
    game.setShowInventory(true)
  }

  function onReset(){
    window.location.reload();
  }

  function onSound(){
    setToggleSound(!toggleSound);
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
    {openCloseModal && (
      <Confirmation label="Are you sure you want to exit?" onClickYes={onClickYes} onClickNo={onClickNo} />
    )}
  </g>;
}
