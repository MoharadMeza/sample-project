import MockAdapter from "axios-mock-adapter/types";
import { UsersList } from "./usersList";
import { AUTH_LOGIN_URL, AUTH_REQUEST_USER_URL } from "../auth/AuthCRUD";

export const mockAuth = (mock: MockAdapter) => {
  mock.onPost(AUTH_LOGIN_URL).reply((data) => {
    const { email, password } = JSON.parse(data.data);

    if (email && password) {
      const user = UsersList.find(
        (x) =>
          x.email.toLowerCase() === email.toLowerCase() &&
          x.password === password
      );

      if (user) {
        const auth = user.auth;
        return [200, { ...auth, password: undefined }];
      }
    }

    return [400];
  });
  mock.onGet(AUTH_REQUEST_USER_URL).reply(({ headers }) => {
    if (headers) {
      const { Authorization } = headers;
      console.log(headers);
      const accessToken =
        Authorization &&
        Authorization.startsWith("Bearer ") &&
        Authorization.slice("Bearer ".length);
      if (accessToken) {
        const user = UsersList.find((x) => x.auth?.token === accessToken);

        if (user) {
          return [200, { ...user, password: undefined }];
        }
      }
    }
    return [401];
  });
};
