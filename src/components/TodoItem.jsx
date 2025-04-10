// src/components/TodoItem.jsx
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
    </div>
  );
};

export default TodoItem;
