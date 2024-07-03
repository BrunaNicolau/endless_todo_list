import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { id: number; text: string; completed: boolean }[];
  toggleTodo: (id: number) => void;
  updateTodoText: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  updateTodoText,
}) => {
  const completedTodos = todos.filter((todo) => todo.completed);
  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <ul>
        {uncompletedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            updateTodoText={updateTodoText}
          />
        ))}
      </ul>
      <ul>
        {completedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            updateTodoText={updateTodoText}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
