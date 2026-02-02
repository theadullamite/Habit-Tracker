import { useState } from "react";

function HabitForm({ onAddHabit }) {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    const newHabit = {
        id: Date.now().toString(),
        name,
        frequency,
        startDate,
    };
    
    onAddHabit(newHabit); //calls the function passed from the parent component

    setName('');
    setFrequency('daily');
    setStartDate(new Date().toISOString().split('T')[0]);//to reset the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="habitName">Habit Name:</label>
        <input
        id="habitName"
          type="text"
          placeholder="Enter a new habit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="frequency">Frequency:</label>
        <select
        id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
