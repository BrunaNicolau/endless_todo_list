import type { TodoItem } from "./interface/todo.model";

export const loadState = (): TodoItem[] | undefined => {
  try {
    const serializedState = localStorage.getItem("todo");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState) as TodoItem[];
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: TodoItem[]) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todo", serializedState);
  } catch (err) {
    console.error("Could not save state");
  }
};
