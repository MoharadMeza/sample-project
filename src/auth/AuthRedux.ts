import { type } from "os";
import { Action } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";
import { call, put, takeLatest } from "redux-saga/effects";
import { UserModel } from "../mock/usersList";
import { getUserByToken } from "./AuthCRUD";

export type AuthStateType = {
  user?: UserModel;
  accessToken?: string;
};
export type ActionWithPayload<T> = {
  payload?: T;
} & Action;

const initialAuthState: AuthStateType = {
  user: undefined,
  accessToken: undefined,
};

export const actionsType = {
  Login: "Login",
  UserRequested: "UserRequested",
  SetUser: "setUser",
};

export const actions = {
  login: (accessToken: string) => ({
    type: actionsType.Login,
    payload: { accessToken },
  }),
  requestUser: () => ({
    type: actionsType.UserRequested,
  }),
  setUser: (user: UserModel) => ({
    type: actionsType.SetUser,
    payload: { user },
  }),
};

export const reducer = persistReducer(
  { storage, key: "auth", whitelist: ["user", "accessToken"] },
  (
    state: AuthStateType = initialAuthState,
    actions: ActionWithPayload<AuthStateType>
  ) => {
    switch (actions.type) {
      case actionsType.Login:
        const accessToken = actions.payload?.accessToken;
        const user = actions.payload?.user;
        return { accessToken, user };
      case actionsType.UserRequested:
        return { ...state, user: undefined };
      case actionsType.SetUser:
        return { ...state, user: actions.payload?.user };
      default:
        return state;
    }
  }
);

export function* saga() {
  yield takeLatest(actionsType.Login, function* loginSaga() {
    yield put(actions.requestUser());
    try {
      const { data } = yield call(getUserByToken);
      yield put(actions.setUser(data));
    } catch (error) {
      console.log(error);
    }
  });
}
