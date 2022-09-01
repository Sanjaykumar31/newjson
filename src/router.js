import Vue from "vue";
import VueRouter from "vue-router";
import student from './components/student.vue'
import students from './components/students.vue'

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "Grid",
        component: students,
    },
    {
      path: "/form",
      name: "Form",
      component: student,
  }
];

const router = new VueRouter({
    routes,
});

export default router;