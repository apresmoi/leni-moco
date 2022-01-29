import React from "react";
import { Wall } from "../../gameObjects/Wall";
import { Size, Vector } from "../../utils/math";
import { MAP_SIZE } from "../../settings";
import { CELL_WIDTH, CELL_HEIGHT, getSVGPosByGridPos } from "../../utils/grid";
import { Background } from "../../components/Background";
import img from "./Tutorial.jpg";
import { usePhysics } from "../../store";

const cellSizes = { width: CELL_WIDTH, height: CELL_HEIGHT };

export const Tutorial = React.memo(() => {
  const physics = usePhysics();

  React.useEffect(() => {
    const position = getSVGPosByGridPos({ col: 6, row: 2 });
    console.log(position)
    physics?.setPlayerPosition(new Vector(position.x - 50, position.y - 50));
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
