import { createSlice, nanoid } from '@reduxjs/toolkit';
import { loadTasks, saveTasks } from '../utils/localStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: loadTasks(),
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
                saveTasks(state);
            },
            prepare({ title, category }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        category,
                        completed: false,
                    },
                };
            },
        },
        deleteTask(state, action) {
            const updated = state.filter((task) => task.id !== action.payload);
            saveTasks(updated);
            return updated;
        },
        editTask: (state, action) => {
            const { id, title, category } = action.payload;
            const existingTask = state.find((t) => t.id === id);
            if (existingTask) {
                existingTask.title = title;
                existingTask.category = category;
            }
        },
        toggleComplete(state, action) {
            const task = state.find((t) => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
                saveTasks(state);
            }
        },
    },
});

export const { addTask, deleteTask, toggleComplete, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
