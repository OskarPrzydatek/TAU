import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import NumericInput from '../../components/NumericInput';

describe('NumericInput', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(<NumericInput label="A: " />);
    expect(tree).toMatchSnapshot();
  });

  test('ensure numeric input takes only numbers', () => {
    render(<NumericInput label="A: " dataTestID="numeric-input" />);
    const numericInput: HTMLInputElement = screen.getByTestId('numeric-input');
    fireEvent.change(numericInput, { target: { value: '1' } });
    expect(numericInput.value).toBe('1');
    fireEvent.change(numericInput, { target: { value: '.' } });
    expect(numericInput.value).toBe('');
    fireEvent.change(numericInput, { target: { value: 'E' } });
    expect(numericInput.value).toBe('');
  });

  test('ensure event prevent works correctly', () => {
    render(<NumericInput label="A: " dataTestID="numeric-input" />);
    const numericInput: HTMLInputElement = screen.getByTestId('numeric-input');
    const eventPreventSignKey = createEvent.keyDown(numericInput, { key: '.' });
    const eventNumericKey = createEvent.keyDown(numericInput, { key: '3' });
    eventPreventSignKey.preventDefault = jest.fn();
    eventNumericKey.preventDefault = jest.fn();
    fireEvent(numericInput, eventPreventSignKey);
    expect(eventPreventSignKey.preventDefault).toHaveBeenCalled();
    fireEvent(numericInput, eventNumericKey);
    expect(eventNumericKey.preventDefault).not.toHaveBeenCalled();
  });

  test('ensure handling input value via ref works correctly', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(
      <NumericInput ref={inputRef} label="A: " dataTestID="numeric-input" />
    );
    fireEvent.change(screen.getByTestId('numeric-input'), {
      target: { value: '123' },
    });
    expect(inputRef.current?.value).toBe('123');
  });
});

export {};
