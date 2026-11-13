export function Filters(handlerAll, handlerOpen, handlerClosed) {
  return (
    <div className="flex gap-5 items-center">
      <button onClick={handlerAll} class="btn btn-outline btn-primary">
        All Tasks
      </button>
      <button onClick={handlerOpen} class="btn btn-outline btn-primary">
        Open
      </button>
      <button onClick={handlerClosed} class="btn btn-outline btn-primary">
        Closed
      </button>
    </div>
  );
}
