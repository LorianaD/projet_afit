function DashboardInfoItem({ label, value }) {
  return (
    <div className="lastWeight-intem">
      <h5 className="lastWeight-intem-title">{label}</h5>
      <span className="lastWeight-intem-data">{value}</span>
    </div>
  );
}

export default DashboardInfoItem;