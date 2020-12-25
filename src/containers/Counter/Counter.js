import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  // state = {
  //   counter: 0,
  // };

  // counterChangedHandler = (action, value) => {
  //   switch (action) {
  //     case "inc":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + 1 };
  //       });
  //       break;
  //     case "dec":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - 1 };
  //       });
  //       break;
  //     case "add":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter + value };
  //       });
  //       break;
  //     case "sub":
  //       this.setState((prevState) => {
  //         return { counter: prevState.counter - value };
  //       });
  //       break;
  //   }
  // };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {this.props.storeResults.map((strResult) => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
              style={{cursor:"pointer", border: "1px solid red", display: "inline-block", margin:"2px", padding:"4px" }}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //redux state
  return {
    ctr: state.counter_Reducer.counter,
    storeResults: state.result_Reducer.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }), //action
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD", val: 5 }),
    onSubCounter: () => dispatch({ type: "SUB", val: 5 }),

    onStoreResult: (result) => dispatch({ type: "STORE_RESULT", state_counter: result }),
    onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
