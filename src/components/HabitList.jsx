import HabitItem from "./HabitItem";

const HabitList = ({ habits, onRemove }) => {
  return (
    <div>
      <h2>Current Habits</h2>
      {habits.length === 0 ? (
        <p>No habits added yet.</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              <div>
                <strong>{habit.name}</strong>
                <span>- {habit.frequency}</span>
                <span>(Starts: {habit.startDate})</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <HabitItem key={habits.id} habit={habits} onRemove={onRemove}/>
    </div>
  );
};

export default HabitList;
