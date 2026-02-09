import HabitItem from "./HabitItem";
import './HabitList.css';

const HabitList = ({ habits, onRemove, onEdit, setHabits }) => {
  return (
    <div className='habit-list'>
      <h2>Current Habits</h2>
      {habits.length === 0 ? (
        <p>No habits added yet.</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              <HabitItem 
              habit={habit} 
              onRemove={onRemove} 
              onEdit={onEdit}
              key={habit.id} 
              setHabits={setHabits}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HabitList;
