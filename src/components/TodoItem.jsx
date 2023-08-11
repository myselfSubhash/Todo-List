import React from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label className="form-check-label">{todo.text}</label>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeTodo(todo.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;

