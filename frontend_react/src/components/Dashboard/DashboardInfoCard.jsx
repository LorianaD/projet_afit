function DashboardInfoCard({ title, children }) {
  return (
    <div className="lastWeight-card">
      <h4 className="card-title">{title}</h4>
      {children}
    </div>
  );
}

export default DashboardInfoCard;