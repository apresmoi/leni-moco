import * as React from "react";

import "./styles.scoped.scss";
import { Container } from "../../layout/Container";
import { GameCamera } from "../../components/GameCamera";
import { GameCanvas } from "../../components/GameCanvas";
import { Background } from "../../components/Background";
import { Player } from "../../components/Player";
import { useDisableGoBack } from "../../hooks";
import { GameStore, PhysicsStore } from "../../store";

export function Game() {
  useDisableGoBack();

  return (
    <GameStore>
      <PhysicsStore>
        <Container>
          <GameCanvas>
            <GameCamera>
              <Background />
              <Player />
            </GameCamera>
          </GameCanvas>
        </Container>
      </PhysicsStore>
    </GameStore>
  );
}
