import './CustomTooltip.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload;

  return (
    <div className="custom-tooltip">
      <p className="tooltip-date">{label}</p>

      <div className="tooltip-section">
        <strong>Completed</strong>
        <ul>
          {data.completedHabits.length > 0 ? (
            data.completedHabits.map((habit, i) => (
              <li key={i}>✅ {habit}</li>
            ))
          ) : (
            <li>None</li>
          )}
        </ul>
      </div>

      <div className="tooltip-section">
        <strong>Missed</strong>
        <ul>
          {data.missedHabits.length > 0 ? (
            data.missedHabits.map((habit, i) => (
              <li key={i}>❌ {habit}</li>
            ))
          ) : (
            <li>None</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CustomTooltip;
