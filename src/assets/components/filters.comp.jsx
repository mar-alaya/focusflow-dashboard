export function Filters({ handlerAll, handlerOpen, handlerClosed, filter }) {
  function buttonClass(value) {
    if (filter === value) {
      return "btn btn-primary";
    }

    return "btn btn-outline btn-primary";
  }

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <button
        type="button"
        onClick={handlerAll}
        className={buttonClass("all")}
        aria-pressed={filter === "all"}
      >
        All Tasks
      </button>

      <button
        type="button"
        onClick={handlerOpen}
        className={buttonClass("open")}
        aria-pressed={filter === "open"}
      >
        Open
      </button>

      <button
        type="button"
        onClick={handlerClosed}
        className={buttonClass("closed")}
        aria-pressed={filter === "closed"}
      >
        Closed
      </button>
    </div>
  );
}
