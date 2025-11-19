import { Link } from "react-router"


function Login() {

  return (
    <>
      <h2>Se connecter</h2>
      <form action="" method="post">
        <div className="intem-box">
          <input type="email" name="email" id="email" placeholder="E-mail"/>
        </div>
        <div className="intem-box">
          <input type="password" name="password" id="password" placeholder="Mot de passe"/>
        </div>
        <div className="intem-box">
          <input type="submit" value="Se connecter" className="btn-submit"/>
        </div>
      </form>
      <div>
        <span>Vous n'etes pas encore inscrit ? <Link>Inscrivez-vous</Link></span>
      </div>
    </>
  )
}

export default Login