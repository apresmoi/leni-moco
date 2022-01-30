import * as React from "react";

interface openInventoryButtonProps {
    x: string;
    y: string;
    onClick: () => void;
  }

 export function OpenInventoryButton(props: openInventoryButtonProps){

    return (         
    <g
      onClick={ () =>props.onClick() }
      transform={`translate(${props.x}, ${props.y})`}
    >
        <circle cx="0" cy="0" r="20" />
    </g>
 );
 }