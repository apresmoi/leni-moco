import * as React from "react";
import img from "./imagen.png";

const CANVAS_WIDTH = 2000;
const CANVAS_HEIGHT = 2000;

interface UseGridProps {
  cellWidth: number;
  cellHeight: number;
}
const useGrid = ({ cellWidth, cellHeight }: UseGridProps) => {
  const rows = Math.floor(CANVAS_HEIGHT / cellHeight);
  const columns = Math.floor(CANVAS_WIDTH / cellWidth);

  return () => 
  (
    <g>
      {
        new Array(rows).fill('').map(
          (_, row) => new Array(columns).fill('').map(
            (_, col) => <rect x={col*cellWidth} y={row*cellHeight} width={cellWidth} height={cellHeight} style={{ stroke: 'pink', strokeWidth: '5', opacity: '0.5' }} />
          )
        )
      }
    </g>
  )
}

export function Background({ showGrid = false }) {
  const Grid = useGrid({ cellWidth: 100, cellHeight: 100 })

  return (
    <>
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width={`${CANVAS_WIDTH}`}
          height={`${CANVAS_WIDTH}`}
        >
          <image href={img} x="0" y="0" width={`${CANVAS_WIDTH}`} height={`${CANVAS_HEIGHT}`} />
        </pattern>
      </defs>
      <rect x={0} y={0} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} fill="url(#img1)" />
      {showGrid ? <Grid /> : null}
    </>
  );
}
