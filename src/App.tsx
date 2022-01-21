import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { actions } from "./auth/AuthRedux";
import { login } from "./auth/AuthCRUD";
import { RootState } from "./setup/redux/RootReducer";
import Login from "./auth/pages/Login";

function App() {
  return <Login />;
}

export default App;
