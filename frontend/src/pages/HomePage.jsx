import React from "react";
import TaskList from "../component/TaskList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Task Scheduler</h1>
      <Link to="/task/new" className="btn btn-primary mb-4">
        Add New Task
      </Link>
      <TaskList />
    </div>
  );
};

export default HomePage;
