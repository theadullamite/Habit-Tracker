import { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import "./App.css";
import { HabitProgressChart } from "./components/HabitProgressChart";
import { createHabit } from './components/createHabit';

function App() {  
  //using state to capture user input
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  //function to add a habit
  const addHabit = (newHabit) => {
    setHabits((prev) => [...prev, newHabit]);
  };
  //function to remove a habit
  const removeHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  //function to find and update a habit's name
  const editHabit = (id, newName) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, name: newName } : habit,
      ),
    );
  };

  //persisting the logs
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // useEffect(() => {
  //   const rawData = createHabit({ name: "", frequency: ""});
  //   const processData = processLogsForChart(rawData);
  //   setHabits(processData);
  // }, []);

  //processing the raw data into the chart-friendly format
  // const processLogsForChart = (rawData) => {
  //   //logic to map raw logs to the format
  //   return rawData.map((log, index) => ({
  //     name: `Day ${index + 1}`,
  //     completed: log.isCompleted ? 1 : 0,
  //     missed: log.isCompleted ? 0 : 1,
  //   }));
  // };

  

  return (
    <div className="app">
      <h1 className="app-title">Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        setHabits={setHabits}
        onRemove={removeHabit}
        onEdit={editHabit}
      />
      <div>
        {habits.length > 0 ? (
          <HabitProgressChart data={habits} />
        ) : (
          <p>Log some habits to see your progress!</p>
        )}
      </div>
    </div>
  );
}

export default App;
