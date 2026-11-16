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
  const [search, setSearch] = useState("");

  const openTasks = allTasks.filter((task) => task.isClosed === false);
  const closedTasks = allTasks.filter((task) => task.isClosed === true);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const newTaskName = form.querySelector(".input-name").value.trim();
    const newTaskDescription = form
      .querySelector(".input-description")
      .value.trim();
    const newTaskPriority = form.querySelector(".input-priority").value;

    if (newTaskName === "") {
      return;
    }

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

    form.reset();
  }

  function handleDeleteTask(task) {
    const newTaskList = allTasks.filter((currentTask) => {
      return currentTask.id !== task.id;
    });

    setAllTasks(newTaskList);
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
      }

      return currentTask;
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

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  let visibleTasks = allTasks;

  if (filter === "open") {
    visibleTasks = visibleTasks.filter((task) => {
      return task.isClosed === false;
    });
  } else if (filter === "closed") {
    visibleTasks = visibleTasks.filter((task) => {
      return task.isClosed === true;
    });
  }

  visibleTasks = visibleTasks.filter((task) => {
    const taskName = task.name.toLowerCase();
    const searchText = search.trim().toLowerCase();

    return taskName.includes(searchText);
  });

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

        <section className="flex flex-wrap gap-5 m-5">
          <Seachbar handler={handleSearch} search={search} />

          <Filters
            filter={filter}
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
