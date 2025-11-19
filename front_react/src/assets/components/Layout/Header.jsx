import { Link } from "react-router"

function Header() {

  return (
    <><header>
        <h1><Link>VitaTrack</Link></h1>
        <nav>
            <ul>
                <li><Link>Accueil</Link></li>
                <li><Link>Mon compte</Link></li>
                <li><Link>Se connecter</Link></li>
                <li><Link>Se déconnecter</Link></li>
                
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header