export type AuthStateType = {
  user?: UserModel;
  accessToken?: string;
};

export type ActionWithPayload<T> = {
  payload?: T;
} & Action;
