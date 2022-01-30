import * as React from "react";
import frame01 from "../Player/01.svg";
import frame02 from "../Player/02.svg";
import frame03 from "../Player/03.svg";
import frame04 from "../Player/04.svg";
import frame05 from "../Player/05.svg";

interface SlimeProps {
    x: number;
    y: number;
    color: string;
    name?: string;
    onClick: (color: string) => void;
  }

 export function Slime(props: SlimeProps){

    const ref = React.useRef<SVGRectElement>();;
 
    React.useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        if (i > 5) i = 1;
        ref.current?.setAttribute("fill", `url(#frame0${i})`);
      }, 200);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  

    return (         
    <g
     onClick={ () =>props.onClick(props.name || props.color) }
      transform={`translate(${props.x - 50}, ${props.y - 50})`}
    >
      <rect
        ref={ref}
        x={0}
        y={0}
        width={100}
        height={100}
        fill={"red"}
        stroke={"none"}
        strokeWidth={10}
        opacity={0.5}
      />
      <g transform="translate(25, 25)">
        <defs>
          <pattern
            id="frame01"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
          >
            <image href={frame01} x="0" y="0" width="50" height="50" />
          </pattern>
          <pattern
            id="frame02"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
          >
            <image href={frame02} x="0" y="0" width="50" height="50" />
          </pattern>
          <pattern
            id="frame03"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
          >
            <image href={frame03} x="0" y="0" width="50" height="50" />
          </pattern>
          <pattern
            id="frame04"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
          >
            <image href={frame04} x="0" y="0" width="50" height="50" />
          </pattern>
          <pattern
            id="frame05"
            patternUnits="userSpaceOnUse"
            width="50"
            height="50"
          >
            <image href={frame05} x="0" y="0" width="50" height="50" />
          </pattern>
        </defs>
        <rect
          ref={ref}
          x={0}
          y={0}
          width={50}
          height={50}
          fill="url(#frame01)"
        />
      </g>
    </g>
 );
 }