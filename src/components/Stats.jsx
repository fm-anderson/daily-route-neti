function Stats({ value }) {
  return (
    <div className="stats bg-base-200 shadow">
      <div className="stat">
        <div className="font-bold">{value}</div>
      </div>
    </div>
  );
}

export default Stats;
