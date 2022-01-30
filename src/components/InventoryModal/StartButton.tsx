import * as React from "react";
import startIcon  from "./button-start.svg";

interface StartButtonProps {
    x: number;
    y: number;
    onClick: () => void;
  }

 export function StartButton(props: StartButtonProps){

    return (         
    <g
     onClick={ () =>props.onClick() }
      transform={`translate(${props.x - 50}, ${props.y - 50})`}
    >
        <image href={startIcon} x="0" y="0" width={416}  height={65}/>
    </g>
 );
 }