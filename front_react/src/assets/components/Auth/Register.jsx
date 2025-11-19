

function Register() {

  return (
    <>

      <h2>Inscrivez-vous afin de commencer l'aventure !</h2>
      
      <form action="" method="post">

        <div className="intem-box">
          <label htmlFor="name">Votre nom</label>
          <input type="text" name="name" id="name" placeholder="ex. Du Pont" />
        </div>

        <div className="intem-box">
          <label htmlFor="firstname">Votre prénom</label>
          <input type="text" name="firstname" id="firstname" placeholder="ex. Jean"/>
        </div>

        <div className="intem-box">
          <label htmlFor="username">Votre pseudo</label>
          <input type="text" name="username" id="username" placeholder="ex. JeanGym"/>
        </div>

        <div className="intem-box">
          <label htmlFor="age">Votre date de naissance</label>
          <input type="date" name="age" id="age" />
        </div>

        <div className="intem-box">
          <label htmlFor="height">Votre taille (en cm)</label>
          <input type="number" name="height" id="height" placeholder="ex. 160"/>
        </div>

        <div className="intem-box">
          <label htmlFor="gender">Votre genre</label>
          <select name="gender" id="gender">
            <option value="female">Féminin</option>
            <option value="male">Masculin</option>
          </select>
        </div>

        <div className="intem-box">
          <label htmlFor="weight">Votre poids actuel</label>
          <input type="number" name="weight" id="weight" placeholder="ex. 65"/>
        </div>

        <div className="intem-box">
          <label htmlFor="goal">Votre objectif</label>
          <input type="number" name="goal" id="goal" placeholder="ex. 60"/>
        </div>

        <div className="intem-box">
          <input type="submit" value="S'enregistrer" className="btn-submit"/>
        </div>

      </form>
    </>
  )
}

export default Register