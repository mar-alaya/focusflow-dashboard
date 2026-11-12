import { NavBar } from "./assets/shared/navbars/navbar.comp";
import { Hero } from "./assets/shared/hero/hero.comp";
import { Stats } from "./assets/components/stats.comp";
import { useState } from "react";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  console.log(allTasks);

  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <Stats allTasks={allTasks.length} />
      </main>
    </>
  );
}

export default App;
