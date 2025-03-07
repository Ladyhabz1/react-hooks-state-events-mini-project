import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "./data"; // Import initial data

function App() {
  const [tasks, setTasks] = useState(TASKS); // Manage task state
  const [selectedCategory, setSelectedCategory] = useState("All"); // Category filter

  // Function to handle adding a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]); // Add new task to list
  }

  // Function to handle deleting a task
  function handleDeleteTask(taskToDelete) {
    setTasks(tasks.filter(task => task.text !== taskToDelete)); // Remove the task
  }

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h1>Task List</h1>

      {/* Category Filter */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* New Task Form */}
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />

      {/* Task List */}
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
