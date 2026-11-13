import { TaskCard } from "./taskcard.comp";

export function TaskContainer({ tasklist, closeHandler, deleteHandler }) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-3">
      {tasklist.map((task) => (
        <TaskCard
          key={task.id}
          name={task.name}
          description={task.description}
          priority={task.priority}
          closeTaskHandler={() => closeHandler(task)}
          removeTaskHandler={() => deleteHandler(task)}
        />
      ))}
    </div>
  );
}
