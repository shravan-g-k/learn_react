import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [],
    setTodos: () => {},
    addTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {},
    updateTodo: () => {},
});

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
