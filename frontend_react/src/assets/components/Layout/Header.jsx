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
    <>
      <header>
        <h1><Link to="/"><img src={ logo } alt="" className="header-logo" /></Link></h1>
        <nav>
          <ul>
              <li className="nav-link-box"><Link to="/" className="nav-link">Accueil</Link></li>
              { isLogged ? (
                <>
                  <li className="nav-link-box"><Link to="/dashboard" className="nav-link">Mon compte</Link></li>
                  <li className="nav-link-box"><button onClick={handleLogout} className="nav-link">Se déconnecter</button></li>
                </>
              ) : (
                <>
                  <li className="nav-link-box"><Link to="/login" className="nav-link">Se connecter</Link></li>
                </>
              )}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header