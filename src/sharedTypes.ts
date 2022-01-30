import React from "react";
import { Body } from "matter-js";
import { CollisionCategories } from "./store/Physics";



export interface GameObjectBody extends Partial<Body> {
    isStatic: boolean;
    collisionFilter: {
        category: CollisionCategories;
    };
    allowedCollisionsCategories?: CollisionCategories[];
    killCollisionCategories?: CollisionCategories[];
    solutionCollisionsCategories?: CollisionCategories[];
}

export interface GameObject {
    x: number;
    y: number;
    col: number;
    row: number;
    width: number;
    height: number;
    gameObjectOptions?: GameObjectBody
}

export type StatusSetter<T = any> = React.Dispatch<React.SetStateAction<T>>