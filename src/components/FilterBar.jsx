import React from "react";
import { Link } from "react-router-dom";

export default function FilterBar() {
  return (
    <div className="flex justify-center gap-4 my-4">
      <Link to="/" className="text-blue-600 hover:underline">
        All Tasks
      </Link>
      <Link to="/completed" className="text-blue-600 hover:underline">
        Completed Tasks
      </Link>
    </div>
  );
}
