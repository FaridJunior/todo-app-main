import * as schema from "./Schema";
import { normalize } from "normalizr";
import * as api from "../../api";
import { getIsFetching } from "./reducers";

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: "FETECH_TODOS_REQUEST",
    filter,
  });

  return api.fetchTodos(filter).then(
    (response) => {
      return dispatch({
        type: "FETECH_TODO_SUCCESS",
        filter,
        response: normalize(response, schema.arrayOfTodos),
      });
    },
    (error) =>
      dispatch({
        type: "FETECH_TODOS_FAILURE",
        filter,
        errorMessage: error.message || "something go wrong",
      })
  );
};

export const addTodo = (text) => (dispatch) => {
  return api.addTodo({ text }).then((response) => {
    return dispatch({
      type: "ADD_TODO_SUCCESS",
      response: normalize(response, schema.todo),
    });
  });
};

export const toggleTodo = (id) => (dispatch) => {
  return api.toggleTodo(id).then((response) =>
    dispatch({
      type: "TOGGLE_TODO_SUCCESS",
      response: normalize(response, schema.todo),
    })
  );
};

export const removeTodo = (id) => (dispatch) =>
  api.removeTodo(id).then((response) =>
    dispatch({
      type: "REMOVE_TODO_SUCCESS",
      response: normalize(response, schema.todo),
    })
  );
