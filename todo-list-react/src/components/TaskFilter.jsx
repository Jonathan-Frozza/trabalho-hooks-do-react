import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskFilter = React.memo(() => {
  const { filter, setFilter } = useTasks();
  const options = ['todas', 'completas', 'pendentes'];

  return (
    <div className="flex gap-2 mb-4">
      {options.map(option => (
        <button
          key={option}
          onClick={() => setFilter(option)}
          className={`px-3 py-1 rounded ${filter === option ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
});

export default TaskFilter;
