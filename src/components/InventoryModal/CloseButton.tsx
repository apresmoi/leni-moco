import * as React from "react";

interface CloseButtonProps {
    x: number;
    y: number;
    onClick: () => void;
  }

 export function CloseButton(props: CloseButtonProps){

    return (         
    <g
     onClick={ () =>props.onClick() }
      transform={`translate(${props.x - 50}, ${props.y - 50})`}
    >
        <circle cx="0" cy="0" r="10" />
    </g>
 );
 }