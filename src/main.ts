import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import Home from './pages/Home.vue'




const routes = [
  { path: "/", component: Home },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount("#app");
