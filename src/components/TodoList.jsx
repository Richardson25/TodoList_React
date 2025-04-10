// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TodoList;
