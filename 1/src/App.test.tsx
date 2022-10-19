import { fireEvent, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

console.log = jest.fn();

describe('App', () => {
  test('App Snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure app login works', () => {
    render(<App />);
    fireEvent.change(screen.getByTestId('login-form-email-input'), {
      target: { value: 'name@mail.com' },
    });
    fireEvent.change(screen.getByTestId('login-form-password-input'), {
      target: { value: 'qwerty123' },
    });
    fireEvent.click(screen.getByTestId('login-form-submitt-button'));
    expect(console.log).toHaveBeenCalledWith({
      email: 'name@mail.com',
      password: 'qwerty123',
    });
  });
});
