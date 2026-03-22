import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router";
import pesee from "../../img/pesee.png";
import weightstory from "../../img/weightStory.png";
import EvoChart from "./Charts/EvolutionChart";
import userProfile from "../../img/userFemale.png";

function Dashboard() {

    const token = localStorage.getItem("token");
    // console.log(token);

    const [weights, setWeights] = useState([]);
    const [error, setError] = useState("");
    const [stats, setStats] = useState("");

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
          setStats(null);
          return;
        }

        setWeights(data.data);
        setStats(data.stats);

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

    // On trie les poids par date
    const orderedWeights = [...weights].sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );

    // Si tu veux limiter. ex. les 10 derniers
    const lastWeightsForChart = orderedWeights.slice(-10);

    // Labels = dates formatées
    const chartLabels = lastWeightsForChart.map((w) =>
      new Date(w.created_at).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short",
      })


    );

    // Data = poids
    const chartData = lastWeightsForChart.map((w) => w.weight);

  return (
    <>  
      <section className="dashboard-header">
        <h2 className="dashboard-title">Bienvenue</h2>
        <div className="dashboard-nav">
          <Link to="/newweight" className="dashboard-link">
            <div className="dashboard-link-icon">
              <img src={ pesee } alt="ajouter une pesée" title="Nouvelle pesée" className="dashboard-link-img"/>
            </div>
            <span className="dashboard-link-label">Nouvelle pesée</span>
          </Link>
          <Link to="/weightStory" className="dashboard-link">
            <div className="dashboard-link-icon">
              <img src={ weightstory } alt="Historique" title="Historique" className="dashboard-link-img"/>
            </div>
            <span className="dashboard-link-label">Historique</span>
          </Link>
          <Link to="/profile" className="dashboard-link">
            <div className="dashboard-link-icon">
              <img src={ userProfile } alt="Profil" title="Profil" className="dashboard-link-img"/>
            </div>
            <span className="dashboard-link-label">Profil</span>
          </Link>          
        </div>
      </section>

      <section>
        <h3 className="lastWeight-title">Mes infos</h3>

        <div className="lastWeight-list">

          {stats && (

            <div className="lastWeight-list">

              {/* Ma première pesée */}
              <div className="lastWeight-card">
                <h4 className="card-title">Ma première pesée</h4>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Date</h5>
                  <span className="lastWeight-intem-data">
                    {stats.firstMeasureDate
                      ? new Date(stats.firstMeasureDate).toLocaleDateString("fr-FR")
                      : "—"}
                  </span>
                </div>
                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Poids</h5>
                  <span className="lastWeight-intem-data">
                    {stats.firstWeight != null ? `${stats.firstWeight} kg` : "—"}
                  </span>
                </div>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">IMC</h5>
                  {stats.firstImc ? (
                    <div className="lastWeight-intem">
                      <span className="lastWeight-intem-data">{stats.firstImc.imc}</span>
                      <span className="lastWeight-intem-data">{stats.firstImc.category}</span>
                    </div>
                  ) : (
                    <span className="lastWeight-intem-data">—</span>
                  )}
                </div>
              </div>

              {/* Mon poids actuel */}
              <div className="lastWeight-card">
                <h4 className="card-title">Mon poids actuel</h4>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Poids</h5>
                  <span className="lastWeight-intem-data">
                    {stats.currentWeight != null ? `${stats.currentWeight} kg` : "—"}
                  </span>
                </div>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">IMC</h5>
                  {stats.currentImc ? (
                    <div className="lastWeight-intem">
                      <span className="lastWeight-intem-data">{stats.currentImc.imc}</span>
                      <span className="lastWeight-intem-data">{stats.currentImc.category}</span>
                    </div>
                  ) : (
                    <span className="lastWeight-intem-data">—</span>
                  )}
                </div>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Encore</h5>
                  <span className="lastWeight-intem-data">
                    {weights[0]?.restToGoal != null
                      ? `${weights[0].restToGoal} kg`
                      : "—"}
                  </span>
                </div>
              </div>

              {/* Mon objectif */}
              <div className="lastWeight-card">
                <h4 className="card-title">Mon objectif</h4>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Poids cible</h5>
                  <span className="lastWeight-intem-data">
                    {stats.goalWeight != null ? `${stats.goalWeight} kg` : "—"}
                  </span>
                </div>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">IMC objectif</h5>
                  {stats.goalImc ? (
                    <div className="lastWeight-intem">
                      <span className="lastWeight-intem-data">{stats.goalImc.imc}</span>
                      <span className="lastWeight-intem-data">{stats.goalImc.category}</span>
                    </div>
                  ) : (
                    <span className="lastWeight-intem-data">—</span>
                  )}
                </div>
              </div>

              {/* Stats divers */}
              <div className="lastWeight-card">
                <h4 className="card-title">Mes statistiques</h4>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Jours passéés depuis la premiére pesée</h5>
                  <span className="lastWeight-intem-data">
                    {stats.daysSinceStart != null ? `${stats.daysSinceStart} jours` : "-"}
                  </span>
                </div>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Le nombre de pesées</h5>
                  <span>
                    {stats.measuresCount != null ? `${stats.measuresCount}` : "-"}
                  </span>
                </div>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Poids le plus élevé</h5>
                  <span>
                    {stats.maxWeight != null ? `${stats.maxWeight} kg` : "-"}
                  </span>
                </div>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Poids le plus bas</h5>
                  <span>
                    {stats.minWeight != null ? `${stats.minWeight} kg` : "-"}
                  </span>
                </div>

              </div>

              {/* Stats divers suite */}
              <div className="lastWeight-card">
                <h4 className="card-title">Mes statistiques</h4>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Evolution de la prise ou perte de poids sur les 7 dérnier jours</h5>
                  <span className="lastWeight-intem-data">
                    {stats.diff7Days != null ? `${stats.diff7Days} kg` : "-"}
                  </span>
                </div>

                <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Evolution de la prise ou perte de poids sur les 30 dérnier jours</h5>
                  <span>
                    {stats.diff30Days != null ? `${stats.diff30Days} kg` : "-"}
                  </span>
                </div>

                {/* <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Moyenne par semaine</h5>
                  <span>
                    {stats.avgPerWeek != null ? `${stats.avgPerWeek}` : "-"}
                  </span>
                </div> */}

                {/* <div className="lastWeight-intem">
                  <h5 className="lastWeight-intem-title">Moyenne par mois</h5>
                  <span>
                    {stats.avgPerMonth != null ? `${stats.avgPerMonth}` : "-"}
                  </span>
                </div> */}

              </div>

            </div>
          )}
          {!stats && !error && (
            <p>Aucune information</p>
          )}
        </div>
      </section>

      <section className="lastWeight">
        <h3 className="lastWeight-title">Mes dérnieres pesées</h3>
        <div className="lastWeight-list">
          { lastWeight.map((w) => (
              <div key={w.id} className="lastWeight-card">
                  <div className="lastWeight-intem">
                      <h5 className="lastWeight-intem-title">Poids</h5>
                      <span className="lastWeight-intem-data">{w.weight} kg</span>
                  </div>
                  <div className="lastWeight-intem">
                      <h5 className="lastWeight-intem-title">Perte totale</h5>
                      <span className="lastWeight-intem-data">{w.evolution === null || w.evolution === undefined ? "—" : `${w.evolution > 0 ? "-" : ""}${w.evolution} kg`}</span>                        
                  </div>
                  <div className="lastWeight-intem">
                      <h5 className="lastWeight-intem-title">IMC</h5>
                      {w.imc ? (
                          <div className="lastWeight-intem">
                              <span className="lastWeight-intem-data">{w.imc.imc} </span>
                              <span className="lastWeight-intem-data">{w.imc.category}</span>
                          </div>
                      ) : ( 
                          <span className="lastWeight-intem-data">-</span>
                      )}
                  </div>
                  <div className="lastWeight-intem">
                      <span className="lastWeight-intem-data">Encore</span>
                      {w.restToGoal === null || w.restToGoal === undefined ? ( <span className="lastWeight-intem-data">-</span>) : (<span className="lastWeight-intem-data">{w.restToGoal} kg</span>)}
                  </div>
              </div>
          ))}
          { lastWeight.length === 0 && !error && (
            <p>Aucune pesée pour le moment.</p>
          )}            
        </div>
      </section>
      <section>
        <h3 className="evolution-weight-title">Evolution</h3>
        <div className="evolutionChart">
          < EvoChart labels={chartLabels} values={chartData} />
        </div>
      </section>
  
    </>
  )
}

export default Dashboard