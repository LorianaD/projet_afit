import { Route, Routes } from "react-router";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

function AuthRoutes() {
  return (
    <Routes>
        <Route index element={<Login />} ></Route>
        <Route path="register" element={<Register /> }></Route>
    </Routes>
  );
}

export default AuthRoutes;