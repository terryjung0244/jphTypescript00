import React from 'react';
import { ButtonCompPropsType } from './Button.interface';
import * as Styled from './Style.Button';

const Button = ({ onClickFunc, buttonText, width = '300px', height = '100px' }: ButtonCompPropsType) => {
  return (
    <Styled.ButtonStyle width={width} height={height} onClick={onClickFunc}>
      {buttonText}
    </Styled.ButtonStyle>
  );
};

export default Button;
