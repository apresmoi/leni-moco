import { Size } from "../../utils/math";

export interface Player {
  isSplited: boolean;
  active: "left" | "right";
}

export interface Level {
  size: Size;
  identifier: "tutorial" | "first" | "hard";
  nextLevel: "first" | "hard" | "end";
  conditions: { [key: string]: boolean };
}

export interface Inventory {
  leftSlime: "fire" | "water" | "darkness";
  rightSlime: "fire" | "water" | "darkness";
}
