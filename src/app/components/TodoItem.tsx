import React, { useState } from "react";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  updateTodoText: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  updateTodoText,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo?.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editText.trim() !== "") {
      updateTodoText(todo.id, editText);
    } else {
      setEditText(todo.text);
    }
  };

  return (
    <li className="flex items-center p-2">
      <input
        type="checkbox"
        className="accent-pink-500"
        checked={todo?.completed}
        onChange={() => toggleTodo(todo?.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-200 focus:outline-none"
        />
      ) : (
        <span
          className={`ml-2 cursor-pointer ${todo?.completed ? "line-through" : ""}`}
          onDoubleClick={handleDoubleClick}
        >
          {todo?.text}
        </span>
      )}
    </li>
  );
};

export default TodoItem;
