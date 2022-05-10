import { Route, Routes } from "react-router-dom";

export const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<>hi</>} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
};
