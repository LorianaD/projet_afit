import { Routes, Route } from "react-router";
import './App.css'
import './assets/style/Auth.css'
import Home from "./assets/components/Home";
import Login from "./assets/components/Auth/Login";
import Register from "./assets/components/Auth/Register";
import MainLayout from "./assets/components/Layout/MainLayout";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={< Home />}></Route>
          <Route path="/login" element={< Login />}></Route>
          <Route path="/register" element={< Register />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
