import './App.css'
import { useState } from 'react'
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';


//defining the habit data structure
const habits = {
  id: '',
  name: '',
  frequency: '',
  color: '',
  createdAt: '2026-01-24',
  completedDays: ['']
}

function App() {
  //using state to capture user input
  const [habits, setHabits] = useState([]);
  
  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits}/>
    </div>
  )
}

export default App
