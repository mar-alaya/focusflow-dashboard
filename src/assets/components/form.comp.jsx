import { Button } from "../shared/buttons/button.comp";
import { useState } from "react";

export function Form() {
  function useForm() {
    const [newTask, setNewTask] = useState({
      name: "",
      description: "",
      priority: 3,
    });

    function submitForm() {
      setNewTask({
        name: document.querySelector("#input-name").value,
        description: document.querySelector("#input-description").value,
        priority: document.querySelector("#input-priority").value,
      });
    }

    submitForm();
    console.log(newTask.name);
    return [newTask, setNewTask];
  }

  return (
    <form className="bg-base-100 m-10 p-5 rounded-md flex flex-col gap-3 justify-center shadow-2xl">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">Task Name</legend>
        <input
          type="text"
          class="input-name"
          placeholder="e.g. Check Emails"
          required
        />
      </fieldset>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">Task Description</legend>
        <textarea
          className="input-description"
          placeholder="Give more details"
        ></textarea>
      </fieldset>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">Priority</legend>
        <select class="input-priority">
          <option defaultValue={3}>Low</option>
          <option value={2}>Middle</option>
          <option value={1}>High</option>
        </select>
      </fieldset>
      <Button Onclick={useForm} className={"btn-primary"} text="Save" />
    </form>
  );
}
