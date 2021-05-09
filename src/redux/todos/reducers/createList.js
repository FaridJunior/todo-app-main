import { combineReducers } from "redux";

const createList = (filter) => {
  const handleToggle = (state, action) => {
    const { result: toggledId, entities } = action.response;
    const { completed } = entities.todo[toggledId];
    const shouldUpdate =
      (!completed && filter === "completed") ||
      (completed && filter === "active");
    return shouldUpdate ? state.filter((id) => id !== toggledId) : state;
  };

  const ids = (state = [], action) => {
    switch (action.type) {
      case "FETECH_TODO_SUCCESS":
        return filter === action.filter ? action.response.result : state;
      case "ADD_TODO_SUCCESS":
        return filter !== "complated"
          ? [...state, action.response.result]
          : state;
      case "TOGGLE_TODO_SUCCESS":
        return handleToggle(state, action);
      case "REMOVE_TODO_SUCCESS":
        return state.filter((id) => id !== action.response.result);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) return state;
    switch (action.type) {
      case "FETECH_TODOS_REQUEST":
        return true;
      case "FETECH_TODO_SUCCESS":
      case "FETECH_TODOS_FAILURE":
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) return state;
    switch (action.type) {
      case "FETECH_TODOS_FAILURE":
        return action.errorMessage;
      default:
        return null;
    }
  };

  return combineReducers({ ids, isFetching, errorMessage });
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
