import { Size } from "../../utils/math";

export interface Player {
  isSplited: boolean;
  active: "left" | "right";
}

export interface Level {
  size: Size;
  identifier: "tutorial" | "first" | "hard";
  nextLevel: "first" | "hard" | "end";
}

export type Element = "fire" | "water" | "darkness";

export interface Inventory {
  leftSlime: Element;
  rightSlime: Element;
}
