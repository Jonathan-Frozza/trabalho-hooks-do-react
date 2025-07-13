import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : initialValue;
  const [value, setValue] = useState(initial);

  const setStoredValue = (val) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [value, setStoredValue];
}
