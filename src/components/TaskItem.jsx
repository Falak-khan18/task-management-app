import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete, editTask } from "../redux/tasksSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedCategory, setEditedCategory] = useState(task.category);

  const handleSave = () => {
    dispatch(editTask({ id: task.id, title: editedTitle, category: editedCategory }));
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded shadow gap-3">
      {isEditing ? (
        <div className="w-full">
          <input
            type="text"
            className="w-full mb-2 p-2 border rounded"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h2
            className={`text-lg font-semibold ${task.completed ? "line-through text-gray-500" : ""
              }`}
          >
            {task.title}
          </h2>
          <p className="text-sm text-gray-500">{task.category}</p>
        </div>
      )}

      <div className="flex flex-wrap justify-end gap-2 min-w-[200px]">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-3 py-1 text-white bg-blue-500 rounded min-w-20"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 text-white bg-gray-500 rounded min-w-20"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => dispatch(toggleComplete(task.id))}
              className="px-3 py-1 text-white bg-green-500 rounded min-w-20"
            >
              {task.completed ? "Undo" : "Done"}
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 text-white bg-yellow-500 rounded min-w-20"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="px-3 py-1 text-white bg-red-500 rounded min-w-20"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
