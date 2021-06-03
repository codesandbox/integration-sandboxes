import { createWebHistory, createRouter } from "vue-router";

import ComputedGetDemo from "../page/ComputedGetDemo";
import ComputedSetDemo from "../page/ComputedSetDemo";
import ComputedExpressionDemo from "../page/ComputedExpressionDemo";
import Home from "../components/Home";
import ProvideAndInjectDemo from "../components/provideinject/Page";
import ProvideAndInjectSetupDemo from "../components/provideinject-setup/Page";
import ProvideAndInjectReactiveDemo from "../components/provideinject-reactive/Page";
import ProvideAndInjectDynamicDemo from "../components/provideinject-dynamic/Page";
import lifeCycleHooks from "../components/HooksExampleComponent";

// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/computedgetdemo", component: ComputedGetDemo },
  { path: "/computedsetdemo", component: ComputedSetDemo },
  { path: "/computedexpdemo", component: ComputedExpressionDemo },
  { path: "/provideandinjectdemo", component: ProvideAndInjectDemo },
  { path: "/provideandinjectsetupdemo", component: ProvideAndInjectSetupDemo },
  {
    path: "/provideandinjectreactivedemo",
    component: ProvideAndInjectReactiveDemo
  },
  {
    path: "/provideandinjectdynamicdemo",
    component: ProvideAndInjectDynamicDemo
  },
  {
    path: "/lifeCycleHooks",
    component: lifeCycleHooks
  }
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes
});

export default router;
