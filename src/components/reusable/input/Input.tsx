import React from 'react';
import { InputCompPropsType } from './Input.interface';
import * as Styled from 'components/reusable/input/Style.Input';

const Input = ({
  name,
  value,
  onChangeFunc,
  placeholder = 'Please input',
  width = '500px',
  height = '50px',
}: InputCompPropsType) => {
  return (
    <div>
      {/* <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      /> */}
      <Styled.InputStyle
        name={name}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChangeFunc({ name: e.target.name, value: e.target.value })
        }
        placeholder={placeholder}
        width={width}
        height={height}
      ></Styled.InputStyle>
    </div>
  );
};

export default Input;
