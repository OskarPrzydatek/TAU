import { configureStore, combineReducers } from "@reduxjs/toolkit";

import gameReducer from "./game/game.slice";

const rootReducer = combineReducers({
  game: gameReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
