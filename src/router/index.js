//we are importing the vue-router library.
import { createRouter, createWebHistory } from "vue-router";

//import a component we’ll use in our routes:
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue";
import About from "../views/About.vue";

//we use this route:
const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event/:id", //the syntax for a dynamic segment begins with a colon :
    name: "EventDetails",
    props: true,//added props: true here to give the EventDetails component access to this dynamic segment parameter as a prop.
    component: EventDetails,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
