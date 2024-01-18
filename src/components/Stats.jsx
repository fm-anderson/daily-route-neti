function Stats({ value }) {
  return (
    <div className="stats bg-base-200 shadow">
      <div className="stat">
        <div className="stat-value text-lg">{value}</div>
      </div>
    </div>
  );
}

export default Stats;
