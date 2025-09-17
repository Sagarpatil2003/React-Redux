function counterReducers(initialState = 0, action) {
  switch (action.type) {
    case "increment":
      return initialState + 1
    case "decrement":
      return initialState - 1
    default:
      return initialState
  }
}

export default counterReducers
