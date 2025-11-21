import { Routes, Route } from "react-router";
import './App.css'
import './assets/style/Auth.css'
import './assets/style/User.css'
import './assets/style/Layout.css'
import Home from "./assets/components/Home";
import Login from "./assets/components/Auth/Login";
import Register from "./assets/components/Auth/Register";
import MainLayout from "./assets/components/Layout/MainLayout";
import Dashboard from "./assets/components/user/Dashboard";
import AddWeight from "./assets/components/user/AddWeight";
import WeightsList from "./assets/components/user/WeightsList";

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
        </Route>
      </Routes>
    </>
  )
}

export default App
