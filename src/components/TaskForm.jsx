import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

export default function TaskForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask({ title, category }));
    setTitle("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-3">
      <input
        type="text"
        placeholder="Task Title"
        className="w-full px-4 py-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        className="w-full px-4 py-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-600 rounded"
      >
        Add Task
      </button>
    </form>
  );
}
