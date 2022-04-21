import React, { useState } from "react";

function App() {
  //const for saving input text
  const [inputText, setInputText] = useState("");

  //const array to save the input text
  const [items, setItems] = useState([]);

  //function to check the value of input text
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  //function to push the inputText to Items Array
  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
