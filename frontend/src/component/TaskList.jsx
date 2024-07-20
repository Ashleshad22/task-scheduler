import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import taskService from "../services/taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await taskService.getTasks();
        console.log("API response:", response.data);
        if (Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          console.error("Error: API response is not an array");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="container mt-4">
      {tasks.length === 0 && (
        <div className="alert alert-info">No tasks available</div>
      )}
      <div className="row">
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
