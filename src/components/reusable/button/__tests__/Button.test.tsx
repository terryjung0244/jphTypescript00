import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from '../Button';
import { ButtonCompPropsType } from '../Button.interface';

const renderComponent = (props: ButtonCompPropsType) => render(<Button {...props} />);

describe('src/components/reusable/button/Button', () => {
  let props: ButtonCompPropsType;
  const mockOnClickFunc = jest.fn();

  beforeEach(() => {
    props = {
      dataTestId: 'buttonTestId',
      onClickFunc: mockOnClickFunc,
      buttonText: 'TempText',
      width: '100px',
      height: '100px',
    };
  });

  it('should exist in component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('buttonTestId')).toBeInTheDocument();
    expect(getByTestId('buttonTestId')).toHaveTextContent('TempText');
  });
  it('fireevent test', () => {
    const { getByTestId } = renderComponent(props);
    const button = getByTestId('buttonTestId');
    fireEvent.click(button);
    expect(mockOnClickFunc).toHaveBeenCalled();
    expect(mockOnClickFunc).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(mockOnClickFunc).toHaveBeenCalledTimes(2);
    fireEvent.click(button);
    expect(mockOnClickFunc).toHaveBeenCalledTimes(3);
  });
});
