// src/components/TodoForm.jsx
import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        value={task} 
        onChange={handleChange} 
        placeholder="Ajouter une tâche..." 
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default TodoForm;
