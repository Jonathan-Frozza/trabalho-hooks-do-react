import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export default function TaskForm() {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nova tarefa"
        className="flex-1 border p-2 rounded"
      />
      <button className="bg-blue-600 text-white px-4 rounded">Adicionar</button>
    </form>
  );
}
