import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../redux/tasksSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow">
      <div>
        <h2
          className={`text-lg font-semibold ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h2>
        <p className="text-sm text-gray-500">{task.category}</p>
      </div>
      <div className="flex flex-wrap justify-end gap-3">
        <button
          onClick={() => dispatch(toggleComplete(task.id))}
          className="px-3 py-1 text-white bg-green-500 rounded min-w-20"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="px-3 py-1 text-white bg-red-500 rounded min-w-20"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
