import { Route, Routes } from "react-router";
import ProfilePage from "../pages/dashboard/ProfilePage.jsx";
import { WeightsList } from "../components/ui";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import AddWeightPage from "../pages/AddWeightPage.jsx";
import HistoryWeightPage from "../pages/dashboard/HistoryWeightPage.jsx";
import DashboardLayout from "../components/Layout/DashboardLayout.jsx";

function UserRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />} >
        <Route index element={<Dashboard />} ></Route>
        <Route path="profile" element={<ProfilePage />}></Route>
        <Route path="newweight" element={<AddWeightPage />}></Route>
        <Route path="weightStory" element={<HistoryWeightPage />}></Route>
      </Route>
    </Routes>
  );
}

export default UserRoutes;