import { useState } from "react";
import { useNavigate } from "react-router";


function AddWeight() {

    const [formData, setFormData] = useState({weight:""});

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

        const token = localStorage.getItem("token");
        console.log(token);

        try {
            const res = await fetch("http://localhost:3000/api/weight/",{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(formData)
            });

            const result = await res.json();

            if (!res.ok) {

                if (res.status === 400) {
                setError("Données invalides, veuillez vérifier le formulaire");
                } else {
                setError("Une erreur est suvenue");
                }

                return;

            }

            setMessage("Poids enregistré")

            navigate("/dashboard");

        } catch (error) {
        console.error("Erreur :", error);
        setError("Erreur serveur, veuillez réessayer plus tard.");      
        }
    }

  return (
    <>
      <h2>Inseres ton noveau poids</h2>
      <form onSubmit={handleSubmit}>
        <div className="intem-box">
          <label htmlFor="weight">Votre poids actuel</label>
          <input type="number" name="weight" id="weight" placeholder="ex. 65" value={formData.weight} onChange={handleChange}/>
        </div>
        <div className="intem-box">
          <input type="submit" value="S'enregistrer" className="btn-submit"/>
        </div>
      </form>
    </>
  )
}

export default AddWeight