import * as React from "react";
import closeIcon  from "./icon-close-modal.svg";

interface CloseButtonProps {
    x: number;
    y: number;
    onClick: () => void;
  }

 export function CloseButton(props: CloseButtonProps){

    return (         
    <g
     onClick={() => props.onClick()}
     className="clickable"
      transform={`translate(${props.x - 50}, ${props.y - 50})`}
    >
        <image href={closeIcon} x="0" y="0" width={40}  height={40}/>
    </g>
 );
 }