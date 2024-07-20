import React from "react";
import TaskList from "../component/TaskList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Task Scheduler</h1>
      <Link to="/task/new">Add New Task</Link>
      <TaskList />
    </div>
  );
};

export default HomePage;
