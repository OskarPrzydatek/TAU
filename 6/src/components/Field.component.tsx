import React from "react";

import * as Models from "../models";

type FieldProps = Models.Field & { playerPosition: number };

export const Field: React.FC<FieldProps> = ({
  id,
  isStart,
  isStop,
  isObstackle,
  playerPosition,
}: FieldProps) => {
  const isStartField = isStart ? "start " : "";
  const isStopField = isStop ? "stop " : "";
  const isObstackleField = isObstackle ? "obstackle " : "";
  const isPlayerOnField = playerPosition === id;

  const fieldClassName = `${isStartField}${isStopField}${isObstackleField}field`;

  return (
    <li className={fieldClassName} data-testid={`field-${id}`}>
      <span>{id}</span>

      {isObstackle && <span className="obstackle__mark">X</span>}
      {isStart && <span>START</span>}
      {isPlayerOnField && (
        <div className="player center-flex" data-testid="player">
          P
        </div>
      )}
      {isStop && <span>STOP</span>}
    </li>
  );
};
