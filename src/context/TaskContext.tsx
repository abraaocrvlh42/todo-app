import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Task {  // Alteração: adicionada exportação da interface Task
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  updateTask: (id: number, updatedTask: Task) => void;
  deleteTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = { id: Date.now(), title, description, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (id: number, updatedTask: Task) => {
    setTasks((prevTasks) => prevTasks.map(task => task.id === id ? updatedTask : task));
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleTaskCompletion }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};

export { TaskProvider, useTasks };

