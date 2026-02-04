import { useState } from 'react'
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import "./App.css";

function App() {
  //using state to capture user input
  const [habits, setHabits] = useState([]);

  //function to add a habit
  const addHabit = (newHabit) => {
    setHabits(prev => [...prev, newHabit]);
  };
  //function to remove a habit
  const removeHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  //function to find and update a habit's name
  const editHabit = (id, newName) => {
    setHabits(
      habits.map(habit  => 
        habit.id === id ? { ...habit, name: newName} : habit
      )
    );
  }

  return (
    <div className="app">
      <h1 className="app-title">Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} onRemove={removeHabit} onEdit={editHabit}/>
    </div>
  );
}

export default App
