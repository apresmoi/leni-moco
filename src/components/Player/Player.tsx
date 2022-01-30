import * as React from "react";
import { useGame } from "../../store";

import * as sprites from "./sprites";

import { useFrame } from "../../store/Physics/Physics";
import { mocoSize, sizes } from "./utils";

export function Player(props: React.PropsWithChildren<{}>) {
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
        ref.current?.setAttribute("fill", `url(#primary_frame0${animation[i]})`);
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
      (body) => body.plugin.id === "player"
    );
    if (player) {
      const oldTransform = playerRef.current?.getAttribute("transform");
      const newTransform = `translate(${player?.position.x - 50}, ${
        player?.position.y - 50
      })`;

      if (oldTransform !== newTransform) {
        if (oldTransform !== "") setIdle(false);
        playerRef.current?.setAttribute("transform", newTransform);

        setTimeout(() => {
          setIdle(true);
        }, 1500);
      }
    }
  });

  if (!player) return null;
  return (
    <g ref={playerRef} transform={""} className="moco">
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
        fillOpacity={0}
      />
      <g transform={`translate(${gTransform} ${gTransform})`}>
        <defs>
          <pattern
            id="primary_frame01"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprites.basic[0]}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="primary_frame02"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprites.basic[1]}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="primary_frame03"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprites.basic[2]}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="primary_frame04"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprites.basic[3]}
              x="0"
              y="0"
              width={widthHeight}
              height={widthHeight}
            />
          </pattern>
          <pattern
            id="primary_frame05"
            patternUnits="userSpaceOnUse"
            width={widthHeight}
            height={widthHeight}
          >
            <image
              href={sprites.basic[4]}
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
          fill="url(#primary_frame01)"
        />
      </g>
    </g>
  );
}
