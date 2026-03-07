import { DateTime } from 'luxon';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css'; 
import CustomTooltip from "./CustomTooltip"; 
import "./HabitProgressChart.css"; 

export const HabitProgressChart = ({ data }) => {
  console.log("data length:", data?.length);
  console.log(data);

  if (!data || data.length === 0) {
    return <div className="chart-card">Loading chart...</div>;
  }

  // startDate
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 50);
  const endDate = new Date (today);
  endDate.setDate(today.getDate() + 100);

  // Transform data and exttract habits
  const transformedData = data.map(item => {
    const localToday = DateTime.now().setZone('Africa/Lagos');
    const [month, day] = item.name.split(' ');
    const monthNum = new Date(`${month} 1`).getMonth() + 1; // e.g., Feb -> 2
    const year = new Date().getFullYear(); // Assume current year; adjust if needed
    const date = `${year}-${monthNum.toString().padStart(2, '0')}-${day.padStart(2, '0')}`;

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
          startDate={startDate} 
          endDate={endDate}
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
          }}
        />
      </div>
    </div>
  );
};