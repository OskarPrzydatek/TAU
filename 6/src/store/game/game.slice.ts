import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "..";

import * as Models from "../../models";
import * as GameService from "../../services/game.service";
import * as CalculateService from "../../services/calculate.service";

const boardSquareSize = 5;

export interface GameState {
  board: Models.Board;
  playerPosition: number;
  playerDestination: number;
}

const initialState: GameState = GameService.createGame(boardSquareSize);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    move: (state, action) => {
      const preventMoveOutsideBoard = () => {
        const isMoveOutsideBouard = CalculateService.getIsMoveOutsideBoard(
          state.playerPosition,
          boardSquareSize,
          action.payload
        );
        const newPlayerPosition = CalculateService.getNewPlayerPosition(
          state.playerPosition,
          action.payload
        );

        if (isMoveOutsideBouard) return state.playerPosition;

        return newPlayerPosition;
      };

      const handleMove = () => {
        const isObstackle = CalculateService.getObstacklesIdArray(
          state.board
        ).includes(preventMoveOutsideBoard());

        if (isObstackle) return state.playerPosition;

        return preventMoveOutsideBoard();
      };

      return {
        ...state,
        playerPosition: handleMove(),
      };
    },
    newGame: () => GameService.createGame(boardSquareSize),
  },
});

export const { move, newGame } = gameSlice.actions;

export const selectBoard = (state: RootState) => state.game.board;
export const selectPlayerPosition = (state: RootState) =>
  state.game.playerPosition;
export const selectPlayerDestination = (state: RootState) =>
  state.game.playerDestination;

export default gameSlice.reducer;
