import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/img/logo.png";
import { navbar } from "../../data/navbar";
import menuBurger from "../../assets/img/menuBurger.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  const isLogged = !!token;

  function handleLogout() {
    localStorage.removeItem("token");
    setIsMenuOpen(false);
    navigate("/");
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo__container">
          <Link to="/">
            <img src={logo} alt="Logo" className="header-logo__img" />
          </Link>
        </div>

        <nav className="header-navbar__contenair">
          <ul className="header-navbar__contents">
            {navbar.map((link) => (
              <li key={link.to} className="header-navbar__item">
                <NavLink to={link.to} 
                  className={({ isActive }) => 
                    `nav-link ${isActive ? "nav-link--active" : ""}`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}

            {isLogged ? (
              <>
                <li className="nav-link-box">
                  <Link to="/dashboard" className="nav-link">
                    Mon compte
                  </Link>
                </li>
                <li className="nav-link-box">
                  <button onClick={handleLogout} className="nav-link" type="button">
                    Se déconnecter
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-link-box">
                <Link to="/login" className="nav-link">
                  Se connecter
                </Link>
              </li>
            )}
          </ul>

          <button className="nav-mobile" type="button" onClick={toggleMenu}>
            <img
              src={menuBurger}
              alt="Ouvrir le menu"
              className="nav-mobile__img"
            />
          </button>
        </nav>
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        isLogged={isLogged}
        handleLogout={handleLogout}
      />
    </header>
  );
}

export default Header;