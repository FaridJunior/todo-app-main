import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/todos/actions";

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      class="add-todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
      }}
    >
      <div class="custom-checkbox-wrapper">
        <input type="checkbox" id="check-todo" />
        <label for="check-todo" class="custom-checkbox">
          <span class="sr-only"> check todo </span>
        </label>
      </div>

      <label for="add-todo-input" class="sr-only">
        add new todo
      </label>
      <input
        id="add-todo-input"
        type="text"
        class="add-todo-input"
        placeholder="Create a new todo..."
        autocomplete="off"
        ref={(node) => {
          input = node;
        }}
      />
    </form>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
