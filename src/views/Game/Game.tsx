import * as React from "react";

import "./styles.scoped.scss";
import { Container } from "../../layout/Container";
import { GameCamera } from "../../components/GameCamera";
import { GameCanvas } from "../../components/GameCanvas";
import { Background } from "../../components/Background";
import { Player } from "../../components/Player";
import { useDisableGoBack } from "../../hooks";
import { GameStore, PhysicsStore } from "../../store";
import { Wall } from "../../gameObjects/Wall";
import { Size } from "../../utils/math";
import { MAP_SIZE } from "../../settings";
import { CELL_WIDTH, CELL_HEIGHT } from '../../utils/grid'
import { Boundaries } from '../../levels/Boundaries';


const cellSizes = { widht: CELL_WIDTH, height: CELL_HEIGHT };


export function Game() {
  useDisableGoBack();

  return (
    <GameStore>
      <PhysicsStore>
        <Container>
          <GameCanvas>
            <GameCamera>
              <Background showGrid />
              {
                <>
                  {/* these walls are the ones surrounding the level */}
                  <Wall x={0} y={0} width={MAP_SIZE.width} height={CELL_HEIGHT} type="DOWN_BUMP"
                    id="level_top_boundary" />
                  <Wall x={0} y={0} width={CELL_WIDTH} height={MAP_SIZE.height} type="RIGHT_BUMP"
                    id="level_left_boundary"
                  />
                  <Wall x={MAP_SIZE.width - CELL_WIDTH} y={0} width={CELL_WIDTH} height={MAP_SIZE.height} type="LEFT_BUMP"
                    id="level_right_boundary" />
                  <Wall x={0} y={MAP_SIZE.height - CELL_HEIGHT} width={MAP_SIZE.width} height={CELL_HEIGHT} type="TOP_BUMP"
                    id="level_bottom_boundary"
                  />
                </>
              }
              <Boundaries />
              <Player />
            </GameCamera>
          </GameCanvas>
        </Container>
      </PhysicsStore>
    </GameStore>
  );
}
