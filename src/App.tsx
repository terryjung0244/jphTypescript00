import { useAppDispatch } from 'hook/useAppDispatch';
import useAppSelector from 'hook/useAppSelector';
import React, { useState } from 'react';
import { jphRequest } from 'redux/jph/jphAction';
import { JphUserModel } from 'service/type/model/jphUserModel';
import Button from './components/reusable/button/Button';
import Input from './components/reusable/input/Input';
import { OnChangeParamType } from './components/reusable/input/Input.interface';
import Footer from './components/page/Footer';

interface InputType {
  inputA: string;
  inputB: string;
}

const App = () => {
  const [input, setInput] = useState<InputType>({
    inputA: '',
    inputB: '',
  });

  const { loading, error, result } = useAppSelector((state) => state.jphReducer);
  const dispatch = useAppDispatch();

  const getJphDataFunc = async () => {
    dispatch(jphRequest());
  };

  const alertHello = (data = 'hihihi') => {
    alert(data);
  };
  const onChangeInput = (data: OnChangeParamType) => {
    // ({ name: e.target.name, value: e.target.value }
    setInput({
      ...input,
      [data.name]: data.value,
    });
  };

  if (loading) {
    return <div data-testid="app-loading-component">Loading...</div>;
  }

  if (error) {
    return <div data-testid="app-error-component">{error.message}</div>;
  }

  return (
    <div data-testid="app-component">
      <Button dataTestId="button1" onClickFunc={getJphDataFunc} buttonText={'Click Me'} />
      <Button
        dataTestId="button2"
        onClickFunc={() => alertHello('hello')}
        buttonText={'Hello'}
        width={'500px'}
        height={'100px'}
      />
      <Button
        dataTestId="button3"
        onClickFunc={() => alertHello()}
        buttonText={'Hello'}
        width={'500px'}
        height={'100px'}
      />
      <Input
        dataTestId="input1"
        name={'inputA'}
        value={input['inputA']}
        onChangeFunc={onChangeInput}
        placeholder="Please input your name"
        width={'200px'}
        height={'50px'}
      />
      <Input
        dataTestId="input2"
        name={'inputB'}
        value={input['inputB']}
        onChangeFunc={onChangeInput}
        placeholder="Please input your hobby"
      />
      {/* <TestComp name={'terry'} age={50} /> */}
      {/* <button
        style={{
          width: "300px",
          height: "100px",
          fontSize: "60px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={() => getJphDataFunc()}
      >
        Click Me
      </button> */}
      <div data-testid="jph-result">
        {result.map((jphUser: JphUserModel) => {
          return (
            <div key={jphUser.id} data-testid="jph-result-each">
              <div data-testid="jph-result-each-name">{jphUser.name}</div>
              <div data-testid="jph-result-each-email">{jphUser.email}</div>
            </div>
          );
        })}
      </div>
      <Footer greeting={'Hello world'} />
    </div>
  );
};

export default App;

// interface TestCompPropsType {
//   name: string;
//   age: number;
// }

// const TestComp = ({ name, age }: TestCompPropsType) => {
//   return (
//     <div>
//       aaa
//     </div>
// //   )
// }
