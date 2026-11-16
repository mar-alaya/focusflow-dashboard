import { TaskCard } from "./taskcard.comp";

export function TaskContainer({ tasklist, closeHandler, deleteHandler }) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-3">
      {tasklist.length === 0 && (
        <p className="rounded-md bg-white p-5 text-gray-500">
          No tasks to display.
        </p>
      )}

      {tasklist.map((task) => (
        <TaskCard
          key={task.id}
          name={task.name}
          description={task.description}
          priority={task.priority}
          isClosed={task.isClosed}
          closeTaskHandler={() => closeHandler(task)}
          removeTaskHandler={() => deleteHandler(task)}
        />
      ))}
    </div>
  );
}
