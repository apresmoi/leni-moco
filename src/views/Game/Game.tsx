import * as React from "react";

import "./styles.scoped.scss";
import { Container } from "../../layout/Container";
import { GameCamera } from "../../components/GameCamera";
import { GameCanvas } from "../../components/GameCanvas";
import { Player, Player2 } from "../../components/Player";
import { useDisableGoBack } from "../../hooks";
import { GameStore, PhysicsStore, useGame } from "../../store";
import { Tutorial, FirstLevel, HardLevel } from "../../levels";

const LevelSwitcher = () => {
  const { activeLevel } = useGame();
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
          </GameCanvas>
        </Container>
      </PhysicsStore>
    </GameStore>
  );
}
