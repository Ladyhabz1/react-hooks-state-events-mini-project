import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); // Default to first category (not "All")

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;

    const newTask = { text, category };
    onTaskFormSubmit(newTask);

    setText(""); // Clear form input
    setCategory(categories[1]); // Reset to default category
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories
          .filter(cat => cat !== "All") // Exclude "All" from options
          .map(cat => <option key={cat} value={cat}>{cat}</option>)
        }
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
