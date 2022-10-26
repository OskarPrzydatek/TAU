import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ResultView from '../../components/ResultView';
import { Operation } from '../../consts/operation.enum';

describe('ResultView', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(
        <ResultView
          alpha={0}
          beta={0}
          operation={Operation.ADD}
          result={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure result is not shown when equals null', () => {
    const { rerender } = render(
      <ResultView
        alpha={0}
        beta={0}
        operation={Operation.ADD}
        result={null}
        resultTestID="result"
        messageTestID="message"
      />
    );
    expect(screen.queryByTestId('result')).toBeNull();
    expect(screen.queryByTestId('message')).not.toBeNull();
    rerender(
      <ResultView
        alpha={3}
        beta={3}
        operation={Operation.ADD}
        result={6}
        resultTestID="result"
        messageTestID="message"
      />
    );
    expect(screen.queryByTestId('message')).toBeNull();
    expect(screen.queryByTestId('result')).not.toBeNull();
    expect(screen.getByTestId('result')).toHaveTextContent('3 + 3 = 6');
  });
});
