import { Button } from "../shared/buttons/button.comp";

export function Form({ handler }) {
  return (
    <form
      className="m-0 w-72 shrink-0 bg-base-100 p-5 rounded-md flex flex-col gap-3 shadow-md"
      onSubmit={handler}
    >
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Task Name</legend>
        <input
          name="task-name"
          type="text"
          className="input-name border border-gray-300 p-2"
          placeholder="e.g. Check Emails"
          required
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Task Description</legend>
        <textarea
          name="task-description"
          className="input-description  border border-gray-300 p-2"
          placeholder="Give more details"
        ></textarea>
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Priority</legend>
        <select
          name="task-priority"
          className="input-priority border border-gray-300 p-2"
          defaultValue="3"
        >
          <option value="Low">Low</option>
          <option value="Middle">Middle</option>
          <option value="High">High</option>
        </select>
      </fieldset>

      <Button type="submit" className="primary-btn" text="Add +" />
    </form>
  );
}
