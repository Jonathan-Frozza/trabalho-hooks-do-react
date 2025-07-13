import { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [storedTasks, setStoredTasks] = useLocalStorage('tasks', []);
  const [tasks, setTasks] = useState(storedTasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completas') return task.completed;
    if (filter === 'pendentes') return !task.completed;
    return true;
  });

  return (
    <TaskContext.Provider value={{ tasks: filteredTasks, addTask, toggleTask, deleteTask, setFilter, filter }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
