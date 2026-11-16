import { useState, useEffect } from "react";

export function useLocalStorage(key, initialTasks) {
  function loadData() {
    try {
      const savedData = localStorage.getItem(key);

      if (savedData !== null) {
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error("Task loading failed", error);
    }

    return initialTasks;
  }

  const [tasks, setTasks] = useState(loadData);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(tasks));
    } catch (error) {
      console.error("Task loading failed:", error);
    }
  }, [key, tasks]);

  return [tasks, setTasks];
}
