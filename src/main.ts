import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';

// Define your routes
const routes = [
  { path: "/", component: Home },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for web applications
  routes,
});

// Create and mount the Vue application
const app = createApp(App);
app.use(router);
app.mount("#app");
