import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import darkModeReducer from "./darkModeSlice";
import searchReducer from "./searchSlice";
export default configureStore({
  reducer: {
    tasks: tasksReducer,
    darkMode: darkModeReducer,
    search: searchReducer,
  },
});
