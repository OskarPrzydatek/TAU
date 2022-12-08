import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

const mockOnClick = jest.fn();

describe('Button', () => {
  test('Component Snapshot', () => {
    const tree = renderer
      .create(<Button label="Add" onClick={mockOnClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ensure button works correctly', () => {
    render(
      <Button dataTestID="add-button" label="Add" onClick={mockOnClick} />
    );
    const button = screen.getByTestId('add-button');
    expect(button).toHaveTextContent('Add');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
