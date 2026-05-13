import DashboardInfoCard from "./DashboardInfoCard";
import DashboardInfoItem from "./DashboardInfoItem";

function DashboardLastWeights({ lastWeights, error }) {

  return (
    <section className="lastWeight">
      <h3 className="lastWeight-title">Mes dernières pesées</h3>

      <div className="lastWeight-list">

        {lastWeights.map((w) => (

          <DashboardInfoCard
            key={w.id}
            title={
              new Date(w.created_at).toLocaleDateString("fr-FR")
            }
          >

            <DashboardInfoItem
              label="Poids"
              value={`${w.weight} kg`}
            />

            <DashboardInfoItem
              label="Perte totale"
              value={
                w.evolution === null || w.evolution === undefined
                  ? "—"
                  : `${w.evolution > 0 ? "-" : ""}${w.evolution} kg`
              }
            />

            <DashboardInfoItem
              label="IMC"
              value={
                w.imc
                  ? `${w.imc.imc} - ${w.imc.category}`
                  : "—"
              }
            />

            <DashboardInfoItem
              label="Encore"
              value={
                w.restToGoal === null || w.restToGoal === undefined
                  ? "—"
                  : `${w.restToGoal} kg`
              }
            />

          </DashboardInfoCard>

        ))}

        {lastWeights.length === 0 && !error && (
          <p>Aucune pesée pour le moment.</p>
        )}

      </div>
    </section>
  );
}

export default DashboardLastWeights;