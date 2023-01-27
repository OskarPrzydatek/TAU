import { Board, Button, Field, Game, Modal, Row } from "../components";
import * as Models from "../models";

type HomePageProps = {
  board: Models.Board;
  playerPosition: number;
  gameWinCondition: boolean;
  onClickPlayAgain: () => {
    payload: undefined;
    type: "game/newGame";
  };
};

export const HomePage: React.FC<HomePageProps> = ({
  board,
  playerPosition,
  gameWinCondition,
  onClickPlayAgain,
}: HomePageProps) => {
  return (
    <>
      <Game>
        <Button label="New Game" onClick={onClickPlayAgain} />

        <Board>
          {board.map((row, index) => (
            <Row key={`row-nr-${index}`}>
              {row.map(({ id, isStart, isStop, isObstackle }) => (
                <Field
                  key={`field-nr-${id}`}
                  id={id}
                  isObstackle={isObstackle}
                  isStart={isStart}
                  isStop={isStop}
                  playerPosition={playerPosition}
                />
              ))}
            </Row>
          ))}
        </Board>
      </Game>

      {gameWinCondition && <Modal onClickModalButton={onClickPlayAgain} />}
    </>
  );
};
