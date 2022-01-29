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
                  <Wall
                    x={0}
                    y={-50}
                    width={MAP_SIZE.width}
                    height={50}
                    type="TOP_BUMP"
                  />
                  <Wall
                    x={50}
                    y={MAP_SIZE.height}
                    width={MAP_SIZE.width}
                    height={50}
                    type="DOWN_BUMP"
                  />
                  <Wall
                    x={-50}
                    y={0}
                    width={50}
                    height={MAP_SIZE.height}
                    type="LEFT_BUMP"
                  />
                  <Wall
                    x={MAP_SIZE.width}
                    y={0}
                    width={50}
                    height={MAP_SIZE.height}
                    type="RIGHT_BUMP"
                  />
                </>
              }
              {
                <>
                  {/* <Wall x={300} y={50} width={400} height={50} />
                  <Wall x={250} y={0} width={50} height={250} />
                  <Wall x={300} y={200} width={200} height={50} />
                  <Wall x={450} y={200} width={50} height={200} />
                  <Wall x={700} y={0} width={50} height={400} /> */}
                </>
              }
              <Player />
            </GameCamera>
          </GameCanvas>
        </Container>
      </PhysicsStore>
    </GameStore>
  );
}
