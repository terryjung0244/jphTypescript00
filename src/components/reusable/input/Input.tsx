import React from 'react';
import { InputCompPropsType } from './Input.interface';
import * as Styled from 'components/reusable/input/Style.Input';

const Input = ({
  dataTestId,
  name,
  value,
  onChangeFunc,
  placeholder = 'Please input',
  width = '500px',
  height = '50px',
}: InputCompPropsType) => {
  return (
    <Styled.InputStyle
      data-testid={dataTestId}
      name={name}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChangeFunc({ name: e.target.name, value: e.target.value })
      }
      placeholder={placeholder}
      width={width}
      height={height}
    ></Styled.InputStyle>
  );
};

export default Input;
