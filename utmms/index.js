import { app } from "hyperapp"

app({
  init: 0,
  view: state => (
    <div>
      <h1>{state}</h1>
      <button onClick={state => state - 1}>-</button>
      <button onClick={state => state + 1}>+</button>
    </div>
  ),
  node: document.getElementById("app")
})
