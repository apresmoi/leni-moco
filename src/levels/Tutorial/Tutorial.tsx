import React from "react";
import {
  WallBlock,
  IceBlock,
  PitHoleBlock,
  NeutralSolidBlock,
  FireWallBlock,
  ShadowBlock,
  WinConditionBlock,
  StartingBlock,
} from "../../gameObjects";
import { Size, Vector } from "../../utils/math";
import { CELL_SIZE } from "../../settings";
import { getSVGPosByGridPos } from "../../utils/grid";
import { Background } from "../../components/Background";
import img from "./Transparent.png";
import { useGame, usePhysics } from "../../store";

const cellSizes = { width: CELL_SIZE.width, height: CELL_SIZE.height };

export const Tutorial = React.memo(() => {
  const physics = usePhysics();
  const game = useGame();

  React.useEffect(() => {
    const position = getSVGPosByGridPos({ col: 3, row: 6 });
    physics?.setPlayerPosition(
      new Vector(
        position.x - CELL_SIZE.width / 2,
        position.y - CELL_SIZE.height / 2
      )
    );

    game.setLevel({
      identifier: "tutorial",
      size: new Size(0, 0, 5 * CELL_SIZE.width, 6 * CELL_SIZE.height),
      nextLevel: "first",
    });
  }, []);

  return (
    <>
      <Background showGrid img={img} cols={5} rows={6} />
      {/* TOP BORDER */}
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 0 })}
        {...{ col: 0, row: 0 }}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 0 })}
        {...{ col: 1, row: 0 }}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 0 })}
        {...{ col: 3, row: 0 }}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 0 })}
        {...{ col: 4, row: 0 }}
        type="DOWN_BUMP"
      />

      {/* LEFT BORDER */}
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 0 })}
        {...{ col: -1, row: 0 }}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 1 })}
        {...{ col: -1, row: 1 }}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 2 })}
        {...{ col: -1, row: 2 }}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 3 })}
        {...{ col: -1, row: 3 }}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 4 })}
        {...{ col: -1, row: 4 }}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 5 })}
        {...{ col: -1, row: 5 }}
        type="RIGHT_BUMP"
      />

      {/* RIGHT BORDER */}
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 0 })}
        {...{ col: 5, row: 0 }}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 1 })}
        {...{ col: 5, row: 1 }}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 2 })}
        {...{ col: 5, row: 2 }}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 3 })}
        {...{ col: 5, row: 3 }}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 4 })}
        {...{ col: 5, row: 4 }}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 5 })}
        {...{ col: 5, row: 5 }}
        type="LEFT_BUMP"
      />

      {/* BOTTOM BORDER */}
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 6 })}
        {...{ col: -1, row: 6 }}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 6 })}
        {...{ col: 0, row: 6 }}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 6 })}
        {...{ col: 1, row: 6 }}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 6 })}
        {...{ col: 2, row: 6 }}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 6 })}
        {...{ col: 3, row: 6 }}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 6 })}
        {...{ col: 4, row: 6 }}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 6 })}
        {...{ col: 5, row: 6 }}
        type="TOP_BUMP"
      />

      {/* NEUTRAL BLOCKS */}
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 2 })}
        {...{ col: 1, row: 2 }}
      />
      <ShadowBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 2 })}
        {...{ col: 2, row: 2 }}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 2 })}
        {...{ col: 3, row: 2 }}
      />

      {/* ICE BLOCKS */}
      <IceBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 2 })}
        {...{ col: 4, row: 2 }}
      />
      {/* PITHOLE BLOCKS */}
      {/* <PitHoleBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 5 })}
        {...{ col: 0, row: 5 }}
      /> */}
      {/* FIRE BLOCKS */}
      <FireWallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 2 })}
        {...{ col: 0, row: 2 }}
      />
      {/* SHADOW BLOCKS */}
      <ShadowBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 4 })}
        {...{ col: 4, row: 4 }}
      />

      <WinConditionBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 0 })}
        {...{ col: 2, row: 0 }}
        onSolve={() => {
          setTimeout(() => {
            game.setActiveLevel(game.level.nextLevel);
          }, 400);
        }}
      />

      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: -1 })}
        {...{ col: 2, row: 0 }}
        type="DOWN_BUMP"
        opacity={0}
      />

      <StartingBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 5 })}
        {...{ col: 2, row: 5 }}
      />
    </>
  );
});
