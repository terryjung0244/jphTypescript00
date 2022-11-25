import styled from 'styled-components';
import { InputCompPropsType } from './Input.interface';

export const InputStyle = styled.input<Partial<InputCompPropsType>>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export const Hello = 'a';
