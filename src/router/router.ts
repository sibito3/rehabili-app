import { RouteRecordRaw, createRouter,  createWebHistory} from "vue-router";
import AboutVue from "@/components/AboutVue.vue";
import MainComponent from "@/components/MainComponent.vue";

const routes: Array<RouteRecordRaw> = [
    {path: '/', name: 'main', component: MainComponent},
    {path: '/about', name: 'about', component: AboutVue, props: {msg: 'Welcome to Your Vue.js + TypeScript App'}},
    {path: '/:pathMatch(.*)*', name: 'unknownPath', redirect: {name: 'main'}}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;