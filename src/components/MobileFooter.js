import React from "react";
import FilterLink from "../containers/FilterLink";

export default function MobileFooter() {
  return (
    <div class="todo-filters-wrapper mobile-only">
      <ul class="todo-filters">
        <li class="todo-filter todo-filter-active">
          <FilterLink filter="all" href="/">
            All
          </FilterLink>
        </li>
        <li class="todo-filter">
          <FilterLink filter="active">Active</FilterLink>
        </li>
        <li class="todo-filter">
          <FilterLink filter="completed">Completed</FilterLink>
        </li>
      </ul>
    </div>
  );
}
