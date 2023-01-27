import { Arrows } from "../constants";
import * as Models from "../models";
import * as Types from "../types";

export const indexParser: Types.IndexParser = (index: number) => index + 1;

export const getFieldId: Types.GetFieldId = (
  columnIndex: number,
  rowIterator: number
) => indexParser(columnIndex) + rowIterator;

export const getChanceToBeObstacle: Types.GetChanceToBeObstacle = (
  percentageValue: number
) => Math.random() < percentageValue * 0.01;

export const getBoardEdgesIdArray: Types.GetBoardEdgesIdArray = (
  boardSquareSize: number
) => {
  const fieldIdArray = Array.from(
    { length: Math.pow(boardSquareSize, 2) },
    (_, id) => indexParser(id)
  );

  const isFieldOnEdge: Types.IsFieldOnEdge = (value: number) => {
    const isRightEdge: boolean = value % boardSquareSize === 0;
    const isLeftEdge: boolean = (value - 1) % boardSquareSize === 0;
    const isUpEdge: boolean = value <= boardSquareSize;
    const isDownEdge: boolean =
      value > Math.pow(boardSquareSize, 2) - boardSquareSize;

    const isEdge: boolean = isRightEdge || isLeftEdge || isUpEdge || isDownEdge;

    return isEdge;
  };

  const edgesIdArray = fieldIdArray.filter((value) => isFieldOnEdge(value));

  return edgesIdArray;
};

export const getObstacklesIdArray = (board: Models.Board) => {
  const obstacklesIdArray: number[] = [];

  const checkIsFieldObstackel = (row: Models.Row) => {
    row.forEach(({ id, isObstackle }: Models.Field) => {
      if (isObstackle) {
        obstacklesIdArray.push(id);
      }
    });
  };

  board.forEach((row: Models.Row) => checkIsFieldObstackel(row));

  return obstacklesIdArray as number[];
};

export const getShufledArray: Types.GetShufledArray = <T>(array: Array<T>) =>
  array.sort(() => 0.5 - Math.random());

export const getStartStop: Types.GetStartStop = (boardSquareSize: number) => {
  const edgesArray: Array<number> = getBoardEdgesIdArray(boardSquareSize);
  const shufledEdgesIdArray: Array<number> =
    getShufledArray<number>(edgesArray);
  const selectedEdgesId: Array<number> = shufledEdgesIdArray.slice(0, 2);

  const startStop: Models.StartStop = {
    start: selectedEdgesId[0],
    stop: selectedEdgesId[1],
  };

  return startStop;
};

export const getNewPlayerPosition = (
  playerPosition: number,
  arrowKey: Arrows
) => {
  switch (arrowKey) {
    case Arrows.ARROW_UP:
      return playerPosition - 5;
    case Arrows.ARROW_DOWN:
      return playerPosition + 5;
    case Arrows.ARROW_RIGHT:
      return playerPosition + 1;
    case Arrows.ARROW_LEFT:
      return playerPosition - 1;
    default:
      return playerPosition;
  }
};

export const getIsMoveOutsideBoard = (
  playerPosition: number,
  boardSquareSize: number,
  arrowKey: Arrows
) => {
  const isOutsideRightEdgeMove =
    playerPosition % boardSquareSize === 0 && arrowKey === Arrows.ARROW_RIGHT;
  const isOutsideLeftEdgeMove =
    (playerPosition - 1) % boardSquareSize === 0 &&
    arrowKey === Arrows.ARROW_LEFT;
  const isOutsideUpEdgeMove =
    playerPosition <= boardSquareSize && arrowKey === Arrows.ARROW_UP;
  const isOutsideDownEdgeMove =
    playerPosition > Math.pow(boardSquareSize, 2) - boardSquareSize &&
    arrowKey === Arrows.ARROW_DOWN;

  const isOutsideEdgeMove =
    isOutsideRightEdgeMove ||
    isOutsideLeftEdgeMove ||
    isOutsideUpEdgeMove ||
    isOutsideDownEdgeMove;

  return isOutsideEdgeMove;
};
