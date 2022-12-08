import { Operation } from '../consts/operation.enum';

type ResultViewProps = {
  alpha: number;
  beta: number;
  operation: Operation | null;
  result: number | null;
  resultTestID?: string;
  messageTestID?: string;
};

export default function ResultView({
  alpha,
  beta,
  operation,
  result,
  resultTestID,
  messageTestID,
}: ResultViewProps) {
  const isResultDifferrentFromNull = result !== null;

  return (
    <>
      {isResultDifferrentFromNull ? (
        <h2 data-testid={resultTestID}>
          {alpha} {operation} {beta} = {result}
        </h2>
      ) : (
        <h2 data-testid={messageTestID}>
          Put numbers to inputs and choose operation, then You'll see the result
          :D
        </h2>
      )}
    </>
  );
}
