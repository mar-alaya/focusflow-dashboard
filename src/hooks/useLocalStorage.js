import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  function loadData() {
    try {
      const savedData = localStorage.getItem(key);

      if (savedData !== null) {
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error("Task loading failed", error);
    }

    return initialValue;
  }

  const [value, setValue] = useState(loadData);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Task loading failed:", error);
    }
  }, [key, value]);

  return [value, setValue];
}
