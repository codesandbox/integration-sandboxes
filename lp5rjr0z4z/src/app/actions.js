export function increment({ state }) {
  state.set("count", state.get("count") + 1);
}

export function decrement({ state }) {
  state.set("count", state.get("count") - 1);
}
