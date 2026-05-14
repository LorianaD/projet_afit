// layouts/DashboardLayout.jsx
import { Outlet } from "react-router";
import Main from "../ui/Main";
import Sidebar from "./DashboardSidebar";


function DashboardLayout() {
  return (
    <Main variant="dashboard">
      <Sidebar />
      <Outlet />
    </Main>
  );
}

export default DashboardLayout;