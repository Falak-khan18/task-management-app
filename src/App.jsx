import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import AllTasks from "./pages/AllTasks";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  return (
    <Router>
      <div className="min-h-screen p-4 text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-black">
        <Header />
        <h1 className="my-4 text-3xl font-bold text-center">Task Manager</h1>
        <FilterBar />
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/completed" element={<CompletedTasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
