import { Routes, Route } from "react-router";
import './style/index.css'
import Home from "./pages/Home.jsx";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./components/user/Dashboard";
import AddWeight from "./components/user/AddWeight";
import WeightsList from "./components/user/WeightsList";
import ProfilePage from "./components/user/ProfilePage";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={< Home />}></Route>
          <Route path="/login" element={< Login />}></Route>
          <Route path="/register" element={< Register />}></Route>
          <Route path="/dashboard" element={< Dashboard />}></Route>
          <Route path="/newweight" element={< AddWeight />}></Route>
          <Route path="/weightStory" element={< WeightsList />}></Route>
          <Route path="/profile" element={< ProfilePage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
