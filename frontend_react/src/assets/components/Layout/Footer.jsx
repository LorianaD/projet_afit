import { Link } from "react-router"

function Footer() {

  return (
    <>
      <footer>
        <div>
          <ul>
            <li><Link>Accueil</Link></li>
          </ul>
        </div>
        <div className="footer-info">
          <span>&copy;2025 VitaTrack - by Loriana DIANO</span>
        </div>
      </footer>
    </>
  )
}

export default Footer