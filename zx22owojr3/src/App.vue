<template>
  <div id="app">
    Various scoped slot approaches that <em>should</em> all print
    <code>"Hello World!"</code>:
    <ul>
      <SlotContainer>
        <template slot-scope="msg">
          <li>
            The traditional <code>slot-scope</code> works:
            <code>"{{ msg }}"</code>
          </li>
        </template>
      </SlotContainer>
      <SlotContainer>
        <template v-slot="msg">
          <li>
            The new <code>v-slot</code> does <em>not</em> work:
            <code>"{{ msg }}"</code>
          </li>
        </template>
      </SlotContainer>
      <RuntimeCompiled />
    </ul>
  </div>
</template>

<script>
// Component that just renders out a scoped slot
const SlotContainer = {
  render() {
    return this.$scopedSlots.default("Hello World!");
  }
};

export default {
  name: "App",
  components: {
    SlotContainer,
    RuntimeCompiled: {
      components: { SlotContainer },
      template: `<SlotContainer>
      <template v-slot="msg">
        <li>The new <code>v-slot</code> does work in runtime-compiled templates: <code>"{{ msg }}"</code></li>
      </template>
    </SlotContainer>`
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.3em;
  padding: 3em;
}

code {
  font-family: "Fira Code", "Roboto Mono", Consolas, Menlo, Monaco, monospace;
  font-size: 1.75ex;
  background-color: #f5f7f9;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
}

li {
  margin: 0.5em;
}
</style>
