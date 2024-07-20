import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import taskService from "../services/taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await taskService.getTasks();
        console.log(response.data);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      {Array.isArray(tasks) &&
        tasks.map((task) => <TaskItem key={task._id} task={task} />)}
    </div>
  );
};

export default TaskList;
