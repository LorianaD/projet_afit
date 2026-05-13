import { Link } from "react-router";
import pesee from "../../assets/img/pesee.png";
import weightstory from "../../assets/img/weightStory.png";
import EvoChart from "./Charts/EvolutionChart.jsx";
import userProfile from "../../assets/img/userFemale.png";

function Sidebar() {
    return (
        <section className="dashboard-header">
            <h2 className="dashboard-title">Bienvenue</h2>
            <div className="dashboard-nav">
                <Link to="/dashboard/newweight" className="dashboard-link">
                    <div className="dashboard-link-icon">
                        <img src={ pesee } alt="ajouter une pesée" title="Nouvelle pesée" className="dashboard-link-img"/>
                    </div>
                    <span className="dashboard-link-label">Nouvelle pesée</span>
                </Link>
                <Link to="/dashboard/weightStory" className="dashboard-link">
                    <div className="dashboard-link-icon">
                        <img src={ weightstory } alt="Historique" title="Historique" className="dashboard-link-img"/>
                    </div>
                    <span className="dashboard-link-label">Historique</span>
                </Link>
                <Link to="/dashboard/profile" className="dashboard-link">
                    <div className="dashboard-link-icon">
                        <img src={ userProfile } alt="Profil" title="Profil" className="dashboard-link-img"/>
                    </div>
                    <span className="dashboard-link-label">Profil</span>
                </Link>          
            </div>
        </section>
    )
}

export default Sidebar;