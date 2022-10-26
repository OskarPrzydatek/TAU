import { Operation } from './consts/operation.enum';
import { CalculatorActions } from './types/calculatorActions.type';
import { CalculatorState } from './types/calculatorState.type';

export default function calculatorReducer(
  state: CalculatorState,
  action: CalculatorActions
) {
  switch (action.type) {
    case Operation.ADD:
      return {
        alpha: action.alpha,
        beta: action.beta,
        operationSign: Operation.ADD,
        result: action.alpha + action.beta,
      };
    case Operation.SUB:
      return {
        alpha: action.alpha,
        beta: action.beta,
        operationSign: Operation.SUB,
        result: action.alpha - action.beta,
      };
    case Operation.MUL:
      return {
        alpha: action.alpha,
        beta: action.beta,
        operationSign: Operation.MUL,
        result: action.alpha * action.beta,
      };
    case Operation.DIV:
      return {
        alpha: action.alpha,
        beta: action.beta,
        operationSign: Operation.DIV,
        result: action.alpha / action.beta,
      };
    default:
      return state;
  }
}
