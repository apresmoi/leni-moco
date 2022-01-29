import { Size } from "../../utils/math";

export interface Position {
  x: number;
  y: number;
}

export interface Player {
  position: Position;
  position2: Position;
  isSplited: boolean;
  active: 'left' | 'right'
}

export interface Level {
  size: Size;
  identifier: 'tutorial' | 'first' | 'hard';
}
