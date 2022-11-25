import { Store } from '@reduxjs/toolkit';
import { createStore } from 'service/store';
import { jphRequest, jphSuccess, jphFailure } from '../jphAction';
import { JPH_STATE_TYPE } from '../jphReducer.interface';
import { mockJphUserData } from '../../../service/mock/data/jphUserMockData';

jest.mock('axios', () => ({
  // get: (url: string) => {
  //   if(url.includes('/'))
  // }
}));

describe('src/redux/jph/jphRedcuer', () => {
  const store: Store = createStore();
  let initialState: JPH_STATE_TYPE;

  beforeEach(() => {
    initialState = {
      loading: false,
      error: null,
      result: [],
    };
  });

  it('test jphRequest action', () => {
    store.dispatch(jphRequest());
    expect(store.getState().jphReducer).toStrictEqual({
      ...initialState,
      loading: true,
    });
  });
  it('test jphSuccess action', () => {
    store.dispatch(jphSuccess(mockJphUserData));
    expect(store.getState().jphReducer).toStrictEqual({
      ...initialState,
      loading: false,
      result: mockJphUserData,
    });
  });
  it('test jphFailure action', () => {
    const error = new Error('Error occured');
    store.dispatch(jphFailure(error));
    expect(store.getState().jphReducer).toStrictEqual({
      ...initialState,
      loading: false,
      error: error,
      result: mockJphUserData,
    });
  });
});
