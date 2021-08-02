import {
  all,
  call,
  fork,
  put,
  StrictEffect,
  takeEvery,
} from 'redux-saga/effects';

import {getUsersApi} from './userApi';
import {IMPORT_USERS} from './userConstant';

import {getUsers, getUsersSuccess, getUsersFailure} from './userAction';

function* handleGetUsers({
  payload,
}: ReturnType<typeof getUsers>): Generator<StrictEffect, void, any> {
  // const {page} = payload as {
  //   page: number;
  // };
  try {
    const data = yield call(() => getUsersApi());
    console.log('API res: ', data);
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* watchGetUsersContent() {
  yield takeEvery(IMPORT_USERS, handleGetUsers);
}

export default function* rootSaga(): Generator<StrictEffect> {
  yield all([fork(watchGetUsersContent)]);
}
