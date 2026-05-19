import { Route, Routes } from "react-router";
import { DietaryGoals, PrincipalePage } from "../pages/AdvicesPages";

function AdviceRoutes() {
  return (
    <Routes>
        <Route index element={<PrincipalePage />} ></Route>
        <Route path="dietary-goals" element={<DietaryGoals />} ></Route>
    </Routes>
  );
}

export default AdviceRoutes;
