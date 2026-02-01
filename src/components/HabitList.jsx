import React from 'react'
 const HabitList = ({ habits }) => {
    return (
        <div>
            <h2>Current Habits</h2>
            {habits.length === 0 ? (
                <p>No habits added yet.</p>
            ) : (
                <ul>
                    {habits.map((habit) => (
                        <li key={habit.id}>
                            <strong>{habit.name}</strong> - {habit.frequency} (Starts: {habit.startDate})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default HabitList;