import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick, onTodoRemove }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          todo && (
            <Todo
              key={todo.id}
              {...todo}
              onRemove={() => {
                onTodoRemove(todo.id);
              }}
              onClick={() => {
                onTodoClick(todo.id);
              }}
            />
          )
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
};

export default TodoList;
