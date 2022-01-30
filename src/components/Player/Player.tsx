import * as React from "react";
import { useGame } from "../../store";

import { useFrame } from "../../store/Physics/Physics";
import { SlimeFrames } from "./SlimeFrames";
import { mocoSize, sizes } from "./utils";

export function Player(props: React.PropsWithChildren<{}>) {
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
    const animations = {
      idle: [1, 4, 1, 3],
      walking: [0, 1, 2, 1],
      death: [5, 6, 7, 8],
    };

    const animation = (() => {
      if (player?.leftKilled) return animations.death;
      if (idle) return animations.idle;
      return animations.walking;
    })();

    const timeout = (() => {
      if (player?.leftKilled) return 50;
      if (idle) return 250;
      return 150;
    })();

    let i = 0;
    const interval = setInterval(() => {
      if (i >= animation.length) {
        if (player?.leftKilled) clearInterval(interval);
        else i = 0;
      }
      ref.current?.setAttribute(
        "fill",
        `url(#primary_frame0${animation[i] + 1})`
      );
      i++;
    }, timeout);

    return () => {
      clearInterval(interval);
    };
  }, [idle, player?.leftKilled]);
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

  const spriteName = player?.isSplited ? inventory?.leftSlime : "basic";

  if (!player) return null;
  return (
    <g ref={playerRef} transform={""} className="moco">
      {/* {player.leftKilled && <circle cx={50} cy={50} r={50} fill="black" />} */}
      <rect
        ref={ref}
        x={0}
        y={0}
        width={100}
        height={100}
        fill={"red"}
        stroke={player.active === "left" ? "white" : "none"}
        strokeWidth={10}
        strokeOpacity={0.5}
        fillOpacity={0}
      />
      <g transform={`translate(${gTransform} ${gTransform})`}>
        <SlimeFrames
          frameName="primary"
          spriteName={spriteName}
          widthHeight={widthHeight}
        />
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
