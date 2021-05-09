import { v4 } from "node-uuid";

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: "zero todo",
      priority: "normal",
      completed: false,
    },
    {
      id: v4(),
      text: "first todo",
      priority: "normal",
      completed: true,
    },
    {
      id: v4(),
      text: "second todo",
      priority: "normal",
      completed: false,
    },
    {
      id: v4(),
      text: "first todo",
      priority: "normal",
      completed: false,
    },
  ],
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(100).then(() => {
    switch (filter) {
      case "all":
        return fakeDatabase.todos;
      case "active":
        return fakeDatabase.todos.filter((todo) => !todo.completed);
      case "completed":
        return fakeDatabase.todos.filter((todo) => todo.completed);
      default:
        throw new Error(`recive unknown filter ${filter} `);
    }
  });

export const addTodo = ({ text, priority }) =>
  delay(100).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
      priority,
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id) =>
  delay(200).then(() => {
    const todo = fakeDatabase.todos.find((t) => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });

export const removeTodo = (id) =>
  delay(200).then(() => {
    const todo = fakeDatabase.todos.find((t) => t.id === id);
    fakeDatabase.todos = fakeDatabase.todos.filter((t) => t.id !== id);
    return todo;
  });
