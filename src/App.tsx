import { useAppDispatch } from 'hook/useAppDispatch';
import useAppSelector from 'hook/useAppSelector';
import React, { useState } from 'react';
import { jphRequest } from 'redux/jph/jphAction';
import { JphUserModel } from 'service/type/model/jphUserModel';
import Button from './components/reusable/button/Button';
import Input from './components/reusable/input/Input';
import { OnChangeParamType } from './components/reusable/input/Input.interface';

interface InputType {
  inputA: string;
  inputB: string;
}

const App = () => {
  const trash = 'abc';

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

  return (
    <div>
      <Button onClickFunc={getJphDataFunc} buttonText={'Click Me'} />
      <Button onClickFunc={() => alertHello('hello')} buttonText={'Hello'} width={'500px'} height={'100px'} />
      <Button onClickFunc={() => alertHello()} buttonText={'Hello'} width={'500px'} height={'100px'} />
      <Input
        name={'inputA'}
        value={input['inputA']}
        onChangeFunc={onChangeInput}
        placeholder="Please input your name"
        width={'200px'}
        height={'50px'}
      />
      <Input
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
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <div>
        {result.map((jphUser: JphUserModel) => {
          return <div key={jphUser.id}>{jphUser.name}</div>;
        })}
      </div>
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
