import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import './assets/styles.css';
import SearchResults from "./pages/SearchResults.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const routes = [
    { path: "/", component: Home },
    { path: "/search", component: SearchResults },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.mount("#app");
