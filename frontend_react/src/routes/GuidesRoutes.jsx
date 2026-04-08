import { Route, Routes } from "react-router";
import GuidesPage from "../pages/GuidesPage";

function GuidesRoutes() {
  return (
    <Routes>
        <Route index element={<GuidesPage />} ></Route>
    </Routes>
  );
}

export default GuidesRoutes;