import './App.css'
import { useState } from 'react'
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import HabitItem from './components/HabitItem';


//defining the habit data structure
// const habitTemplate = {
//   id: '',
//   name: '',
//   frequency: '',
//   color: '',
//   createdAt: '',
//   completedDays: []
// }

function App() {
  //using state to capture user input
  const [habits, setHabits] = useState([
    { id: 1, name: ''},
    { id: 2, name: ''},
  ]);
  
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
        habit.id === id ? { ...habits, name: newName} : habit
      )
    );
  }

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} onRemove={removeHabit} onEdit={editHabit}/>
      <HabitItem onEdit={editHabit}/>
    </div>
  )
}

export default App
