import {
  useGetGrid,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  CELL_WIDTH,
  CELL_HEIGHT
} from '../../utils/grid';


interface UseGridSVG { }
const useGridSVG = (gridProps: UseGridSVG) => {
  const { rows, cols } = useGetGrid();


  return () =>
  (
    <g>
      {
        rows.map(
          (row) => cols.map(
            (col) => <rect x={col * CELL_WIDTH} y={row * CELL_HEIGHT} width={CELL_WIDTH} height={CELL_HEIGHT} style={{ stroke: 'pink', strokeWidth: '5', opacity: '0.5' }} />
          )
        )
      }
    </g>
  )
}

export function Background({ showGrid = false, img, rows, cols }) {
  const Grid = useGridSVG({ CELL_WIDTH: 100, CELL_HEIGHT: 100 })

  return (
    <>
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width={`${CANVAS_WIDTH}`}
          height={`${CANVAS_WIDTH}`}
        >
          <image href={img} x="0" y="0" width={`${CELL_WIDTH * cols}`} height={`${CELL_HEIGHT * rows}`} />
        </pattern>
      </defs>
      <rect x={0} y={0} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} fill="url(#img1)" />
      {showGrid ? <Grid /> : null}
    </>
  );
}
