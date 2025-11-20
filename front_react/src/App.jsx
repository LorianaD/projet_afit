import { Routes, Route } from "react-router";
import './App.css'
import './assets/style/Auth.css'
import Home from "./assets/components/Home";
import Login from "./assets/components/Auth/Login";
import Register from "./assets/components/Auth/Register";
import MainLayout from "./assets/components/Layout/MainLayout";
import Dashboard from "./assets/components/user/Dashboard";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={< Home />}></Route>
          <Route path="/login" element={< Login />}></Route>
          <Route path="/register" element={< Register />}></Route>
          <Route path="/dashboard" element={< Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
