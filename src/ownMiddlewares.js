export const logger = (store) => (next) => {
  if (!console.group) {
    return next;
  }
  return (action) => {
    console.group(action.type);
    console.log("%c prev State ", "color:darkBlue", store.getState());
    console.log(action);
    const returnValue = next(action);
    console.log("%c next state ", "color:green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

export const promise = (store) => (next) => (action) => {
  if (typeof action.then === "function") {
    return action.then((action) => next(action));
  } else {
    return next(action);
  }
};

export const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.forEach(
    (middleware) => (store.dispatch = middleware(store)(store.dispatch))
  );
};
