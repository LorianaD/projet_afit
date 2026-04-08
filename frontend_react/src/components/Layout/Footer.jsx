import { Link } from "react-router";
import logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <img src={logo} alt="Logo VitaTrack" className="footer__logo" />
          </Link>

          <p className="footer__description">
            VitaTrack vous aide à mieux comprendre votre alimentation, vos
            habitudes et votre progression au quotidien.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__title">Navigation</h3>
            <ul className="footer__list">
              <li>
                <Link to="/" className="footer__link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/advice" className="footer__link">
                  Conseils
                </Link>
              </li>
              <li>
                <Link to="/tracking" className="footer__link">
                  Suivi
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="footer__link">
                  Recettes
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Informations</h3>
            <ul className="footer__list">
              <li>
                <Link to="/a-propos" className="footer__link">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer__link">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Légal</h3>
            <ul className="footer__list">
              <li>
                <Link to="/mentions-legales" className="footer__link">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="footer__link">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="footer__link">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; 2026 VitaTrack - by Loriana DIANO
        </p>
      </div>
    </footer>
  );
}

export default Footer;