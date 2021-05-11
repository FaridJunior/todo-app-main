import React from "react";
import PropTypes from "prop-types";

const Todo = ({ id, onClick, completed, text, onRemove }) => {
  return (
    <li class="todo-item">
      <div class="custom-checkbox-wrapper">
        <input type="checkbox" id={id} onClick={onClick} checked={completed} />
        <label for={id} class="custom-checkbox">
          <span class="sr-only"> check todo </span>
        </label>
      </div>
      <p
        class="todo-text"
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {" "}
        {text}
      </p>
      <button class="todo-item-delete" onClick={onRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
};

Todo.prototype = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
