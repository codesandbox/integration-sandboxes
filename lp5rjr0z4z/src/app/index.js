import { Module } from "cerebral";
import * as sequences from "./sequences";

export default Module({
  state: {
    count: 0
  },
  signals: {
    incremented: sequences.increment,
    decremented: sequences.decrement
  }
});
