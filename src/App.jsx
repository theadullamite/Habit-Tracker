import { useState, useEffect, useMemo } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import "./App.css";
import { HabitProgressChart } from "./components/HabitProgressChart";
import { prepareChartData } from "./utils/chartHelpers";

function App() {
  //using state to capture user input
  const [habits, setHabits] = useState(() => {
    try {
      const saved = localStorage.getItem("habits");
      if (!saved) return [];

      const parsed = JSON.parse(saved);

      //normalizing shape
      return parsed.map((habit) => ({
        ...habit,
        logs: habit.logs || {},
      }));
    } catch {
      return [];
    }
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

  const chartData = useMemo(() => prepareChartData(habits), [habits]);

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
          <HabitProgressChart data={chartData} />
        ) : (
          <p>Log some habits to see your progress!</p>
        )}
      </div>
    </div>
  );
}

export default App;
