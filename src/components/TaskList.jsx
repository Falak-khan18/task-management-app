import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList({ filterCompleted }) {
  const tasks = useSelector((state) => state.tasks);
  const searchQuery = useSelector((state) => state.search);

  // Apply completion filter
  let filtered =
    filterCompleted === undefined
      ? tasks
      : tasks.filter((t) => t.completed === filterCompleted);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        (t.category && t.category.toLowerCase().includes(q))
    );
  }
  if (filtered.length === 0)
    return <p className="text-center text-gray-500">No tasks found.</p>;

  // Group filtered tasks by category
  const groupedTasks = filtered.reduce((acc, task) => {
    const cat = task.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(task);
    return acc;
  }, {});

  const categoryKeys = Object.keys(groupedTasks);

  return (
    <div className="space-y-6">
      {categoryKeys.map((category) => (
        <div key={category}>
          <h2 className="mb-2 text-xl font-semibold text-blue-600 capitalize">
            {category}
          </h2>
          <div className="space-y-4">
            {groupedTasks[category].map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
