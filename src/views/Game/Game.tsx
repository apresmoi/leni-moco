import * as React from "react";

import "./styles.scoped.scss";
import { Container } from "../../layout/Container";
import { GameCamera } from "../../components/GameCamera";
import { GameCanvas } from "../../components/GameCanvas";
import { InventoryModal } from "../../components/InventoryModal";
import { Player, Player2 } from "../../components/Player";
import { useDisableGoBack } from "../../hooks";
import { GameStore, PhysicsStore, useGame } from "../../store";
import { Tutorial, FirstLevel, HardLevel } from "../../levels";
import { UI } from "../../components/UI";
import { useHistory } from "react-router-dom";

const LevelSwitcher = () => {
  const { activeLevel } = useGame();
  const history = useHistory();

  React.useEffect(() => {
    if (activeLevel === "end") history.push("/credits");
  }, [activeLevel]);

  return (
    <>
      {activeLevel === "tutorial" ? <Tutorial /> : null}
      {activeLevel === "first" ? <FirstLevel /> : null}
      {activeLevel === "hard" ? <HardLevel /> : null}
    </>
  );
};

export function Game() {
  useDisableGoBack();

  return (
    <GameStore>
      <PhysicsStore>
        <Container>
          <GameCanvas>
            <GameCamera>
              <LevelSwitcher />
              <Player />
              <Player2 />
            </GameCamera>
            <UI />
            <InventoryModal />
          </GameCanvas>
        </Container>
      </PhysicsStore>
    </GameStore>
  );
}
