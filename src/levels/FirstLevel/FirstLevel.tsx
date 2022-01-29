import React from "react";
import { WallBlock, IceBlock, PitHoleBlock, NeutralSolidBlock,FireWallBlock,ShadowBlock } from "../../gameObjects";
import { Size, Vector } from "../../utils/math";
import { CELL_SIZE } from "../../settings";
import { getSVGPosByGridPos } from "../../utils/grid";
import { Background } from "../../components/Background";
import img from "./Transparent.png";
import { useGame, usePhysics } from "../../store";

const cellSizes = { width: CELL_SIZE.width, height: CELL_SIZE.height };

export const FirstLevel = React.memo(() => {
  const physics = usePhysics();
  const game = useGame();

  React.useEffect(() => {

    const position = getSVGPosByGridPos({ col: 3, row: 7 });
    physics?.setPlayerPosition(new Vector(position.x - (CELL_SIZE.width / 2), position.y - (CELL_SIZE.height / 2)));

    game.setLevel({
      size: new Size(0, 0, 9 * CELL_SIZE.width, 10 * CELL_SIZE.height),
    });

  }, []);


  return (
    <>
      <Background showGrid img={img} cols={9} rows={10} />
      {/* TOP BORDER */}
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 0 })}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 0 })}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 0 })}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 0 })}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 0 })}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 6, row: 0 })}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 0 })}
        type="DOWN_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 8, row: 0 })}
        type="DOWN_BUMP"
      />

      {/* LEFT BORDER */}
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 1 })}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 2 })}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 3 })}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 4 })}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 5 })}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 6 })}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 7 })}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 8 })}
        type="RIGHT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 9 })}
        type="RIGHT_BUMP"
      />

      {/* RIGHT BORDER */}
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 1 })}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 2 })}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 3 })}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 4 })}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 5 })}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 6 })}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 7 })}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 8 })}
        type="LEFT_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 9, row: 9 })}
        type="LEFT_BUMP"
      />

      {/* BOTTOM BORDER */}
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 10 })}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 10 })}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 10 })}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 10 })}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 10 })}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 10 })}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 6, row: 10 })}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 10 })}
        type="TOP_BUMP"
      />
      <WallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 8, row: 10 })}
        type="TOP_BUMP"
      />


      {/* NEUTRAL BLOCKS */}
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 3 })}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 3 })}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 3 })}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 4 })}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 4 })}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 4 })}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 5 })}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 5 })}
      />
      <NeutralSolidBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 5 })}
      />

      {/* ICE BLOCKS */}
      <IceBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 6, row: 5 })}
      />
      {/* PITHOLE BLOCKS */}
      <PitHoleBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 5 })}
      />
      <PitHoleBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 5 })}
      />
      {/* FIRE BLOCKS */}
      <FireWallBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 5 })}
      />
      {/* SHADOW BLOCKS */}
      <ShadowBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 9 })}
      />
      <ShadowBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 3 })}
      />
      <ShadowBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 8, row: 2 })}
      />
      <ShadowBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 5 })}
      />
      <ShadowBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 8, row: 5 })}
      />
      <ShadowBlock
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 8 })}
      />
    </>
  );
});
