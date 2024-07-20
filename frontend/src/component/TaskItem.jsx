import React from "react";
import { Link } from "react-router-dom";
import taskService from "../services/taskService";

const TaskItem = ({ task }) => {
  const handleDelete = async () => {
    await taskService.deleteTask(task._id);
    window.location.reload();
  };

  return (
    <div className="task-item">
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
      <p>Priority: {task.priority}</p>
      <Link to={`/task/${task._id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
