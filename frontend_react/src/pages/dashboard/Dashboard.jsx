import DashboardStats from "../../components/Dashboard/DashboardStats.jsx";
import Sidebar from "../../components/Layout/DashboardSidebar.jsx";
import DashboardLastWeights from "../../components/Dashboard/DashboardLastWeights.jsx";
import Main from "../../components/ui/Main.jsx";
import useWeights from "../../hooks/useWeights.js";
import DashboardEvolution from "../../components/Dashboard/DashboardEvolution.jsx";
import { Navigate } from "react-router";

function Dashboard() {

  const token = localStorage.getItem("token");

  const { weights, stats, error } = useWeights(token);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const lastWeights = weights.slice(0, 3);

  const orderedWeights = [...weights].sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );

  const lastWeightsForChart = orderedWeights.slice(-10);

  const chartLabels = lastWeightsForChart.map((w) =>
    new Date(w.created_at).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
    })
  );

  const chartData = lastWeightsForChart.map((w) => w.weight);

  return (
    <>
      <DashboardStats stats={stats} weights={weights} error={error} />
      <DashboardLastWeights lastWeights={lastWeights} error={error} />
      <DashboardEvolution chartLabels={chartLabels} chartData={chartData} />
    </>
  )
}

export default Dashboard