import React from "react";
import { NavLink } from "react-router-dom";
const FilterLink = ({ filter, children }) => {
  return (
    <NavLink
      className="any"
      exact
      to={filter === "all" ? "" : filter}
      activeStyle={{
        textDecoration: "none",
      }}
    >
      {children}
    </NavLink>
  );
};

export default FilterLink;
