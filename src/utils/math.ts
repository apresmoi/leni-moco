import { round } from "./utils";
import { Vector as MatterVector, Bounds as MatterBounds } from "matter-js";

export class Size {
  min: Vector;
  max: Vector;
  center: Vector;
  width: number;
  height: number;

  constructor(xMin: number, yMin: number, xMax: number, yMax: number) {
    this.min = new Vector(xMin, yMin);
    this.max = new Vector(xMax, yMax);
    this.center = this._getCenter();
    this.width = this._getWidth();
    this.height = this._getHeight();
  }

  static fromMatter(v: MatterBounds): Size {
    return new Size(v.min.x, v.min.y, v.max.x, v.max.y);
  }

  _getCenter(): Vector {
    return new Vector(
      (this.max.x - this.min.x) / 2 + this.min.x,
      (this.max.y - this.min.y) / 2 + this.min.y
    );
  }

  _getWidth(): number {
    return this.max.x - this.min.x;
  }
  _getHeight(): number {
    return this.max.y - this.min.y;
  }

  multiply(n: number): Size {
    return new Size(
      this.min.x * n,
      this.min.y * n,
      this.max.x * n,
      this.max.y * n
    );
  }
}

export class Vector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static fromMatter(v: MatterVector): Vector {
    return new Vector(v.x, v.y);
  }

  module(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  director(): Vector {
    return new Vector(
      this.x !== 0 ? this.x / Math.abs(this.x) : 0,
      this.y !== 0 ? this.y / Math.abs(this.y) : 0
    );
  }

  normalize(): Vector {
    const module = this.module();
    if (module > 0) return new Vector(this.x / module, this.y / module);
    return this;
  }

  copy(): Vector {
    return new Vector(this.x, this.y);
  }

  setX(x: number): Vector {
    return new Vector(x, this.y);
  }

  setY(y: number): Vector {
    return new Vector(this.x, y);
  }

  invert(): Vector {
    return this.multiply(-1);
  }

  multiply(n: number): Vector {
    return new Vector(this.x * n, this.y * n);
  }

  rotate(angle: number): Vector {
    return new Vector(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) - this.y * Math.cos(angle)
    );
  }

  add(v: Vector): Vector {
    return new Vector(this.x + v.x, this.y + v.y);
  }

  substract(v: Vector): Vector {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  dot(v: Vector): number {
    return this.x * v.x + this.y * v.y;
  }

  angle(v: Vector = null): number {
    if (!v) {
      if (this.x === 0 && this.y > 0) return Math.PI / 2;
      if (this.x === 0 && this.y < 0) return -Math.PI / 2;
      return Math.atan(this.y / this.x) - (this.x < 0 ? Math.PI : 0);
    }
    return Math.acos(this.dot(v) / (this.module() * v.module()));
  }

  toArray(): [number, number] {
    return [this.x, this.y];
  }

  round(): Vector {
    return new Vector(round(this.x), round(this.y));
  }

  isEqual(v: Vector) {
    return this.x === v.x && this.y === v.y;
  }

  serialize() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}
