import * as React from "react";
import { useGame } from "../../store";
import { useKeyPress } from "../../hooks";
import frame01 from "./01.svg";
import frame02 from "./02.svg";
import frame03 from "./03.svg";
import frame04 from "./04.svg";
import frame05 from "./05.svg";
import { useFrame } from "../../store/Physics/Physics";

export function Player(props: React.PropsWithChildren<{}>) {
  const { player } = useGame();
  const ref = React.useRef<SVGRectElement>(null);
  const playerRef = React.useRef<SVGGElement>(null);
  const [idle, setIdle] = React.useState(true);

  React.useEffect(() => {
    const animation = idle ? [2, 5, 2, 4] : [1, 2, 3, 2];
    let i = 0;
    const interval = setInterval(() => {
      if (i >= animation.length) i = 0;
      ref.current?.setAttribute("fill", `url(#frame0${animation[i]})`);
      i++;
    }, idle ? 250 : 150);

    return () => {
      clearInterval(interval);
    };
  }, [idle]);

  useFrame((event) => {
    const player = event.source.world.bodies.find(
      (body) => body.plugin.id === "player"
    );
    if (player) {
      const oldTransform = playerRef.current?.getAttribute("transform")
      const newTransform = `translate(${player?.position.x - 50}, ${
        player?.position.y - 50
      })`;

      if (oldTransform !== newTransform) {
        if(oldTransform !== "") setIdle(false);
        playerRef.current?.setAttribute("transform", newTransform);

        setTimeout(() => {
          setIdle(true);
        }, 1500);
      }
    }
  });

  if (!player) return null;

  return (
    <g ref={playerRef} transform={""}>
      {/* <circle cx={50} cy={50} r={50} fill="black" /> */}
      <rect
        ref={ref}
        x={0}
        y={0}
        width={100}
        height={100}
        fill={"red"}
        stroke={player.active === "left" ? "blue" : "none"}
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
