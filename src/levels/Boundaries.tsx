import React from 'react';
import { Wall } from "../gameObjects/Wall";
import { Size } from "../utils/math";
import { MAP_SIZE } from "../settings";
import { CELL_WIDTH, CELL_HEIGHT, getSVGPosByGridPos } from '../utils/grid';

const cellSizes = { width: CELL_WIDTH, height: CELL_HEIGHT };

export const Boundaries = React.memo(() => {
   
    return (
        <>
            <Wall {...cellSizes} {...getSVGPosByGridPos({col:2,row:1})} type="RIGHT_BUMP" />
            <Wall {...cellSizes} {...getSVGPosByGridPos({col:3,row:2})} type="TOP_BUMP" />
            <Wall {...cellSizes} {...getSVGPosByGridPos({col:4,row:2})} type="TOP_BUMP" />
            <Wall {...cellSizes} {...getSVGPosByGridPos({col:4,row:2})} type="RIGHT_BUMP" />
            <Wall {...cellSizes} {...getSVGPosByGridPos({col:4,row:3})} type="RIGHT_BUMP" />
            <Wall {...cellSizes} {...getSVGPosByGridPos({col:4,row:3})} type="DOWN_BUMP" />
            <Wall {...cellSizes} {...getSVGPosByGridPos({col:3,row:3})} type="DOWN_BUMP" />
            <Wall {...cellSizes} {...getSVGPosByGridPos({col:2,row:3})} type="DOWN_BUMP" />
            {/* <Wall x={250} y={0} {...cellSizes} type="RIGHT_BUMP" /> */}
            {/* <Wall x={300} y={200} width={200} height={50} />
        <Wall x={450} y={200} width={50} height={200} />
        <Wall x={700} y={0} width={50} height={400} /> */}
        </>

    );

})
