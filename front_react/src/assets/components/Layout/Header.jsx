import { Link, useNavigate } from "react-router"
import logo from '../../img/logo.png'

function Header() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  let isLogged;

  if (token) {
    isLogged = true;
  } else {
    isLogged = false;
  }
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <><header>
        <h1><Link to="/"><img src={ logo } alt="" className="header-logo" /></Link></h1>
        <nav>
          <ul>
              <li><Link to="/">Accueil</Link></li>
              { isLogged ? (
                <>
                  <li><Link to="/dashboard">Mon compte</Link></li>
                  <li><button onClick={handleLogout}>Se déconnecter</button></li>
                </>
              ) : (
                <>
                  <li><Link to="/login">Se connecter</Link></li>
                </>
              )}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header