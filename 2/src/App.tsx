import React from 'react';
import calculatorReducer from './calculatorReducer';

import Button from './components/Button';
import NumericInput from './components/NumericInput';
import ResultView from './components/ResultView';

import { Operation } from './consts/operation.enum';
import { calculatorInitState } from './consts/calculatorInitState';

export default function App() {
  const [state, dispatch] = React.useReducer(
    calculatorReducer,
    calculatorInitState,
    (init) => init
  );

  const alphaInputRef = React.useRef<HTMLInputElement>(null);
  const betaInputRef = React.useRef<HTMLInputElement>(null);

  const handleOperation = (operation: Operation) => {
    const alpha = alphaInputRef.current?.value;
    const beta = betaInputRef.current?.value;

    dispatch({
      type: operation,
      alpha: Number(alpha),
      beta: Number(beta),
    });
  };

  const add = () => handleOperation(Operation.ADD);

  const sub = () => handleOperation(Operation.SUB);

  const mul = () => handleOperation(Operation.MUL);

  const div = () => handleOperation(Operation.DIV);

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <ResultView
        resultTestID="calculator-result"
        alpha={state.alpha}
        beta={state.beta}
        operation={state.operationSign}
        result={state.result}
      />
      <NumericInput
        dataTestID="alpha-input"
        ref={alphaInputRef}
        label="Alpha: "
      />
      <NumericInput dataTestID="beta-input" ref={betaInputRef} label="Beta: " />
      <Button dataTestID="add-button" label={Operation.ADD} onClick={add} />
      <Button dataTestID="sub-button" label={Operation.SUB} onClick={sub} />
      <Button dataTestID="mul-button" label={Operation.MUL} onClick={mul} />
      <Button dataTestID="div-button" label={Operation.DIV} onClick={div} />
    </div>
  );
}
