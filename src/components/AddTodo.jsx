import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      });
      setText('');
    }
  };

  return (
    <div className="add-todo input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task..."
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
