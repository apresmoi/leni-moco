import { Size } from "../../utils/math";

export interface Player {
  isSplited: boolean;
  active: "left" | "right";
  leftKilled: boolean;
  rightKilled: boolean;
}

export interface Level {
  size: Size;
  identifier: "tutorial" | "first" | "hard";
  nextLevel: "first" | "hard" | "end";
  movements: number;
}

export type Element = "fire" | "water" | "darkness";

export interface Inventory {
  leftSlime: Element;
  rightSlime: Element;
}
