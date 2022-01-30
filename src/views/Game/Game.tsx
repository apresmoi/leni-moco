import * as React from "react";

import "./styles.scoped.scss";
import { Container } from "../../layout/Container";
import { GameCamera } from "../../components/GameCamera";
import { GameCanvas } from "../../components/GameCanvas";
import { InventoryModal } from "../../components/InventoryModal";
import { Player, Player2 } from "../../components/Player";
import { useDisableGoBack } from "../../hooks";
import { GameStore, PhysicsStore } from "../../store";
import { Tutorial } from "../../levels/Tutorial";
import { UI } from "../../components/UI"; 

export function Game() {
  useDisableGoBack();

  return (
    <GameStore>
      <PhysicsStore>
        <Container>
          <GameCanvas>
            <GameCamera>
              <Tutorial />
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
