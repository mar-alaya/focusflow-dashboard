import { NavBar } from "./assets/shared/navbars/navbar.comp";
import { Hero } from "./assets/shared/hero/hero.comp";
import { Stats } from "./assets/components/stats.comp";
import { useState } from "react";
import { Form } from "./assets/components/form.comp";

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

  console.log(allTasks);

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

        <section className="dashboard-section flex">
          <Form />
        </section>
      </main>
    </>
  );
}

export default App;
