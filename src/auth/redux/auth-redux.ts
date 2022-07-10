import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";
import { call, put, takeLatest } from "redux-saga/effects";
import { authSlice } from "./auth-slice";
import { getUserByToken } from "../services/_auth-requests";
import * as actions from "./auth-actions";

export const reducer = persistReducer(
  { storage, key: "auth", whitelist: ["user", "accessToken"] },
  authSlice.reducer
);

export function* saga() {
  yield takeLatest(actions.login, function* loginSaga() {
    yield put(actions.userRequested());
    try {
      const { data } = yield call(getUserByToken);
      yield put(actions.setUser(data));
    } catch (error) {
      console.log(error);
      yield put(actions.logout());
    }
  });
}
