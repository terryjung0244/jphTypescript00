import styled from 'styled-components';
import { ButtonCompPropsType } from './Button.interface';

export const ButtonStyle = styled.button<Partial<ButtonCompPropsType>>`
  font-size: 60px;
  border-radius: 20px;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
