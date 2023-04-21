import React, { useState } from 'react';
export const TasksContext = React.createContext()

const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const [tasksRemoved, setTasksRemoved] = useState([])
    return (
        <TasksContext.Provider value={{tasks, setTasks, tasksRemoved, setTasksRemoved}}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksProvider;
