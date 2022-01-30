import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CELL_HEIGHT,
  CELL_WIDTH,
} from "../../settings";
import { useGame } from "../../store";
import { useGetGrid } from "../../utils/grid";

import floorTile from "./floor.svg";

interface UseGridSVG {}
const useGridSVG = (gridProps: UseGridSVG) => {
  const { rows, cols } = useGetGrid();

  return () => (
    <g>
      <defs>
        <pattern
          id="floor"
          patternUnits="userSpaceOnUse"
          width={`${CANVAS_WIDTH}`}
          height={`${CANVAS_WIDTH}`}
        >
          <image
            href={floorTile}
            x="0"
            y="0"
            width={`${CELL_WIDTH}`}
            height={`${CELL_HEIGHT}`}
          />
        </pattern>
      </defs>
      {rows.map((row) =>
        cols.map((col) => (
          <g
            transform={`translate(${col * CELL_WIDTH}, ${
              (row + 1) * CELL_WIDTH
            })`}
          >
            <rect
              key={`r-${row}__c-${col}`}
              x={0}
              y={0}
              width={CELL_WIDTH}
              height={CELL_HEIGHT}
              fill={"url(#floor)"}
            />
          </g>
        ))
      )}
    </g>
  );
};

export function Background({ showGrid = false, img, rows, cols }) {
  const Grid = useGridSVG({ CELL_WIDTH: 100, CELL_HEIGHT: 100 });
  const { level } = useGame();

  return (
    <>
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width={`${CANVAS_WIDTH}`}
          height={`${CANVAS_WIDTH}`}
        >
          <image
            href={img}
            x="0"
            y="0"
            width={`${CELL_WIDTH * cols}`}
            height={`${CELL_HEIGHT * rows}`}
          />
        </pattern>
      </defs>
      <rect
        x={0}
        y={0}
        width={level.size.width}
        height={level.size.height}
        fill="url(#img1)"
      />
      {showGrid ? <Grid /> : null}
    </>
  );
}
