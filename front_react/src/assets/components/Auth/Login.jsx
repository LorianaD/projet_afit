import { useState } from "react"
import { Link } from "react-router"


function Login() {

  // on déclare un état / on crée un objet pour stocker les données récupéré du formulaire
  const [formData, setFormData] = useState({ email:"", password:"" });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = async (e) => {

    const {name, value} = e.target;

    setFormData({...formData, [name]: value});

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // On envoye la réquette au back
      const res = await fetch("http://localhost:3000/api/auth/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // On reçois la reponse
      const result = await res.json();
      console.log(res.status, result);
      

      // res.ok est une fonction native qui lis les erreurs du back ex. 400 ou 401
      if (!res.ok) {
        setError("Email ou mot de passe incorrect");
        return;
      }

      const token = result.data?.token;

      if (!token) {
        console.error("token", token);
        return;
      }

      localStorage.setItem("token", token);
      // console.log(token);

      setMessage("Connexion réussie !");

      // Redirection
      window.location.href = "/dashboard";

    } catch (error) {
      console.error("Erreur :", error);
      setError("Erreur serveur, veuillez réessayer plus tard.");
    }
  }

  return (
    <>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <div className="intem-box">
          <input type="email" name="email" id="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="intem-box">
          <input type="password" name="password" id="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required/>
        </div>
        <div className="intem-box">
          <input type="submit" value="Se connecter" className="btn-submit"/>
        </div>
        <div className="msgs">
          {error && <p>{error}</p>}
          {message && <p>{message}</p>}
        </div>
      </form>
      <div>
        <span>Vous n'etes pas encore inscrit ? <Link to="/register">Inscrivez-vous</Link></span>
      </div>
    </>
  )
}

export default Login