import * as React from "react";

import "./styles.scoped.scss";
import { Container } from "../../layout/Container";
import { GameCamera } from "../../components/GameCamera";
import { GameCanvas } from "../../components/GameCanvas";
import { Player } from "../../components/Player";
import { useDisableGoBack } from "../../hooks";
import { GameStore, PhysicsStore } from "../../store";
import { Wall } from "../../gameObjects/Wall";
import { Size } from "../../utils/math";
import { MAP_SIZE } from "../../settings";
import { CELL_WIDTH, CELL_HEIGHT } from '../../utils/grid'
import { Tutorial } from '../../levels/Tutorial';


const cellSizes = { widht: CELL_WIDTH, height: CELL_HEIGHT };


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
            </GameCamera>
          </GameCanvas>
        </Container>
      </PhysicsStore>
    </GameStore>
  );
}
