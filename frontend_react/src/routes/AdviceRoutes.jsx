import { Route, Routes } from "react-router";
import AdvicePage from "../pages/AdvicePage";

function AdviceRoutes() {
  return (
    <Routes>
        <Route index element={<AdvicePage />} ></Route>
    </Routes>
  );
}

export default AdviceRoutes;