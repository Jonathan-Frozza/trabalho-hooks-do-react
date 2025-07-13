import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskItem = React.memo(({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
        <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.text}</span>
      </label>
      <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:underline">Remover</button>
    </div>
  );
});

export default TaskItem;
