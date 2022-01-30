import * as React from "react";
import { useGame } from "../../store";
import { useKeyPress } from "../../hooks";
import { useFrame } from "../../store/Physics/Physics";
import { mocoSize, sizes } from "./utils";
import { SlimeFrames } from "./SlimeFrames";
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
    const animations = {
      idle: [1, 4, 1, 3],
      walking: [0, 1, 2, 1],
      death: [5, 6, 7, 8],
    };

    const animation = (() => {
      if (player?.rightKilled) return animations.death;
      if (idle) return animations.idle;
      return animations.walking;
    })();

    const timeout = (() => {
      if (player?.rightKilled) return 50;
      if (idle) return 250;
      return 150;
    })();

    let i = 0;
    const interval = setInterval(() => {
      if (i >= animation.length) {
        if (player?.rightKilled) clearInterval(interval);
        else i = 0;
      }
      ref.current?.setAttribute(
        "fill",
        `url(#secondary_frame0${animation[i]})`
      );
      i++;
    }, timeout);

    return () => {
      clearInterval(interval);
    };
  }, [idle, player?.rightKilled]);

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

  const spriteName = player?.isSplited ? inventory?.rightSlime : "basic";

  if (!player || !player.isSplited) return null;

  return (
    <g className="moco" ref={playerRef} transform={`translate(${0}, ${0})`}>
      {/* {player.rightKilled && <circle cx={50} cy={50} r={50} fill="black" />} */}
      <rect
        ref={ref}
        x={0}
        y={0}
        width={100}
        height={100}
        fill={"black"}
        stroke={player.active === "right" ? "white" : "none"}
        strokeWidth={10}
        strokeOpacity={0.5}
        fillOpacity={0}
      />
      <g transform={`translate(${gTransform} ${gTransform})`}>
        <SlimeFrames
          frameName="secondary"
          spriteName={spriteName}
          widthHeight={widthHeight}
        />
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
