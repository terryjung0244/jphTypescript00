import React from 'react';
import { ButtonCompPropsType } from './Button.interface';
import * as Styled from './Style.Button';

const Button = ({ dataTestId, onClickFunc, buttonText, width = '300px', height = '100px' }: ButtonCompPropsType) => {
  return (
    <Styled.ButtonStyle data-testid={dataTestId} width={width} height={height} onClick={onClickFunc}>
      {buttonText}
    </Styled.ButtonStyle>
  );
};

export default Button;
