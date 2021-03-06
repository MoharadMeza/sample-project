import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { reducer, saga } from "../../auth/redux/auth-redux";

export const rootReducer = combineReducers({
  auth: reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([saga()]);
}
