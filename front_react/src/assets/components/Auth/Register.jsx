import { useState } from "react"
import { useNavigate } from "react-router";


function Register() {

  const [formData, setFormData] = useState({name:"", firstname:"", username:"", email:"", password:"", birthday:"", height:"", gender: "", weight:"", goal:""});

  const [error,setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/auth/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (!res.ok) {

        if (res.status === 409) { // 409 = email déjà utilisé
          setError("E-mail déjà utilisé");
        } else if (res.status === 400) {
          setError("Données invalides, veuillez vérifier le formulaire");
        } else {
          setError("Une erreur est suvenue");
        }

        return;

      }

      setMessage("Compte créé avec succès ! Vous pouvez maintenant vous connecter.")

      navigate("/dashboard");

    } catch (error) {
      console.error("Erreur :", error);
      setError("Erreur serveur, veuillez réessayer plus tard.");      
    }
  }

  return (
    <>

      <h2>Inscrivez-vous afin de commencer l'aventure !</h2>
      
      <form onSubmit={handleSubmit}>

        <div className="intem-box">
          <label htmlFor="name">Votre nom</label>
          <input type="text" name="name" id="name" placeholder="ex. Du Pont" value={formData.name} onChange={handleChange}/>
        </div>

        <div className="intem-box">
          <label htmlFor="firstname">Votre prénom</label>
          <input type="text" name="firstname" id="firstname" placeholder="ex. Jean" value={formData.firstname} onChange={handleChange}/>
        </div>

        <div className="intem-box">
          <label htmlFor="username">Votre pseudo</label>
          <input type="text" name="username" id="username" placeholder="ex. JeanGym" value={formData.username} onChange={handleChange}/>
        </div>

        <div className="intem-box">
          <label htmlFor="email">Votre adresse e-mail</label>
          <input type="text" name="email" id="email" placeholder="ex. Jean.dupont@example.com" value={formData.email} onChange={handleChange}/>
        </div>

        <div className="intem-box">
          <label htmlFor="password">Votre mot de passe</label>
          <input type="password" name="password" id="password" placeholder="8 caractéres au minimum" value={formData.password} onChange={handleChange}/>
        </div>        

        <div className="intem-box">
          <label htmlFor="birthday">Votre date de naissance</label>
          <input type="date" name="birthday" id="birthday" value={formData.birthday} onChange={handleChange}/>
        </div>

        <div className="intem-box">
          <label htmlFor="height">Votre taille (en cm)</label>
          <input type="number" name="height" id="height" placeholder="ex. 160" value={formData.height} onChange={handleChange}/>
        </div>

        <div className="intem-box">
          <label htmlFor="gender">Votre genre</label>
          <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Choisissez votre genre</option>
            <option value="female">Féminin</option>
            <option value="male">Masculin</option>
          </select>
        </div>

        <div className="intem-box">
          <label htmlFor="weight">Votre poids actuel</label>
          <input type="number" name="weight" id="weight" placeholder="ex. 65" value={formData.weight} onChange={handleChange}/>
        </div>

        <div className="intem-box">
          <label htmlFor="goal">Votre objectif</label>
          <input type="number" name="goal" id="goal" placeholder="ex. 60" value={formData.goal} onChange={handleChange}/>
        </div>

        <div className="intem-box">
          <input type="submit" value="S'enregistrer" className="btn-submit"/>
        </div>

      </form>
    </>
  )
}

export default Register