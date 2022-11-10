/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { takeLatest, put } from 'redux-saga/effects';
import { getUsers } from 'service/api/jph';
import { JPH_ACTION } from 'service/const/actionConst';
import { JphUserModel } from 'service/type/model/jphUserModel';
import { jphFailure, jphSuccess } from './jphAction';
import { JPH_REQUEST_TYPE } from './jphAction.interface';
const { JPH_ACTION_REQUEST } = JPH_ACTION;
// import { JPH_CONST_STRING } from '../../service/const/actionConst';
// import {getJphUsersSuccessAction, getJphUsersFailureAction, getJphPostsByUserIdSuccessAction, getJphPostsByUserIdFailureAction} from './jphAction'

// const { GET_JPH_USERS_REQUEST, GET_JPH_POSTS_BY_USER_ID_REQUEST } = JPH_CONST_STRING;

// function* getJphUsersRequestSaga (action) {
//   let endpoint = '/users';
//   // console.log(`${process.env.REACT_APP_JPH_API_ADDRESS}${endpoint}`)
//   let response = yield fetch(`${process.env.REACT_APP_JPH_API_ADDRESS}${endpoint}`)
//   let data = yield response.json();
//   if (data) {
//     yield put(getJphUsersSuccessAction(data))
//   } else {
//     yield put(getJphUsersFailureAction('Failed'))
//   }
// }

// function* getJphPostsByUserIdRequestSaga (action) {
//   // console.log(action.payload); // {id: 6}
//   let endpoint = `/posts?userId=${action.payload.id}`
//   // console.log(endpoint);
//   let response = yield fetch(`${process.env.REACT_APP_JPH_API_ADDRESS}${endpoint}`)
//   let data = yield response.json();
//   if (data) {
//     yield put(getJphPostsByUserIdSuccessAction(data))
//   } else {
//     yield put(getJphPostsByUserIdFailureAction('Failed'))
//   }
// }

// FETCH!!!
// const jphUserApi = yield fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "GET",
//   body: null,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// // image / file upload
// const jphUserApiResponse: JphUserResponse[] = yield jphUserApi.json();

function* getJphRequestSaga(action: JPH_REQUEST_TYPE): any {
  const jphUserApi: JphUserModel[] | Error = yield getUsers();

  if (jphUserApi.hasOwnProperty('code')) {
    yield put(jphFailure(jphUserApi as Error));
  } else {
    yield put(jphSuccess(jphUserApi as JphUserModel[]));
  }
}

export function* jphSagaWatcher() {
  yield takeLatest(JPH_ACTION_REQUEST, getJphRequestSaga);
  // yield takeLatest (GET_JPH_USERS_REQUEST, getJphUsersRequestSaga);
  // yield takeLatest (GET_JPH_POSTS_BY_USER_ID_REQUEST, getJphPostsByUserIdRequestSaga)
}
