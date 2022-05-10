import { FC } from "react";
import { Navigate, Route } from "react-router-dom";

export const PublicRoutes: FC = () => {
  return (
    <Route>
      <Route path="/help" element={<>You must login first</>} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Route>
  );
};
