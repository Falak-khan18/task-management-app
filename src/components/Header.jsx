import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { setSearchQuery } from "../redux/searchSlice";

export default function Header() {
  const searchQuery = useSelector((state) => state.search);
  const mode = useSelector((state) => state.darkMode.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);
  return (
    <div className="flex items-center justify-between gap-5">
      <input
        type="text"
        placeholder="Search by title or category"
        className="w-full px-4 py-2 border rounded"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      <button onClick={() => dispatch(toggleDarkMode())} className="px-1">
        {mode === "dark" ? "☀" : "🌙"}
      </button>
    </div>
  );
}
