import axios from "axios";

const API_URL = "process.env.REACT_APP_API_URL" || "api";

export const AUTH_LOGIN_URL = `${API_URL}/login`;
export const AUTH_REQUEST_USER_URL = `${API_URL}/me`;

type LoginData = {
  email: string;
  password: string;
};

// specifying return type of axios respone in generic its not done

export function login(data: LoginData) {
  return axios.post(AUTH_LOGIN_URL, data);
}
export function getUserByToken() {
  return axios.get(AUTH_REQUEST_USER_URL);
}
