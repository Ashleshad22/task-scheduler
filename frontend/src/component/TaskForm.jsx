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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <input
        type="date"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="priority"
        value={task.priority}
        onChange={handleChange}
        min="1"
        required
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
