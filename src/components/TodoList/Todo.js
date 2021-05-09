import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, onRemove }) => {
  return (
    <li>
      <p
        onClick={onClick}
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </p>
      <button style={{ padding: "5px", fontSize: "16px" }} onClick={onRemove}>
        remove
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
