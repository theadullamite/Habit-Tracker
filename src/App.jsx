import './App.css'
import { useState } from 'react'

//defining the habit data structure
const habitData = {
  id: '',
  name: '',
  frequency: '',
  color: '',
  startDate: 0,
  successes: ['']
}

function App() {
  //using state to capture user input
  const [formData, setFormData] = useState(habitData);

  return (
    <>
    <div>
      <h1>Creating a habit tracker app</h1>
      <form>
        <input />
        <input />
        <button>Add Habit</button>
        <button>Edit Habit</button>
      </form>
    </div>
    </>
  )
}

export default App
