const initialState = {
    counter: 0,
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
    }
  
    return state; // default return statement if any of these conditions will not perform then return current state.
  };
  
  export default reducer;
  