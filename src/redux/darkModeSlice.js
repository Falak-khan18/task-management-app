import { createSlice } from "@reduxjs/toolkit";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    mode: initialTheme,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
