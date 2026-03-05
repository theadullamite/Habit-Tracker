import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css'; // Default styles (customize as needed)
import CustomTooltip from "./CustomTooltip"; // Reuse if you want advanced tooltips
import "./HabitProgressChart.css"; // Your existing CSS

export const HabitProgressChart = ({ data }) => {
  console.log("data length:", data?.length);
  console.log(data);

  if (!data || data.length === 0) {
    return <div className="chart-card">Loading chart...</div>;
  }

  // Transform data: Parse 'Feb 28' to full date like '2026-02-28', use completed as count (1 or 0)
  const transformedData = data.map(item => {
    const [month, day] = item.name.split(' ');
    const monthNum = new Date(`${month} 1`).getMonth() + 1; // e.g., Feb -> 2
    const year = new Date().getFullYear(); // Assume current year; adjust if needed
    const date = `${year}-${monthNum.toString().padStart(2, '0')}-${day.padStart(2, '0')}`;
    const today = new Date();
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - 180); //subtract 180 days

    // Extract completed and missed habits
    const completedHabits = item.habits?.filter(h => h.completed).map(h => h.name) || [];
    const missedHabits = item.habits?.filter(h => !h.completed).map(h => h.name) || [];
    const totalHabits = item.habits?.length || 0;
    const count = totalHabits > 0 ? Math.round((completedHabits.length / totalHabits) * 4) : 0; // Scale 0-4 for colors
    return {
      date,
      count,
      completedHabits,
      missedHabits,
      
    };
  });

  return (
    <div className="chart-card">
      <h2 className="chart-title">Habit Chart</h2>
      <div className="chart-container">
        <CalendarHeatmap
          values={transformedData}
          numDays={180} // Last 6 months; adjust for 365 (1 year) or based on data
          horizontal={true} // GitHub-style layout
          showWeekdayLabels={true}
          gutterSize={3} // Space between squares
          classForValue={(value) => {
            if (!value) return 'color-empty'; // No data days (gray)
            return `color-scale-${value.count}`; // e.g., color-scale-0 (all missed) to color-scale-4 (all completed)
          }}
          titleForValue={(value) => {
            if (!value) return null;
            const completedList = value.completedHabits.length > 0 ? `Completed: ${value.completedHabits.join(', ')}` : 'No completed habits';
            const missedList = value.missedHabits.length > 0 ? `Missed: ${value.missedHabits.join(', ')}` : 'No missed habits';
            return `${value.date}\n${completedList}\n${missedList}`;
            // Customize further: e.g., add task details if available in data
          }}
          // Optional: onClick={(value) => console.log('Clicked:', value)} for interactions
        />
      </div>
    </div>
  );
};