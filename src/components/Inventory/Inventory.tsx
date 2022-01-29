import * as React from "react";
import "./inventory.styles.scoped.scss";

export function Inventory() {
  return (<g transform={`scale(${1 / 1.5}, ${1 / 1.5})`}>
            <circle className="slimeSlot" cx="950" cy="800" r="30"/>
            <circle className="slimeSlot" cx="1050" cy="800" r="30"/>

            <circle className="slime" cx="950" cy="875" r="25"/>
            <circle className="slime" cx="1050" cy="875" r="25"/>
            <circle className="slime" cx="950" cy="950" r="25"/>
            <circle className="slime" cx="1050" cy="950" r="25"/>
         </g>);
}
