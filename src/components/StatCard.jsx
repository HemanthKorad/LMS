const StatCard = ({ label, value, change }) => (
  <div className="stat-card">
    <p className="stat-card__label">{label}</p>
    <h3 className="stat-card__value">{value}</h3>
    <p className="stat-card__change">{change}</p>
  </div>
);

export default StatCard;
