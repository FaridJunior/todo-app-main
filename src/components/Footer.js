import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => {
  return (
    <div class="todo-footer">
      <div class="items-left">
        items left <span>5</span>
      </div>

      <div class="todo-filters-wrapper desktop-only">
        <ul class="todo-filters">
          <li class="todo-filter todo-filter-active">
            <FilterLink filter="all">All</FilterLink>
          </li>
          <li class="todo-filter">
            <FilterLink filter="active">Active</FilterLink>
          </li>
          <li class="todo-filter">
            <FilterLink filter="completed">Completed</FilterLink>
          </li>
        </ul>
      </div>

      <button class="clear-complete">Clear Completed</button>
    </div>
  );
};

export default Footer;
