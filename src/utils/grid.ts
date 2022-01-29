

export const CANVAS_WIDTH = 2000;
export const CANVAS_HEIGHT = 2000;
export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 100;

export const useGetGrid = () => {
    const rowsN = Math.floor(CANVAS_HEIGHT / CELL_HEIGHT);
    const columnsN = Math.floor(CANVAS_WIDTH / CELL_WIDTH);
    return {
        rows: new Array(rowsN).fill('').map((_, row) => row),
        cols: new Array(columnsN).fill('').map((_, col) => col),
    }
}

export const getGridCoordBySVGPos: (x: number, y: number) => { col: number, row: number } = (x, y) => {
    const row = Math.floor(x / CELL_HEIGHT);
    const col = Math.floor(y / CELL_WIDTH);
    return { row, col }
}
export const getSVGPosByGridPos: ({ col, row }: { col: number, row: number }) => { x: number, y: number } = ({ col, row }) => {
    const y = Math.floor(row * CELL_HEIGHT);
    const x = Math.floor(col * CELL_WIDTH);
    return { x, y }
}