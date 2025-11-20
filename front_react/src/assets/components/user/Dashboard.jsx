import { Navigate } from "react-router";


function Dashboard() {

    const token = localStorage.getItem("token");
    console.log(token);
    

    if (!token) {
        return <Navigate to="/login"/>;
    }

    

  return (
    <>
      <h2>Bienvenue</h2>
    </>
  )
}

export default Dashboard