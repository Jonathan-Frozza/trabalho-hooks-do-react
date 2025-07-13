import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskItem from './components/TaskItem';
import { useTasks } from './context/TaskContext';

function TaskList() {
  const { tasks } = useTasks();
  return (
    <div className="space-y-2">
      {tasks.map(task => <TaskItem key={task.id} task={task} />)}
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <div className="max-w-md mx-auto mt-10 p-4">
        <h1 className="text-2xl font-bold mb-4">Minha Lista de Tarefas</h1>
        <TaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
