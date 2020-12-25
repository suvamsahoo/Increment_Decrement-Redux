const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  // if (action.type === 'INCREMENT') {
  //     return {
  //         counter: state.counter + 1
  //     }
  // }

  switch (action.type) {
    case "INCREMENT":
      return {
        //return a new object and update the old state.
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case "SUB":
      return {
        ...state,
        counter: state.counter - action.val,
      };
    case "STORE_RESULT":
      return {
        ...state,
        //push() manipulates the original value, concat() returns a new array which is the older array plus the argument you add to concat.
        results: state.results.concat({ id: new Date(), value: state.counter }),
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
