import React from "react";
import { Body, Vector } from "matter-js";
import { CollisionCategories } from "../store/Physics";
import { GameObjectBody } from "../sharedTypes";

export const isWall = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.WALL;
export const isPlayer = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.PLAYER;
export const isFireWall = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.FIRE_BLOCK;
export const isIceBlock = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.ICE_BLOCK;
export const isNeutralBlock = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.NEUTRAL_BLOCK;
export const isPitHole = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.PIT_HOLE;
export const isShadowBlock = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.SHADOW_BLOCK;
export const isWinBlock = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.WIN_BLOCK;
export const isFirePlayer = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.FIRE_PLAYER;
export const isIcePlayer = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.WATER_PLAYER;
export const isShadowPlayer = (body: Body) =>
  body?.collisionFilter?.category === CollisionCategories.SHADOW_PLAYER;

export const eitherIsWall = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.WALL ||
  otherBody?.collisionFilter?.category === CollisionCategories.WALL;
export const eitherIsPlayer = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.PLAYER ||
  otherBody?.collisionFilter?.category === CollisionCategories.PLAYER;
export const eitherIsFireWall = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.FIRE_BLOCK ||
  otherBody?.collisionFilter?.category === CollisionCategories.FIRE_BLOCK;
export const eitherIsIceBlock = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.ICE_BLOCK ||
  otherBody?.collisionFilter?.category === CollisionCategories.ICE_BLOCK;
export const eitherIsNeutralBlock = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.NEUTRAL_BLOCK ||
  otherBody?.collisionFilter?.category === CollisionCategories.NEUTRAL_BLOCK;
export const eitherIsPitHole = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.PIT_HOLE ||
  otherBody?.collisionFilter?.category === CollisionCategories.PIT_HOLE;
export const eitherIsShadowBlock = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.SHADOW_BLOCK ||
  otherBody?.collisionFilter?.category === CollisionCategories.SHADOW_BLOCK;
export const eitherIsWinBlock = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.WIN_BLOCK ||
  otherBody?.collisionFilter?.category === CollisionCategories.WIN_BLOCK;
export const eitherIsFirePlayer = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.FIRE_PLAYER ||
  otherBody?.collisionFilter?.category === CollisionCategories.FIRE_PLAYER;
export const eitherIsIcePlayer = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.WATER_PLAYER ||
  otherBody?.collisionFilter?.category === CollisionCategories.WATER_PLAYER;
export const eitherIsShadowPlayer = (playerBody: Body, otherBody: Body) =>
  playerBody?.collisionFilter?.category === CollisionCategories.SHADOW_PLAYER ||
  otherBody?.collisionFilter?.category === CollisionCategories.SHADOW_PLAYER;

export const hasPossibleSolutions = (body: GameObjectBody) =>
  Array.isArray(body?.solutionCollisionsCategories) &&
  body?.solutionCollisionsCategories.length > 0;
// export const eitherHasPossibleSolutions = (playerBody: GameObjectBody, otherBody: GameObjectBody) => hasPossibleSolutions(playerBody) || hasPossibleSolutions(otherBody);

export const hasKillables = (body: GameObjectBody) =>
  Array.isArray(body?.killCollisionCategories) &&
  body?.killCollisionCategories.length > 0;
// export const eitherHasKillables = (playerBody: GameObjectBody, otherBody: GameObjectBody) => hasKillables(playerBody) || hasKillables(otherBody);

export const getSolutions = (
  playerBody: GameObjectBody,
  otherBody: GameObjectBody
) => [
  ...(playerBody?.solutionCollisionsCategories
    ? playerBody.solutionCollisionsCategories
    : []),
  ...(otherBody?.solutionCollisionsCategories
    ? otherBody.solutionCollisionsCategories
    : []),
];
export const getCategories = (
  playerBody: GameObjectBody,
  otherBody: GameObjectBody
) => [playerBody.collisionFilter.category, otherBody.collisionFilter.category];
export const getKillables = (
  playerBody: GameObjectBody,
  otherBody: GameObjectBody
) => [
  ...(playerBody?.killCollisionCategories
    ? playerBody.killCollisionCategories
    : []),
  ...(otherBody?.killCollisionCategories
    ? otherBody.killCollisionCategories
    : []),
];

export const shouldSolveBlock = (
  playerBody: GameObjectBody,
  otherBody: GameObjectBody
) => {
  if (hasPossibleSolutions(otherBody)) {
    const [a, b] = getCategories(playerBody, otherBody);
    const solutions = getSolutions(playerBody, otherBody);
    if (solutions.includes(a) || solutions.includes(b)) return true;
    return false;
  }
  return false;
};

export const shouldKillPlayer = (
  playerBody: GameObjectBody,
  otherBody: GameObjectBody
) => {
  if (hasKillables(otherBody)) {
    const [a, b] = getCategories(playerBody, otherBody);
    const killables = getKillables(playerBody, otherBody);
    if (killables.includes(a) || killables.includes(b)) return true;
    return false;
  }
  return false;
};
