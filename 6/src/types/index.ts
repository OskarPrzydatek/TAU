import React from "react";
import * as Models from "../models";

// Game Service Types
export type CreateRow = (
  rowIndex: number,
  boardSquareSize: number,
  start: number,
  stop: number
) => Models.Row;

export type CreateField = (columnIndex: number) => Models.Field;

export type CreateBoard = (
  boardSquareSize: number,
  start: number,
  stop: number
) => Models.Board;

export type CreateGame = (boardSquareSize: number) => {
  board: Models.Board;
  playerPosition: number;
  playerDestination: number;
};

// Calculate Service Types
export type IndexParser = (index: number) => number;

export type GetFieldId = (columnIndex: number, rowIterator: number) => number;

export type GetChanceToBeObstacle = (percentageValue: number) => boolean;

export type GetBoardEdgesIdArray = (boardSquareSize: number) => Array<number>;

export type IsFieldOnEdge = (value: number) => boolean;

export type GetShufledArray = <T>(array: Array<T>) => Array<T>;

export type GetStartStop = (boardSquareSize: number) => Models.StartStop;

// Components
export type Container = {
  children: React.ReactNode;
};
