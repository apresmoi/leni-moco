import { Vector } from "matter-js";

const roundingDecimals = 3;

export const round = (n: number): number =>
  Math.round(n * roundingDecimals) / roundingDecimals;

export const distance = (a: Vector, b: Vector) => {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};
