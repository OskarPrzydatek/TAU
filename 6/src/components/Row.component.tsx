import React from "react";

import * as Types from "../types";

import "../styles/board.styles.css";

export const Row: React.FC<Types.Container> = ({
  children,
}: Types.Container) => {
  return <ul className="row">{children}</ul>;
};
