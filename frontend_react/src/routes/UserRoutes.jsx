import { Route, Routes } from "react-router";
import ProfilePage from "../components/user/ProfilePage.jsx";
import WeightsList from "../components/user/WeightsList.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import AddWeightPage from "../pages/AddWeightPage.jsx";
import HistoryWeightPage from "../pages/dashboard/HistoryWeightPage.jsx";

function UserRoutes() {
  return (
    <Routes>
        <Route index element={<Dashboard />} ></Route>
        <Route path="profile" element={<ProfilePage/>}></Route>
        <Route path="newweight" element={<AddWeightPage/>}></Route>
        <Route path="weightStory" element={<HistoryWeightPage/>}></Route>
    </Routes>
  );
}

export default UserRoutes;