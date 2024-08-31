import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [task, setTask] = useState(''); // State management system

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }  
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Enter Task'
            />

            <button type="submit"> Add Task</button>
        </form>
    );
}

export default TaskForm;