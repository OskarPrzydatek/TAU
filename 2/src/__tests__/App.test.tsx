import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure add works correctly', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('alpha-input'), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByTestId('beta-input'), {
      target: { value: '3' },
    });
    fireEvent.click(screen.getByTestId('add-button'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent(
      '3 + 3 = 6'
    );
  });

  test('ensure sub works correctly', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('alpha-input'), {
      target: { value: '10' },
    });
    fireEvent.change(screen.getByTestId('beta-input'), {
      target: { value: '5' },
    });
    fireEvent.click(screen.getByTestId('sub-button'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent(
      '10 - 5 = 5'
    );
  });

  test('ensure mul works correctly', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('alpha-input'), {
      target: { value: '2' },
    });
    fireEvent.change(screen.getByTestId('beta-input'), {
      target: { value: '2' },
    });
    fireEvent.click(screen.getByTestId('mul-button'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent(
      '2 * 2 = 4'
    );
  });

  test('ensure div works correctly', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('alpha-input'), {
      target: { value: '2' },
    });
    fireEvent.change(screen.getByTestId('beta-input'), {
      target: { value: '2' },
    });
    fireEvent.click(screen.getByTestId('div-button'));
    expect(screen.getByTestId('calculator-result')).toHaveTextContent(
      '2 / 2 = 1'
    );
  });
});
