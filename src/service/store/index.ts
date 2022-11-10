import { configureStore } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import jphReducer from 'redux/jph/jphReducer';
import { jphSagaWatcher } from 'redux/jph/jphSga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([jphSagaWatcher()]);
}

export const createStore = () =>
  configureStore({
    reducer: {
      jphReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

export const store = createStore();

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
