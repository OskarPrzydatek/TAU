import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Board, Field, Game, Modal, Row } from "./components";
import { Button } from "./components/Button.component";
import { HomePage } from "./pages";

import {
  move,
  newGame,
  selectBoard,
  selectPlayerDestination,
  selectPlayerPosition,
} from "./store/game/game.slice";

import "./styles/styles.css";

function App() {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const playerPosition = useSelector(selectPlayerPosition);
  const playerDestination = useSelector(selectPlayerDestination);

  const gameWinCondition = playerDestination === playerPosition;

  const onClickPlayAgain = () => dispatch(newGame());

  console.log(board)

  React.useEffect(() => {
    const keyboardListner = (event: KeyboardEvent) => {
      dispatch(move(event.key));
    };

    document.addEventListener("keydown", keyboardListner);

    return () => {
      document.removeEventListener("keydown", keyboardListner);
    };
  }, [dispatch]);

  return (
    <HomePage
      board={board}
      playerPosition={playerPosition}
      gameWinCondition={gameWinCondition}
      onClickPlayAgain={onClickPlayAgain}
    />
  );
}

export default App;
