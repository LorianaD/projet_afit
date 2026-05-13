import EvoChart from "./Charts/EvolutionChart.jsx";

function DashboardEvolution({ chartLabels, chartData }) {
  return (
    <section>
      <h3 className="evolution-weight-title">Évolution</h3>

      <div className="evolutionChart">
        <EvoChart labels={chartLabels} values={chartData} />
      </div>
    </section>
  );
}

export default DashboardEvolution;