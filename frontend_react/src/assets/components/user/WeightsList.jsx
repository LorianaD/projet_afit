import { useEffect, useState } from "react";

function WeightsList() {

    const [weights, setWeights] = useState([]);
    const [error, setError] = useState("");
    
    const getWeights = async () => {

        try {

            const token = localStorage.getItem("token");
            // console.log(token);

            const res = await fetch('http://localhost:3000/api/weight', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();
            console.log(data);
            

            if (!res.ok) {
                setError('Erreur lors du chargement');
                setWeights([]);
                return;
            }

            setWeights(data.data);

        } catch (error) {
            console.error("erreur:", error);
            setError("Erreur serveur");
        }

    }

    useEffect(() => {
        getWeights();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // +1 car 0 = janvier
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day}-${month}-${year} ${hours}:${minutes}`;
    };

  return (
    <>
        <h2>Historique</h2>
        <section className="weight-list">
            { weights.map((w) => (
                <div key={w.id} className="weight-card">
                    <div className="weight-intem">
                        <p>{formatDate(w.created_at)}</p>
                    </div>
                    <div className="weight-intem">
                        <h3>Poids</h3>
                        <span>{w.weight} kg</span>
                    </div>
                    <div className="weight-intem">
                        <h3>Perte totale</h3>
                        <span>{w.evolution === null || w.evolution === undefined ? "—" : `${w.evolution > 0 ? "+" : ""}${w.evolution} kg`}</span>                        
                    </div>
                    <div className="weight-intem">
                        <h3>IMC</h3>
                        {w.imc ? (
                            <div className="weight-intem">
                                <span>{w.imc.imc} </span>
                                <span>{w.imc.category}</span>
                            </div>
                        ) : ( 
                            <span>-</span>
                        )}
                    </div>
                    <div className="weight-intem">
                        <span>Encore</span>
                        {w.restToGoal === null || w.restToGoal === undefined ? ( <span>-</span>) : (<span>{w.restToGoal} kg</span>)}
                    </div>
                </div>
            ))}
        </section>
    </>
  )
}

export default WeightsList