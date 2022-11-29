import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { createMockStore } from 'service/mock/store/mockStore';
import { mockJphUserData } from 'service/mock/data/jphUserMockData';
import { jphRequest } from 'redux/jph/jphAction';

jest.mock('redux/jph/jphAction', () => ({
  jphRequest: jest.fn(),
}));

const renderComponent = (store: Store) =>
  render(
    /* 실제 component에서 userSelector 또는 useDispatch 썼을 때는 <Provider>로 감싸야 한다. */
    <Provider store={store}>
      <App />
    </Provider>,
  );

describe('src/App', () => {
  let store: Store;
  describe('when result is empty', () => {
    beforeEach(() => {
      store = createMockStore({
        jphReducer: {
          loading: false,
          error: null,
          result: [],
        },
      });
      // comment
      store.dispatch = jest.fn();
    });
    it('render App component', () => {
      const { getByTestId } = renderComponent(store);
      const appComponent = getByTestId('app-component');
      expect(appComponent).toBeInTheDocument();
    });
    it('test jph-result', () => {
      const { getByTestId } = renderComponent(store);
      expect(getByTestId('jph-result')).toBeInTheDocument();
    });
  });
  describe('when result is not empty', () => {
    beforeEach(() => {
      store = createMockStore({
        jphReducer: {
          loading: false,
          error: null,
          result: mockJphUserData,
        },
      });
      store.dispatch = jest.fn();
    });
    it('test jph-result', () => {
      const { getByTestId, getAllByTestId } = renderComponent(store);
      expect(getByTestId('jph-result')).toBeInTheDocument();
      expect(getAllByTestId('jph-result-each')).toHaveLength(2);

      // mockJphUserData.map((jphUser: JphUserModel, index: number) => {
      //   expect(getAllByTestId('jph-result-each-name')[index]).toHaveTextContent(jphUser.name);
      // });

      for (let i = 0; i < mockJphUserData.length; i++) {
        expect(getAllByTestId('jph-result-each-name')[i]).toHaveTextContent(mockJphUserData[i].name);
        expect(getAllByTestId('jph-result-each-email')[i]).toHaveTextContent(mockJphUserData[i].email);
      }
    });
    it('test calling jphRequest Action', () => {
      const { getByTestId } = renderComponent(store);
      expect(getByTestId('button1')).toBeInTheDocument();
      const button = getByTestId('button1');
      fireEvent.click(button);
      expect(jphRequest).toHaveBeenCalled();
      expect(jphRequest).toHaveBeenCalledTimes(1);
    });
  });
});

// mockJphUserData.map((jphUser) => {
//   <div>{jphUser.email}</div>
// })
