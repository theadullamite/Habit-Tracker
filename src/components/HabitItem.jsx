import { useState } from "react"

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
            <form onSubmit={handleEditSubmit}>
                <input 
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => {
                    setIsEditing(false);
                    setEditName(habit.name); //resets input if cancelled
                }}
                >Cancel</button>
            </form>
        );
    }


    return (
        <div>
            <span>{habit.name}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onRemove(habit.id)}>Remove</button>
        </div>
    )
}

export default HabitItem
