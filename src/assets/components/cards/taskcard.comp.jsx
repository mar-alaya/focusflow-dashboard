export function TaskCard({
  name,
  description,
  priority,
  isClosed,
  closeTaskHandler,
  removeTaskHandler,
}) {
  let priorityClass = "priority-low";
  let priorityLabel = "Low";

  const priorityValue = String(priority).trim().toLowerCase();

  if (priorityValue === "high" || priorityValue === "1") {
    priorityClass = "priority-high";
    priorityLabel = "High";
  } else if (
    priorityValue === "medium" ||
    priorityValue === "middle" ||
    priorityValue === "2"
  ) {
    priorityClass = "priority-medium";
    priorityLabel = "Medium";
  }
  return (
    <>
      <div
        id="taskcard"
        className={`w-full shadow-md flex justify-between p-5 rounded-md ${
          isClosed ? "closed-task" : "bg-base-100"
        }`}
      >
        <div className="flex items-center gap-5">
          <input
            type="checkbox"
            className="checkbox"
            checked={isClosed}
            onChange={closeTaskHandler}
            aria-label={`Complete task: ${name}`}
          />
          <div>
            <h3 className="text-base font-semibold text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <span className={`badge border-0 ${priorityClass}`}>
            {priorityLabel}
          </span>
          <button onClick={removeTaskHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 32 32"
            >
              <path d="M 11 2 L 11 4 L 21 4 L 21 2 L 11 2 z M 4 6 L 4 8 L 28 8 L 28 6 L 4 6 z M 7.9921875 9.875 L 6.0078125 10.125 C 6.0078125 10.125 7 18.074074 7 27 L 7 28 L 25 28 L 25 27 C 25 18.074074 25.992188 10.125 25.992188 10.125 L 24.007812 9.875 C 24.007812 9.875 23.120303 17.398914 23.042969 26 L 8.9570312 26 C 8.8796974 17.398914 7.9921875 9.875 7.9921875 9.875 z M 12.986328 10.835938 L 11.013672 11.164062 C 11.013672 11.164062 12 17.111111 12 23 L 14 23 C 14 16.888889 12.986328 10.835936 12.986328 10.835938 z M 19.013672 10.835938 C 19.013672 10.835938 18 16.888889 18 23 L 20 23 C 20 17.111111 20.986328 11.164064 20.986328 11.164062 L 19.013672 10.835938 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
