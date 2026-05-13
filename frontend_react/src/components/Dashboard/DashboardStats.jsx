import DashboardInfoCard from "./DashboardInfoCard";
import DashboardInfoItem from "./DashboardInfoItem";

function DashboardStats({ stats, weights, error }) {
  if (!stats && !error) {
    return (
      <section>
        <h3 className="lastWeight-title">Mes infos</h3>
        <p>Aucune information</p>
      </section>
    );
  }

  if (!stats) return null;

  return (
    <section>
      <h3 className="lastWeight-title">Mes infos</h3>

      <div className="lastWeight-list">
        <DashboardInfoCard title="Ma première pesée">
          <DashboardInfoItem
            label="Date"
            value={
              stats.firstMeasureDate
                ? new Date(stats.firstMeasureDate).toLocaleDateString("fr-FR")
                : "—"
            }
          />

          <DashboardInfoItem
            label="Poids"
            value={stats.firstWeight != null ? `${stats.firstWeight} kg` : "—"}
          />

          <DashboardInfoItem
            label="IMC"
            value={
              stats.firstImc
                ? `${stats.firstImc.imc} - ${stats.firstImc.category}`
                : "—"
            }
          />
        </DashboardInfoCard>

        <DashboardInfoCard title="Mon poids actuel">
          <DashboardInfoItem
            label="Poids"
            value={stats.currentWeight != null ? `${stats.currentWeight} kg` : "—"}
          />

          <DashboardInfoItem
            label="IMC"
            value={
              stats.currentImc
                ? `${stats.currentImc.imc} - ${stats.currentImc.category}`
                : "—"
            }
          />

          <DashboardInfoItem
            label="Encore"
            value={
              weights[0]?.restToGoal != null
                ? `${weights[0].restToGoal} kg`
                : "—"
            }
          />
        </DashboardInfoCard>

        <DashboardInfoCard title="Mon objectif">
          <DashboardInfoItem
            label="Poids cible"
            value={stats.goalWeight != null ? `${stats.goalWeight} kg` : "—"}
          />

          <DashboardInfoItem
            label="IMC objectif"
            value={
              stats.goalImc
                ? `${stats.goalImc.imc} - ${stats.goalImc.category}`
                : "—"
            }
          />
        </DashboardInfoCard>

        <DashboardInfoCard title="Mes statistiques">
          <DashboardInfoItem
            label="Jours passés depuis la première pesée"
            value={stats.daysSinceStart != null ? `${stats.daysSinceStart} jours` : "—"}
          />

          <DashboardInfoItem
            label="Nombre de pesées"
            value={stats.measuresCount != null ? stats.measuresCount : "—"}
          />

          <DashboardInfoItem
            label="Poids le plus élevé"
            value={stats.maxWeight != null ? `${stats.maxWeight} kg` : "—"}
          />

          <DashboardInfoItem
            label="Poids le plus bas"
            value={stats.minWeight != null ? `${stats.minWeight} kg` : "—"}
          />
        </DashboardInfoCard>

        <DashboardInfoCard title="Évolution récente">
          <DashboardInfoItem
            label="Sur les 7 derniers jours"
            value={stats.diff7Days != null ? `${stats.diff7Days} kg` : "—"}
          />

          <DashboardInfoItem
            label="Sur les 30 derniers jours"
            value={stats.diff30Days != null ? `${stats.diff30Days} kg` : "—"}
          />
        </DashboardInfoCard>
      </div>
    </section>
  );
}

export default DashboardStats;