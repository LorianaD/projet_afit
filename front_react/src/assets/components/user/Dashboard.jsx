import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router";
import pesee from "../../img/pesee.png";
import weightstory from "../../img/weightStory.png";

function Dashboard() {

    const token = localStorage.getItem("token");
    // console.log(token);

    const [weights, setWeights] = useState([]);
    const [error, setError] = useState("");

    const getWeights = async () => {
      try {
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
      if (!token) return;
        getWeights();
    }, [token]);

    if (!token) {
      return < Navigate to="/login" />;
    }

    const lastWeight = weights.slice(0, 3);

  return (
    <>
      <main>
        <h2>Bienvenue</h2>
        <div className="dashboard-nav">
          <Link to="/newweight" className="dashboard-link"><img src={ pesee } alt="ajouter une pesée" title="Ajouter une pesée" /></Link>
          <Link to="/weightStory" className="dashboard-link"><img src={ weightstory } alt="Historique" title="Historique" />Historique</Link>
        </div>
        <section className="lastWeight">
          <h3>Mes dérnieres pesées</h3>
          <div className="lastWeight-list">
            { lastWeight.map((w) => (
                <div key={w.id} className="lastWeight-card">
                    <div className="lastWeight-intem">
                        <h3>Poids</h3>
                        <span>{w.weight} kg</span>
                    </div>
                    <div className="lastWeight-intem">
                        <h3>Perte totale</h3>
                        <span>{w.evolution === null || w.evolution === undefined ? "—" : `${w.evolution > 0 ? "+" : ""}${w.evolution} kg`}</span>                        
                    </div>
                    <div className="lastWeight-intem">
                        <h3>IMC</h3>
                        {w.imc ? (
                            <div className="lastWeight-intem">
                                <span>{w.imc.imc} </span>
                                <span>{w.imc.category}</span>
                            </div>
                        ) : ( 
                            <span>-</span>
                        )}
                    </div>
                    <div className="lastWeight-intem">
                        <span>Encore</span>
                        {w.restToGoal === null || w.restToGoal === undefined ? ( <span>-</span>) : (<span>{w.restToGoal} kg</span>)}
                    </div>
                </div>
            ))}
            { lastWeight.length === 0 && !error && (
              <p>Aucune pesée pour le moment.</p>
            )}            
          </div>
        </section>
      </main>
    </>
  )
}

export default Dashboard