import { Routes, Route } from "react-router";
import './style/index.css'
import MainLayout from "./components/Layout/MainLayout";
import appRoutes from "./routes";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}/>
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App