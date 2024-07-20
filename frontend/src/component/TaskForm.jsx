import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import taskService from "../services/taskService";

const TaskForm = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    deadline: "",
    priority: 1,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== "new") {
      const fetchTask = async () => {
        const response = await taskService.getTask(id);
        setTask(response.data);
      };
      fetchTask();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id !== "new") {
      await taskService.updateTask(id, task);
    } else {
      await taskService.createTask(task);
    }
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Task Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={task.name}
            onChange={handleChange}
            placeholder="Task Name"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="description">Task Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Task Description"
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="priority">Priority</label>
          <input
            type="number"
            className="form-control"
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-success mt-3"
        >
          Save Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
