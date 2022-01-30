import * as React from "react";
import { useGame } from "../../store";
import { useKeyPress } from "../../hooks";
import { useFrame } from "../../store/Physics/Physics";
import { mocoSize, sizes } from "./utils";

import * as sprites from "./sprites";

export function Player2(props: React.PropsWithChildren<{}>) {
  const { player, inventory } = useGame();
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
        ref.current?.setAttribute(
          "fill",
          `url(#secondary_frame0${animation[i]})`
        );
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

  const sprite = sprites[player?.isSplited ? inventory?.rightSlime : "basic"];

  if (!player || !player.isSplited) return null;

  return (
    <g className="moco" ref={playerRef} transform={`translate(${0}, ${0})`}>
      <rect
        ref={ref}
        x={0}
        y={0}
        width={100}
        height={100}
        fill={"black"}
        stroke={player.active === "right" ? "blue" : "none"}
        strokeWidth={10}
        fillOpacity={0}
      />
      <g transform={`translate(${gTransform} ${gTransform})`}>
        <defs>
          <pattern
            id="secondary_frame01"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprite[0]}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="secondary_frame02"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprite[1]}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="secondary_frame03"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprite[2]}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="secondary_frame04"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprite[3]}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="secondary_frame05"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprite[4]}
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
          fill="url(#secondary_frame01)"
        />
      </g>
    </g>
  );
}
