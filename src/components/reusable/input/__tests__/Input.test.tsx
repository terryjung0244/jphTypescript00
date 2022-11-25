import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Input from '../Input';
import { InputCompPropsType } from '../Input.interface';

const renderComponent = (props: InputCompPropsType) => render(<Input {...props} />);

describe('src/components/reusable/input/Input', () => {
  let props: InputCompPropsType;
  const mockOnChangeFunc = jest.fn();

  beforeEach(() => {
    props = {
      dataTestId: 'inputTest',
      name: 'inputName',
      value: 'inputValue',
      onChangeFunc: mockOnChangeFunc,
      placeholder: 'inputPlaceHolder',
    };
  });

  it('should exist in component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('inputTest')).toBeInTheDocument();
    expect(getByTestId('inputTest')).toHaveAttribute('name', 'inputName');
    expect(getByTestId('inputTest')).toHaveAttribute('value', 'inputValue');
  });
  it('fireevent test', () => {
    const { getByTestId } = renderComponent(props);
    const input = getByTestId('inputTest');
    fireEvent.change(input, {
      target: {
        value: 'abcd',
      },
    });
    expect(mockOnChangeFunc).toHaveBeenCalledTimes(1);
    expect(mockOnChangeFunc).toHaveBeenCalledWith({ name: 'inputName', value: 'abcd' });
    fireEvent.change(input, {
      target: {
        value: 'hello',
      },
    });
    expect(mockOnChangeFunc).toHaveBeenCalledTimes(2);
    expect(mockOnChangeFunc).toHaveBeenCalledWith({ name: 'inputName', value: 'hello' });
  });
});
