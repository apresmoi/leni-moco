import React from "react";
import { Wall } from "../../gameObjects/Wall";
import { Size, Vector } from "../../utils/math";
import { CELL_SIZE } from "../../settings";
import { getSVGPosByGridPos } from "../../utils/grid";
import { Background } from "../../components/Background";
import img from "./Tutorial.jpg";
import { useGame, usePhysics } from "../../store";

const cellSizes = { width: CELL_SIZE.width, height: CELL_SIZE.height };

export const Tutorial = React.memo(() => {
  const physics = usePhysics();
  const game = useGame();

  React.useEffect(() => {
    
    const position = getSVGPosByGridPos({ col: 6, row: 2 });
    physics?.setPlayerPosition(new Vector(position.x - 50, position.y - 50));

    game.setLevel({
      size: new Size(0, 0, 7 * CELL_SIZE.width, 7 * CELL_SIZE.height),
    });

  }, []);


  return (
    <>
      <Background showGrid img={img} cols={7} rows={7} />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 0 })}
        type="DOWN_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 0 })}
        type="DOWN_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 0 })}
        type="DOWN_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 0 })}
        type="DOWN_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 0 })}
        type="DOWN_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 6, row: 0 })}
        type="DOWN_BUMP"
      />

      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 1 })}
        type="RIGHT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 2 })}
        type="RIGHT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 3 })}
        type="RIGHT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 4 })}
        type="RIGHT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 5 })}
        type="RIGHT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: -1, row: 6 })}
        type="RIGHT_BUMP"
      />

      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 1 })}
        type="LEFT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 2 })}
        type="LEFT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 3 })}
        type="LEFT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 4 })}
        type="LEFT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 5 })}
        type="LEFT_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 7, row: 6 })}
        type="LEFT_BUMP"
      />

      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 0, row: 7 })}
        type="TOP_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 1, row: 7 })}
        type="TOP_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 2, row: 7 })}
        type="TOP_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 3, row: 7 })}
        type="TOP_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 4, row: 7 })}
        type="TOP_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 5, row: 7 })}
        type="TOP_BUMP"
      />
      <Wall
        {...cellSizes}
        {...getSVGPosByGridPos({ col: 6, row: 7 })}
        type="TOP_BUMP"
      />
    </>
  );
});
