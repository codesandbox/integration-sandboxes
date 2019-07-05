import React from "react";
import { connect } from "@cerebral/react";
import { state, signal } from "cerebral/tags";

export default connect(
  {
    count: state`count`,
    incremented: signal`incremented`,
    decremented: signal`decremented`
  },
  function App({ count, incremented, decremented }) {
    return (
      <div>
        <button onClick={() => decremented()}>-</button> {count} {" "}
        <button onClick={() => incremented()}>+</button>
      </div>
    );
  }
);
