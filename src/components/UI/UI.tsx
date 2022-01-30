import * as React from "react";
import { useGame } from "../../store";
import { OpenInventoryButton } from "./openInventoryButton";
import { MovesLeft } from "./movesLeft";
import { Options } from "./options";
import { InstructionsModal } from "../../components/InstructionsModal";
import { Confirmation } from "../../components/Confirmation";
import { sounds } from "../../assets/sounds";
import "./styles.scoped.scss";
import { useGameCanvas } from "../GameCanvas";
import { useHistory } from "react-router-dom";

export function UI() {
  const size = useGameCanvas();
  const game = useGame();
  const history = useHistory();
  const [openInstructions, setOpenInstructions] = React.useState(false);
  const [openCloseModal, setOpenCloseModal] = React.useState(false);
  const [showDeathModal, setShowDeathModal] = React.useState(false);
  const [toggleSound, setToggleSound] = React.useState(true);

  React.useEffect(() => {
    const volume = toggleSound ? 1 : 0;

    Object.values(sounds).forEach((sound) => (sound.volume = volume));
  }, [toggleSound]);

  function handleOpenInventory() {
    game.setShowInventory(true);
  }

  function onReset() {
    window.location.reload();
  }

  function onSound() {
    setToggleSound(!toggleSound);
  }

  function onInstructions() {
    setOpenInstructions(!openInstructions);
  }

  function onClose() {
    setOpenCloseModal(true);
  }

  function onClickYes() {
    history.push("/credits");
  }

  function onClickNo() {
    setOpenCloseModal(false);
  }

  const youAreDead = React.useMemo(() => {
    return game.player?.leftKilled || game.player?.rightKilled;
  }, [game.player?.leftKilled, game.player?.rightKilled]);

  React.useEffect(() => {
    if (youAreDead)
      setTimeout(() => {
        setShowDeathModal(true);
      }, 750);
  }, [youAreDead]);

  return (
    <g transform={`translate(${size.width / 2 - (1343) / 2})`}
    >      
    <MovesLeft moves={2} />
      <OpenInventoryButton onClick={handleOpenInventory} />
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
        <Confirmation
          label="Are you sure you want to exit?"
          onClickYes={onClickYes}
          onClickNo={onClickNo}
        />
      )}

      {showDeathModal && (
        <Confirmation
          label="You are dead, do you want to play again?"
          onClickYes={onReset}
          onClickNo={onClickYes}
        />
      )}
    </g>
  );
}
