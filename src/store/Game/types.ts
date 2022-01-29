import { Size } from "../../utils/math";

export interface Position {
  x: number;
  y: number;
}

export interface Player {
  position: Position;
  isSplited: boolean;
}

export interface Level {
  size: Size;
}
