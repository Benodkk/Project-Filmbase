const initialState = [];

function likeIt(thing) {
  return {
    type: "CHANGE_MONEY",
    payload: thing,
  };
}

export { likeIt };

export function likeReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_MONEY":
      return state + action.payload;
    default:
      return state;
  }
}
