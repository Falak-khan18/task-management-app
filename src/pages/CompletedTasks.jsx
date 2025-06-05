import React from 'react';
import TaskList from '../components/TaskList';

export default function CompletedTasks() {
    return <TaskList filterCompleted={true} />;
}
