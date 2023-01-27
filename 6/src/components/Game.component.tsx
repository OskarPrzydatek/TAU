import React from "react";

import * as Types from "../types";

export const Game: React.FC<Types.Container> = ({
  children,
}: Types.Container) => {
  return (
    <main className="game center-flex">
      <header className="center-flex__column">
        <h1 className="center-text clear-margin">TAU Game</h1>

        <p className="center-text">
          Go from start to end! Be careful... there are obstacles here!
        </p>
      </header>

      {children}
    </main>
  );
};
