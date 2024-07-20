import React from "react";
import { Link } from "react-router-dom";
import taskService from "../services/taskService";

const TaskItem = ({ task }) => {
  const handleDelete = async () => {
    await taskService.deleteTask(task._id);
    window.location.reload();
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.name}</h5>
          <p className="card-text">{task.description}</p>
          <p className="card-text">
            Deadline: {new Date(task.deadline).toLocaleDateString()}
          </p>
          <p className="card-text">Priority: {task.priority}</p>
          <Link
            to={`/task/${task._id}`}
            className="btn btn-primary btn-sm mr-2"
          >
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
