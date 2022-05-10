import { shallowEqual, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { RootState } from "setup/redux/RootReducer";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoute";
import Login from "auth/pages/Login";

export const AppRouter = () => {
  const { isAuthorized } = useSelector(
    ({ auth }: RootState) => ({
      isAuthorized: auth.accessToken,
    }),
    shallowEqual
  );

  return (
    <Routes>
      {!isAuthorized ? (
        <Route>
          <Route path="/auth">
            <Route index element={<Navigate to="/auth/login" />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<>register</>} />
            <Route
              path="/auth/forgot/password"
              element={<>forgot-password</>}
            />
            <Route path="*" element={<Navigate to="/auth/login" />} />
          </Route>
          <Route path="/" element={<PublicRoutes />} />
        </Route>
      ) : (
        <Route path="/" element={<PrivateRoute />} />
      )}
    </Routes>
  );
};
