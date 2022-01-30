import * as React from "react";
import { useGame } from "../../store";
import { useKeyPress } from "../../hooks";
import frame01 from "./01.svg";
import frame02 from "./02.svg";
import frame03 from "./03.svg";
import frame04 from "./04.svg";
import frame05 from "./05.svg";
import { useFrame } from "../../store/Physics/Physics";
import { mocoSize, sizes } from "./utils";

export function Player2(props: React.PropsWithChildren<{}>) {
  const { player } = useGame();
  const ref = React.useRef<SVGRectElement>(null);
  const playerRef = React.useRef<SVGGElement>(null);
  const [idle, setIdle] = React.useState(true);
  const [gTransform, setGTransform] = React.useState<string>(
    sizes.bigGTransform
  );
  const [widthHeight, setwidthHeight] = React.useState<string>(
    sizes.bigWidthHeight
  );

  React.useEffect(() => {
    const { gTransform: gValue, widthHeight: widthHeightValue } = mocoSize(
      !!player?.isSplited
    );
    setGTransform(gValue);
    setwidthHeight(widthHeightValue);
  }, [player?.isSplited]);

  React.useEffect(() => {
    const animation = idle ? [2, 5, 2, 4] : [1, 2, 3, 2];
    let i = 0;
    const interval = setInterval(
      () => {
        if (i >= animation.length) i = 0;
        ref.current?.setAttribute("fill", `url(#frame0${animation[i]})`);
        i++;
      },
      idle ? 250 : 150
    );

    return () => {
      clearInterval(interval);
    };
  }, [idle]);

  useFrame((event) => {
    const player = event.source.world.bodies.find(
      (body) => body.plugin.id === "player2"
    );
    if (player)
      playerRef.current?.setAttribute(
        "transform",
        `translate(${player?.position.x - 50}, ${player?.position.y - 50})`
      );
  });

  if (!player || !player.isSplited) return null;

  return (
    <g ref={playerRef} transform={`translate(${0}, ${0})`}>
      <rect
        ref={ref}
        x={0}
        y={0}
        width={100}
        height={100}
        fill={"black"}
        stroke={player.active === "right" ? "blue" : "none"}
        strokeWidth={10}
        opacity={0.5}
      />
      <g transform={`translate(${gTransform} ${gTransform})`}>
        <defs>
          <pattern
            id="frame01"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={frame01}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="frame02"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={frame02}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="frame03"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={frame03}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="frame04"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={frame04}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="frame05"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={frame05}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
        </defs>
        <rect
          ref={ref}
          x={0}
          y={0}
          width={widthHeight}
          height={widthHeight}
          fill="url(#frame01)"
        />
      </g>
    </g>
  );
}
