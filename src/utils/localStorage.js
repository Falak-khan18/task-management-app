export const loadTasks = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
        console.error('Could not load tasks from localStorage', e);
        return [];
    }
};

export const saveTasks = (tasks) => {
    try {
        const serializedState = JSON.stringify(tasks);
        localStorage.setItem('tasks', serializedState);
    } catch (e) {
        console.error('Could not save tasks to localStorage', e);
    }
};