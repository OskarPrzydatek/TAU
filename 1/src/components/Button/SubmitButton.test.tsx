import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './SubmitButton';

describe('SumbitButton', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<Button label="Login" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure label renders correctly', () => {
    render(<Button label="Login" dataTestId="button" />);
    expect(screen.getByTestId('button')).toHaveTextContent('Login');
  });
});

export {};
