import * as React from "react";
import * as sprites from "./sprites";

interface FrameProps {
  widthHeight: string;
  spriteName?: string;
  frameName: string;
}

export function SlimeFrames(props: FrameProps) {
  //@ts-ignore
  const sprite = sprites[props.spriteName || "basic"] as Array<string>;

  return (
    <defs>
      <pattern
        id={props.frameName + "_frame01"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[0]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>
      <pattern
        id={props.frameName + "_frame02"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[1]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>
      <pattern
        id={props.frameName + "_frame03"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[2]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>
      <pattern
        id={props.frameName + "_frame04"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[3]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>
      <pattern
        id={props.frameName + "_frame05"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[4]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>

      <pattern
        id={props.frameName + "_frame06"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[5]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>
      <pattern
        id={props.frameName + "_frame07"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[6]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>
      <pattern
        id={props.frameName + "_frame08"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[7]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>
      <pattern
        id={props.frameName + "_frame09"}
        patternUnits="userSpaceOnUse"
        width={props.widthHeight}
        height={props.widthHeight}
      >
        <image
          href={sprite[8]}
          x="0"
          y="0"
          width={props.widthHeight}
          height={props.widthHeight}
        />
      </pattern>
    </defs>
  );
}
