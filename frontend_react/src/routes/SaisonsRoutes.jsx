import { Route, Routes } from "react-router";
import SaisonsPage from "../pages/SaisonsPage";

function SaisonsRoutes() {
  return (
    <Routes>
        <Route index element={<SaisonsPage />} ></Route>
    </Routes>
  );
}

export default SaisonsRoutes;