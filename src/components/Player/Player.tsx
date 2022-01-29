import * as React from "react";
import { useGame } from "../../store";
import { useKeyPress } from "../../hooks";
import frame01 from "./01.svg";
import frame02 from "./02.svg";
import frame03 from "./03.svg";
import frame04 from "./04.svg";
import frame05 from "./05.svg";

export function Player(props: React.PropsWithChildren<{}>) {
  const { player } = useGame();
  const ref = React.useRef<SVGRectElement>(null);

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

  if (!player || player?.isSplited) return null;

  return (
    <g
      transform={`translate(${player.position.x - 50}, ${
        player.position.y - 50
      })`}
    >
      {/* <circle cx={50} cy={50} r={50} fill="black" /> */}
      <rect ref={ref} x={0} y={0} width={100} height={100} fill="black" opacity={0.2} />
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
