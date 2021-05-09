import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../redux/todos/actions";
import TodoList from "../components/TodoList/TodoList";
import {
  getVisibleTodos,
  getIsFetching,
  getErrorMessage,
} from "../redux/todos/reducers";
import FetechError from "../components/FetechError";

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchTodos();
  }
  componentDidUpdate(prevProps) {
    // refetech todos if the filter is changed
    if (prevProps.filter !== this.props.filter) {
      this.fetchTodos();
    }
  }
  fetchTodos() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }
  render() {
    const {
      isFetching,
      todos,
      errorMessage,
      toggleTodo,
      removeTodo,
    } = this.props;

    if (isFetching && !todos.length) {
      return <p> Loading...</p>;
    }

    if (errorMessage && !todos.length) {
      console.log(errorMessage);
      return (
        <FetechError
          errorMessage={errorMessage}
          onRetry={() => this.fetchTodos()}
        />
      );
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
        onTodoRemove={removeTodo}
      />
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || "all";
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter,
  };
};

VisibleTodoList = withRouter(
  connect(mapStateToProps, {
    ...actions,
  })(VisibleTodoList)
);

export default VisibleTodoList;
