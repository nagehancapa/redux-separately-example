const initialState = 0;

function myCountingReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    default: {
      return state;
    }
  }
}

module.exports = myCountingReducer;

// predict: what will be console logged?
console.log(myCountingReducer(undefined, {}));

console.log(myCountingReducer(0, { type: "ADD", payload: 5 }));

console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));

console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));
