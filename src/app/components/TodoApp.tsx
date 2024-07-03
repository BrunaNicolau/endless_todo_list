"use client";
import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { loadState, saveState } from "../utils/localStorage";
import type { TodoItem } from "../utils/interface/todo.model";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.body.className = "bg-charcoal-700";
    const savedTodos = loadState();
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  const addTodo = (text: string) => {
    const newTodoItem: TodoItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    saveState([...todos, newTodoItem]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
    saveState(updatedTodos);
  };

  const updateTodoText = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo,
    );
    setTodos(updatedTodos);
    saveState(updatedTodos);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 font-mono text-2xl font-bold">Todo List:</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-gray-500 py-2">
          <input
            type="text"
            className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-200 focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="flex-shrink-0 rounded border-4 border-gray-500 bg-gray-500 px-2 py-1 text-sm text-white hover:border-pink-500 hover:bg-pink-500"
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
      <br />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          updateTodoText={updateTodoText}
        />
      ) : (
        <p className="text-center text-gray-400">
          No tasks yet. Add your first task!
        </p>
      )}
    </div>
  );
};

export default TodoApp;
