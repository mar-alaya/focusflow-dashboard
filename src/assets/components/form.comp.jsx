import { Button } from "../shared/buttons/button.comp";

export function Form({ handler }) {
  return (
    <form
      className="bg-base-100 m-10 p-5 rounded-md flex flex-col gap-3 justify-center shadow-2xl"
      onSubmit={handler}
    >
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Task Name</legend>
        <input
          name="task-name"
          type="text"
          className="input-name"
          placeholder="e.g. Check Emails"
          required
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Task Description</legend>
        <textarea
          name="task-description"
          className="input-description"
          placeholder="Give more details"
        ></textarea>
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Priority</legend>
        <select
          name="task-priority"
          className="input-priority"
          defaultValue="3"
        >
          <option value="3">Low</option>
          <option value="2">Middle</option>
          <option value="1">High</option>
        </select>
      </fieldset>

      <Button type="submit" className="btn-primary" text="Add +" />
    </form>
  );
}
