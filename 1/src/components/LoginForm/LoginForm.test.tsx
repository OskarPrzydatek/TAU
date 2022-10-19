import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';

const mockOnLoginForm = jest.fn();

describe('LoginForm', () => {
  test('Component Snapshot', () => {
    const tree = renderer.create(<LoginForm onLoginSubmit={mockOnLoginForm} />);
    expect(tree).toMatchSnapshot();
  });

  test('ensure form data handlig works correctly', () => {
    render(<LoginForm onLoginSubmit={mockOnLoginForm} />);
    fireEvent.click(screen.getByTestId('login-form-submitt-button'));
    expect(mockOnLoginForm).not.toHaveBeenCalled();
    fireEvent.change(screen.getByTestId('login-form-email-input'), {
      target: { value: 'name@mail.com' },
    });
    fireEvent.change(screen.getByTestId('login-form-password-input'), {
      target: { value: 'qwerty123' },
    });
    fireEvent.click(screen.getByTestId('login-form-submitt-button'));
    expect(mockOnLoginForm).toHaveBeenCalledWith('name@mail.com', 'qwerty123');
  });
});

export {};
