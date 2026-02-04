import { useState } from "react";
import './HabitItem.css';

function HabitItem({ habit, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(habit.name);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(habit.id, editName); //calls the parent update function
    setIsEditing(false); //switch back to edit mode
  };

  if (isEditing) {
    return (
      <form className="habit-item edit-mode"  onSubmit={handleEditSubmit}>
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
        <div className="habit-meta">
          <strong>{habit.name}</strong>
          <span>- {habit.frequency}</span>
          <span>(Starts: {habit.startDate})</span>
        </div>
        
        <div className="habit-actions">
          <button type="submit" className="save-btn">Save</button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => {
              setIsEditing(false);
              setEditName(habit.name); //resets input if cancelled
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="habit-item">
      <span className="habit-name">{habit.name}</span>
      <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
      <button className="remove-btn" onClick={() => onRemove(habit.id)}>Remove</button>
    </div>
  );
}

export default HabitItem;
