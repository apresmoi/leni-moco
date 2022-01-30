import * as React from "react";

import "./styles.scoped.scss";
import { Container } from "../../layout/Container";
import { GameCamera } from "../../components/GameCamera";
import { GameCanvas } from "../../components/GameCanvas";
import { Player, Player2 } from "../../components/Player";
import { useDisableGoBack } from "../../hooks";
import { GameStore, PhysicsStore, useGame } from "../../store";
import { Tutorial, FirstLevel, HardLevel } from '../../levels';


const LevelSwitcher = () => {
  const { level } = useGame();
  return (
    <>
      {level.identifier === 'tutorial' ? <Tutorial /> : null}
      {level.identifier === 'first' ? <FirstLevel /> : null}
      {level.identifier === 'hard' ? <HardLevel /> : null}
    </>
  )
}

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
