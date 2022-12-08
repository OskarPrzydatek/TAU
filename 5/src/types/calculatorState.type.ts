import { Operation } from "../consts/operation.enum";

export type CalculatorState = {
  alpha: number;
  beta: number;
  operationSign: Operation | null;
  result: number | null;
};