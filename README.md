## Endless Todo List

### Description

The Endless Todo List is a simple yet powerful React application that helps you keep track of your tasks. The app allows you to add, edit, and mark tasks as completed or uncompleted. Tasks are stored locally, so you won't lose your list even after refreshing the page. The app is designed with a clean and minimalistic interface to enhance your productivity.

### Features

- **Add Tasks:** Easily add new tasks to your list.
- **Edit Tasks:** Double-click on a task to edit its text.
- **Mark Tasks as Completed:** Use the checkbox to mark tasks as completed or uncompleted.
- **Persisted State:** Tasks are saved in local storage, so your list is preserved even after a page refresh.
- **Separated Task Lists:** Tasks are separated into completed and uncompleted lists for better organization.

### Installation

To run the Endless Todo List locally, follow these steps:

1. **Prerequisites:**
   - Make sure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/endless-todo-list.git
   cd endless-todo-list
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Application:**

   ```bash
   npm start
   ```

5. **Open in Browser:**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Usage

- **Adding a Task:** Type your task in the input field and click the "ADD" button or press Enter.
- **Editing a Task:** Double-click on a task to edit its text. Click outside the input field or press Enter to save the changes.
- **Marking a Task as Completed:** Click the checkbox next to a task to mark it as completed or uncompleted.
- **Viewing Tasks:** Tasks are displayed in two lists: one for uncompleted tasks and one for completed tasks.

### Components

- **TodoApp:** The main component that manages the state and renders the todo list.
- **TodoList:** Renders the list of todo items, separated into completed and uncompleted tasks.
- **TodoItem:** Represents a single todo item with functionalities for editing and marking as completed.

### Utilities

- **localStorage.ts:** Utility functions for loading and saving the todo list to local storage.
- **todo.model.ts:** TypeScript interface for the TodoItem type.

### Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

### License

This project is licensed under the MIT License.

Feel free to modify and enhance the Endless Todo List as per your needs. Happy task managing! 🚀📝
