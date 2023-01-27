import * as CalculateService from "./calculate.service";
import * as Models from "../models";
import * as Types from "../types";

const createRow: Types.CreateRow = (
  rowIndex: number,
  boardSquareSize: number,
  start: number,
  stop: number
) => {
  const rowIterator: number = boardSquareSize * rowIndex;

  const createField: Types.CreateField = (columnIndex: number) => {
    const obstacklePercentageThreshold: number = 30;
    const isFieldObstacke: boolean = CalculateService.getChanceToBeObstacle(
      obstacklePercentageThreshold
    );

    const fieldId = CalculateService.getFieldId(columnIndex, rowIterator);
    const field: Models.Field = { id: fieldId };
    const { id } = field;

    const isStarField = id === start;
    const isStopField = id === stop;
    const isObstackleField = isFieldObstacke && !isStarField && !isStopField;

    if (isStarField) field["isStart"] = true;
    if (isStopField) field["isStop"] = true;
    if (isObstackleField) field["isObstackle"] = true;

    return field;
  };

  return Array.from({ length: boardSquareSize }, (_, columnIndex) =>
    createField(columnIndex)
  );
};

export const createBoard: Types.CreateBoard = (
  boardSquareSize: number,
  start: number,
  stop: number
) => {
  return Array.from({ length: boardSquareSize }, (_, rowIndex) =>
    createRow(rowIndex, boardSquareSize, start, stop)
  );
};

export const createGame: Types.CreateGame = (boardSquareSize: number) => {
  const { start, stop } = CalculateService.getStartStop(boardSquareSize);

  return {
    board: createBoard(boardSquareSize, start, stop),
    playerPosition: start,
    playerDestination: stop,
  };
};
