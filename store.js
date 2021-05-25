const { createStore } = require("redux");
const reducer = require("./myCountingReducer");

const store = createStore(reducer);

store.subscribe(() => {
  console.log("initial state of the store:", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

console.log("final state:", store.getState());
