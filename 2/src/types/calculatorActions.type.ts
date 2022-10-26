import { Operation } from "../consts/operation.enum";

export type CalculatorActions = {
  type: Operation;
  alpha: number;
  beta: number;
};
