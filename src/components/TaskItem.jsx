import React from 'react';

function TaskItem({ task, deleteTask }){
    return(
        <li>
            {task.description}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
}

export default TaskItem;