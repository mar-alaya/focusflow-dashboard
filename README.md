# FocusFlow

## Description

FocusFlow is a task manager developed as my first React Basics project.

Users can create tasks with a name, description and priority, mark them as completed, reopen them and delete them. A dashboard shows the total number of tasks, open tasks and completed tasks.

Tasks can be filtered by status and searched by name. The search and filters work together without changing the original task list. Tasks are saved in the browser using localStorage, so they remain available after refreshing the page.

## Features

- Create tasks with a name, description and priority.
- Validate task names and reset the form after submission.
- Mark tasks as completed and reopen them.
- Delete individual tasks.
- Filter tasks by status: all, open or completed.
- Search tasks by name, ignoring uppercase and lowercase.
- Combine the search with the selected status filter.
- Dynamic statistics calculated from the complete task list.
- Different colours for high, medium and low priorities.
- Grey background and crossed-out titles for completed tasks.
- Automatic browser storage through a custom React hook.
- Message displayed when there are no tasks to show.

## Technologies

- React
- Vite
- JavaScript (ES modules)
- HTML and CSS
- Tailwind CSS
- DaisyUI
- Browser localStorage

## Design

- Visual style inspired by the FocusFlow website.
- Blue, turquoise and lavender gradient background.
- Violet buttons and colour-coded priority badges.
- Layout built with Flexbox and Tailwind CSS.
- Reusable components for the form, cards, filters and statistics.

## What I Learned

- Divide an application into functional React components.
- Pass data and functions between components using props.
- Manage changing data with useState.
- Handle form submissions, button clicks and checkbox changes.
- Use map to display tasks and update individual objects.
- Use filter to delete tasks and select which tasks to display.
- Update arrays and objects without directly modifying the state.
- Calculate statistics from existing data.
- Apply conditional styles based on task status.
- Create a custom hook using useState and useEffect.
- Save and load browser data with localStorage and JSON.
- Debug event handlers and props passed between components.

## Installation

Install the project dependencies:

npm install

Start the development server:

npm run dev

Open the local URL shown in the terminal.

## Storage

Tasks are saved in the current browser under the key `focusflow-tasks`.

They are not synchronised between devices or browsers. Clearing the site's browser storage removes the saved tasks.

## Author

**Mar Alaya Melia**  
Software Development project at Digital Career Institute (DCI).
