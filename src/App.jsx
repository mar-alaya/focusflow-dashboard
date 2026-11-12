import { NavBar } from "./assets/shared/navbars/navbar.comp";
import { Hero } from "./assets/shared/hero/hero.comp";
import { Stats } from "./assets/components/stats.comp";
import { useState } from "react";
import { Form } from "./assets/components/form.comp";
import { TaskContainer } from "./assets/components/cards/taskcard.container.comp";

function App() {
  const [allTasks, setAllTasks] = useState([
    {
      id: 0,
      name: "",
      description: "",
      priority: 3,
      status: 1,
    },
  ]);

  const openTasks = allTasks.filter((task) => task.status === 1);
  const closedTasks = allTasks.filter((task) => task.status === 2);

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
        status: 1,
      },
    ]);
  }

  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <Stats
          allTasks={allTasks.length - 1}
          openTasks={openTasks.length - 1}
          closedTasks={closedTasks.length}
        />

        <section className="dashboard-section flex gap-5">
          <Form handler={handleSubmit} />
          <TaskContainer />
        </section>
      </main>
    </>
  );
}

export default App;
