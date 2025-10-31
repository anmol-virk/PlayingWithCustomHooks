import { useState, useEffect } from "react";

export function useLocalStorage(key, init) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : init;
  });

  localStorage.setItem(key, JSON.stringify(value));

  return { value, setValue };
}
