import React from "react";

import * as Typs from "../types";

export const Board: React.FC<Typs.Container> = ({
  children,
}: Typs.Container) => {
  return <div className="board">{children}</div>;
};
