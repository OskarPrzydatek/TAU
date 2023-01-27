import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";

import * as DataMocks from "../mocks";
import { Provider } from "react-redux";
import { Store, AnyAction } from "@reduxjs/toolkit";
import App from "../App";

const mockStore = configureStore();
let store: Store<any, AnyAction>;

beforeEach(() => {
  store = mockStore({
    game: {
      board: DataMocks.mockBoard,
      playerPosition: DataMocks.mockPlayerPosition,
      playerDestination: DataMocks.mockPlayerDestination,
    },
  });
});

describe("game", () => {
  test("movement", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const ArrowUp = new KeyboardEvent("keydown", { keyCode: 38 });
    const ArrowDown = new KeyboardEvent("keydown", { keyCode: 40 });
    const ArrowRight = new KeyboardEvent("keydown", { keyCode: 39 });
    const ArrowLeft = new KeyboardEvent("keydown", { keyCode: 37 });

    const pressArrow = (arrowEvent: KeyboardEvent) =>
      document.dispatchEvent(arrowEvent);

    const state = () => store.getState();

    // up edge
    pressArrow(ArrowUp);
    expect(state().game.playerPosition).toEqual(4);

    // down move
    pressArrow(ArrowDown);
    expect(state().game.playerPosition).toEqual(9);

    // obstacke
    pressArrow(ArrowDown);
    expect(state().game.playerPosition).toEqual(9);

    // back to start
    pressArrow(ArrowUp);
    expect(state().game.playerPosition).toEqual(4);

    pressArrow(ArrowRight);
    expect(state().game.playerPosition).toEqual(5);

    // right edge
    pressArrow(ArrowRight);
    expect(state().game.playerPosition).toEqual(5);

    pressArrow(ArrowLeft);
    expect(state().game.playerPosition).toEqual(4);
  });
});

export {};
