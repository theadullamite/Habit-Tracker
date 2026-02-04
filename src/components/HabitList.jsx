import HabitItem from "./HabitItem";

const HabitList = ({ habits, onRemove, onEdit }) => {
  return (
    <div>
      <h2>Current Habits</h2>
      {habits.length === 0 ? (
        <p>No habits added yet.</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              <HabitItem habit={habit} onRemove={onRemove} onEdit={onEdit} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HabitList;
