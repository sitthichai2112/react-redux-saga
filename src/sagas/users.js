import {
  takeEvery,
  call,
  fork,
  put,
  takeLatest,
  take
} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

/////// get User
function* getUser() {
  try {
    const result = yield call(api.getUsers);
    yield put(
      actions.getUsersSuccess({
        items: result.data.data
      })
    );
  } catch (error) {
    yield put(
      actions.userError({
        error: "An error occurred when trying to get user."
      })
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Type.GET_USERS_REQUEST, getUser);
}
/////// get User

////// Creatre User
function* createUser(action) {
  const parms = {
    firstName: action.payload.firstName,
    lastName: action.payload.lastName
  };
  try {
    yield call(api.createUser, parms);
    yield call(getUser);
  } catch (error) {
    yield put(
      actions.userError({
        error: "An error occurred when trying to create user."
      })
    );
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Type.CREATE_USERS_REQUEST, createUser);
}

////// Creatre User

////// Delete User
function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUser);
  } catch (error) {
    yield put(
      actions.userError({
        error: "An error occurred when trying to delete user."
      })
    );
  }
}
function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Type.DELETE_USERS_REQUEST);
    yield call(deleteUser, {
      userId: action.payload.userId
    });
  }
}

////// Delete User

const userSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
];

export default userSagas;
