import React, { useState } from "react";
import "./App.css";

// Sample initial data - you can start with this
const initialTasks = [
  {
    id: 1,
    title: "Setup project repository",
    description: "Initialize the project with basic folder structure",
    status: "done",
    assignee: "John Doe",
    priority: "medium",
  },
  {
    id: 2,
    title: "Design user interface",
    description: "Create mockups for the main dashboard",
    status: "inprogress",
    assignee: "Jane Smith",
    priority: "high",
  },
  {
    id: 3,
    title: "Implement authentication",
    description: "Add login and registration functionality",
    status: "todo",
    assignee: "Bob Johnson",
    priority: "high",
  },
];

const columns = [
  { id: "todo", title: "To Do", tasks: [] },
  { id: "inprogress", title: "In Progress", tasks: [] },
  { id: "done", title: "Done", tasks: [] },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // TODO: Add your component logic here

  return (
    <div className="App">
      <header className="app-header">
        <h1>Jira Board Challenge</h1>
      </header>

      <main className="board-container">
        {/* TODO: Implement your Jira board here */}
        <div className="placeholder">
          <h2>Build your Jira board here!</h2>
          <p>Create components for:</p>
          <ul>
            <li>Board container</li>
            <li>Columns (To Do, In Progress, Done)</li>
            <li>Task cards</li>
            <li>Add task functionality</li>
            <li>Drag and drop (bonus)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

// TaskCard.js - You might want to create this component
// export const TaskCard = ({ task, onDragStart }) => {
//   // TODO: Implement task card component
// };

// Column.js - You might want to create this component
// export const Column = ({ column, tasks, onDrop }) => {
//   // TODO: Implement column component
// };

// AddTaskForm.js - You might want to create this component
// export const AddTaskForm = ({ onAddTask }) => {
//   // TODO: Implement add task form
// };
