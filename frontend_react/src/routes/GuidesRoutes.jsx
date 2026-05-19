import { Route, Routes } from "react-router";
import { PrincipalePage } from "../pages/GuidesPages";

function GuidesRoutes() {
  return (
    <Routes>
        <Route index element={<PrincipalePage />} ></Route>
    </Routes>
  );
}

export default GuidesRoutes;