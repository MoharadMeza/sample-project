import React from "react";
import { shallowEqual, useSelector } from "react-redux";
// import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RootState } from "setup/redux/RootReducer";

export const Route = () => {
  const { isAuthorized } = useSelector(
    ({ auth }: RootState) => ({
      isAuthorized: auth.accessToken,
    }),
    shallowEqual
  );
  return <Router>{/* <Switch></Switch> */}</Router>;
};
