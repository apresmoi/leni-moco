import * as React from "react";
import { useGame } from "../../store";
import { OpenInventoryButton } from "./openInventoryButton";
import { MovesLeft } from "./movesLeft";
import { Options } from "./options";
import { InstructionsModal } from "../../components/InstructionsModal";
import { Confirmation } from "../../components/Confirmation";
import "./styles.scoped.scss";
import { useHistory } from "react-router";

export function UI() {
  const game = useGame();
  const history = useHistory();
  const [openInstructions, setOpenInstructions] = React.useState(false);
  const [openCloseModal, setOpenCloseModal] = React.useState(false);
  const [showDeathModal, setShowDeathModal] = React.useState(false);

  function handleOpenInventory() {
    game.setShowInventory(true);
  }

  function onReset() {}

  function onSound() {}

  function onInstructions() {
    setOpenInstructions(!openInstructions);
  }

  function onClose() {
    setOpenCloseModal(true);
  }

  function onClickYes() {
    history.push("/");
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
      }, 500);
  }, [youAreDead]);

  return (
    <g transform={`translate(${0}, ${0})`}>
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
          onClickYes={() => {
            window.location.reload();
          }}
          onClickNo={onClickYes}
        />
      )}
    </g>
  );
}
