import Home from "../pages/Home.jsx";
import AdviceRoutes from "./AdviceRoutes.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import UserRoutes from "./UserRoutes.jsx";
import GuidesRoutes from "./GuidesRoutes.jsx";
import BodyRoutes from "./BodyRoutes.jsx";
import SaisonsRoutes from "./SaisonsRoutes.jsx";

const appRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <AuthPage /> },
    { path: "/dashboard/*", element: <UserRoutes /> },
    { path: "/advice/*", element: <AdviceRoutes /> },
    { path: "/guides/*", element: <GuidesRoutes /> },
    { path: "/body/*", element: <BodyRoutes /> },
    { path: "/saisons/*", element: <SaisonsRoutes /> }
];

export default appRoutes;