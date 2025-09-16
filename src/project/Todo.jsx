import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const handleDeleteButton = (id) => {
    tasks.map((curPost) => curPost)
    
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, inputValue]);

    console.log(tasks);
    setInputValue("");
  };

  return (
    <>
      <h1>Info Center</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="type here..."
          name="todo"
          onChange={(e) => handleInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="tak-list">
        {tasks.map((curtask, index) => {
          return (
            <>
              <li key={index}>
                <p>{curtask}</p>
                <button onClick={() => handleDeleteButton(index)}>delete</button>
              </li>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
