import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from './Input';

describe('Input', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<Input label="Email" placeholder="Put email here :D" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure label and placeholder renders correctly', () => {
    render(
      <Input
        label="Email"
        placeholder="Put email here :D"
        inputTestId="input"
        labelTestId="label"
      />
    );
    expect(screen.getByTestId('label')).toHaveTextContent('Email');
    expect(screen.getByTestId('input')).toHaveAttribute(
      'placeholder',
      'Put email here :D'
    );
  });

  test('ensure text is the default type of input', () => {
    render(
      <Input
        label="Email"
        placeholder="Put email here :D"
        inputTestId="input"
      />
    );
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
  });

  test('ensure input is writable', () => {
    render(
      <Input
        label="Email"
        placeholder="Put email here :D"
        inputTestId="input"
      />
    );
    const input: HTMLInputElement = screen.getByTestId('input');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'name@mail.com' } });
    expect(input.value).toBe('name@mail.com');
  });

  test('ensure handlig value via ref works correctly', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(
      <Input
        ref={inputRef}
        label="Email"
        placeholder="Put email here :D"
        inputTestId="input"
      />
    );
    expect(inputRef.current?.value).toBe('');
    fireEvent.change(screen.getByTestId('input'), {
      target: { value: 'name@mail.com' },
    });
    expect(inputRef.current?.value).toBe('name@mail.com');
  });
});

export {};
