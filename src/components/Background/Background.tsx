import * as React from "react";
import img from "./imagen.png";

export function Background() {
  return (
    <>
      <defs>
        <pattern
          id="img1"
          patternUnits="userSpaceOnUse"
          width="2000"
          height="2000"
        >
          <image href={img} x="0" y="0" width="2000" height="2000" />
        </pattern>
      </defs>
      <rect x={0} y={0} width={2000} height={2000} fill="url(#img1)" />
    </>
  );
}
