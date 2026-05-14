import { useState } from "react"
import { Link, useNavigate } from "react-router";
import FormLayout from "../ui/form/FormLayout";
import FormField from "../ui/form/FormField";
import SubmitButton from "../ui/form/SubmitButton";


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
    <FormLayout title="Inscrivez-vous afin de commencer l'aventure !" footer={
      <span>
        Vous êtes déjà inscrit ?{" "}
        <Link to="/login">Connectez-vous</Link>
      </span>
    } >

      <FormField
        type="name"
        name="name"
        id="name"
        label="Votre nom"
        placeholder="ex. DU PONT"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <FormField
        type="firstname"
        name="firstname"
        id="firstname"
        label="Votre prénom"
        placeholder="ex. Jean"
        value={formData.firstname}
        onChange={handleChange}
        required
      />

      <FormField 
        type="username"
        name="username"
        id="username"
        label="Votre pseudo"
        placeholder="ex. JeanGym"
        value={formData.username}
        onChange={handleChange}
        required        
      />

      <FormField
        type="email"
        name="email"
        id="email"
        label="Votre adresse e-mail"
        placeholder="ex. Jean.dupont@example.com"
        value={formData.email}
        onChange={handleChange}
        required         
      />

      <FormField
        type="password"
        name="password"
        id="password"
        label="Votre mot de passe"
        placeholder="8 caractéres au minimum"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <FormField
        type="date"
        name="birthday"
        id="birthday"
        label="Votre date de naissance"
        placeholder="8 caractéres au minimum"
        value={formData.birthday}
        onChange={handleChange}
        required
      />

      <FormField
        type="number"
        name="height"
        id="height"
        label="Votre taille (en cm)"
        placeholder="ex. 160"
        value={formData.height}
        onChange={handleChange}
        required
      />

      <div className="intem-box">
        <label htmlFor="gender">Votre genre</label>
        <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Choisissez votre genre</option>
          <option value="female">Féminin</option>
          <option value="male">Masculin</option>
        </select>
      </div>

      <FormField
        type="number"
        name="weight"
        id="weight"
        label="Votre poids actuel"
        placeholder="ex. 65"
        value={formData.weight}
        onChange={handleChange}
        required
      />

      <FormField
        type="number"
        name="weight"
        id="weight"
        label="Votre poids actuel"
        placeholder="ex. 65"
        value={formData.weight}
        onChange={handleChange}
        required
      />

      <div className="intem-box">
        <label htmlFor="goal">Votre objectif</label>
        <input type="number" name="goal" id="goal" placeholder="ex. 60" value={formData.goal} onChange={handleChange}/>
      </div>

      <SubmitButton value="S' enregistrer" />

    </FormLayout>
  )
}

export default Register