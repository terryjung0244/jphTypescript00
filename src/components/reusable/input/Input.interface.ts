export interface OnChangeParamType {
  name: string;
  value: string;
}

export interface InputCompPropsType {
  dataTestId: string;
  name: string;
  value: string;
  onChangeFunc: ({ name, value }: OnChangeParamType) => void;
  placeholder?: string;
  width?: string;
  height?: string;
}
