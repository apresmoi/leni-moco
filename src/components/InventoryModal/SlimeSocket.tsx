import * as React from "react";
 
interface SlimeSocketProps {
    x: number;
    y: number;
    name: string;
    isSelected: boolean;
    onClick: (name:string) =>void;
}

export function SlimeSocket(props: SlimeSocketProps) {
    return (
        <g
     onClick={ () =>props.onClick(props.name) }
      transform={`translate(${props.x - 50}, ${props.y - 50})`}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M307.564 178.271C284.84 178.271 263.396 205.175 263.396 226.02C263.396 239.748 277.081 253.645 307.564 253.645C339.668 253.645 351.605 237.46 351.605 227.291C351.648 206.785 329.478 178.271 307.564 178.271Z" fill="black" fill-opacity={ props.isSelected ? "0.1": "0.0"}/>
    </g>);
} 