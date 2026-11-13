import { NavBar } from "./assets/shared/navbars/navbar.comp";
import { Hero } from "./assets/shared/hero/hero.comp";
import { Stats } from "./assets/components/stats.comp";
import { useState } from "react";
import { Form } from "./assets/components/form.comp";
import { TaskContainer } from "./assets/components/cards/taskcard.container.comp";
import { Filters } from "./assets/components/filters.comp";
import { Seachbar } from "./assets/components/searchbar.comp";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [allTasks, setAllTasks] = useLocalStorage("focusflow-tasks", []);
  const [filter, setFilter] = useState("all");

  const openTasks = allTasks.filter((task) => task.isClosed === false);
  const closedTasks = allTasks.filter((task) => task.isClosed === true);

  console.log(openTasks);

  function handleSubmit(event) {
    event.preventDefault();

    const newTaskName = document.querySelector(".input-name").value;
    const newTaskDescription =
      document.querySelector(".input-description").value;
    const newTaskPriority = document.querySelector(".input-priority").value;

    setAllTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        name: newTaskName,
        description: newTaskDescription,
        priority: newTaskPriority,
        isClosed: false,
      },
    ]);
  }

  function handleDeleteTask(task) {
    const newTaskList = allTasks.filter(
      (currentTask) => currentTask.id !== task.id,
    );

    setAllTasks(newTaskList);
  }

  let visibleTasks = allTasks;

  if (filter === "open") {
    visibleTasks = allTasks.filter((task) => task.isClosed === false);
  } else if (filter === "closed") {
    visibleTasks = allTasks.filter((task) => task.isClosed === true);
  }

  function handleCloseTask(task) {
    const updatedTasks = allTasks.map((currentTask) => {
      if (currentTask.id === task.id) {
        const updatedTask = { ...currentTask };

        if (currentTask.isClosed === false) {
          updatedTask.isClosed = true;
        } else {
          updatedTask.isClosed = false;
        }

        return updatedTask;
      } else {
        return currentTask;
      }
    });

    setAllTasks(updatedTasks);
  }

  function handleViewOpen() {
    setFilter("open");
  }

  function handleViewAll() {
    setFilter("all");
  }

  function handleViewClosed() {
    setFilter("closed");
  }

  function handleSearch(input) {
    allTasks.filter((task) => input.includes());
  }

  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <Stats
          allTasks={allTasks.length}
          openTasks={openTasks.length}
          closedTasks={closedTasks.length}
        />

        <section className="flex gap-5 m-5">
          <Seachbar handler={handleSearch} />
          <Filters
            handlerOpen={handleViewOpen}
            handlerAll={handleViewAll}
            handlerClosed={handleViewClosed}
          />
        </section>

        <section className="dashboard-section flex items-start gap-5 px-5 py-10">
          <TaskContainer
            tasklist={visibleTasks}
            closeHandler={handleCloseTask}
            deleteHandler={handleDeleteTask}
          />
          <Form handler={handleSubmit} />
        </section>
      </main>
    </>
  );
}

export default App;
