const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
 
  switch (action.type) {
    case "STORE_RESULT":
      return {
        ...state,
        //push() manipulates the original value, concat() returns a new array which is the older array plus the argument you add to concat.
        results: state.results.concat({ id: new Date(), value: action.state_counter }),
      };
    case "DELETE_RESULT":
      //filter() returns a new array
      const newArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: newArray,
      };
  }

  return state; // default return statement if any of these conditions will not perform then return current state.
};

export default reducer;
