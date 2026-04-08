import { Link, NavLink } from "react-router";
import { navbar } from "../../data/navbar";
import close from "../../assets/img/close.png";

function MobileMenu({ isMenuOpen, closeMenu, isLogged, handleLogout }) {
    return (
        <div className={`mobile-menu ${isMenuOpen ? "mobile-menu--open" : ""}`}>
            <div className="mobile-menu__panel">
                <div className="mobile-menu__top">
                    <button
                        className="mobile-menu__close"
                        type="button"
                        onClick={closeMenu}
                    >
                        <img src={close} alt="Fermer le menu" />
                    </button>
                </div>

                <nav className="mobile-menu__contenair">
                    <ul className="mobile-menu__contents">
                        {navbar.map((link) => (
                            <li key={link.to} className="mobile-menu__item">
                                <NavLink to={link.to} onClick={closeMenu}
                                    className={({ isActive }) => 
                                        `nav-link ${isActive ? "nav-link--active" : ""}`
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}

                        <div className="nav-auth">
                            {isLogged ? (
                                <>
                                    <li className="nav-link-box">
                                        <Link to="/dashboard" className="nav-link" onClick={closeMenu}>
                                            Mon compte
                                        </Link>
                                    </li>
                                    <li className="nav-link-box">
                                        <button
                                            onClick={handleLogout}
                                            className="nav-link"
                                            type="button"
                                        >
                                            Se déconnecter
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-link-box">
                                    <Link to="/login" className="nav-link" onClick={closeMenu}>
                                        Se connecter
                                    </Link>
                                </li>
                            )}
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;