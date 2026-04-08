import { Route, Routes } from "react-router";
import Dashboard from "../components/user/Dashboard.jsx";
import ProfilePage from "../components/user/ProfilePage.jsx";
import AddWeight from "../components/user/AddWeight.jsx";
import WeightsList from "../components/user/WeightsList.jsx";

function UserRoutes() {
  return (
    <Routes>
        <Route index element={<Dashboard />} ></Route>
        <Route path="profile" element={<ProfilePage/>}></Route>
        <Route path="newweight" element={<AddWeight/>}></Route>
        <Route path="weightStory" element={<WeightsList/>}></Route>
    </Routes>
  );
}

export default UserRoutes;