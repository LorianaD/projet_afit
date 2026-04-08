import { Route, Routes } from "react-router";
import BodyPage from "../pages/BodyPage";

function BodyRoutes() {
  return (
    <Routes>
        <Route index element={<BodyPage />} ></Route>
    </Routes>
  );
}

export default BodyRoutes;