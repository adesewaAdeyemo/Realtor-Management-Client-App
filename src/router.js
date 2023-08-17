import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "./pages/landingPage.vue";
import LogIn from ".//pages/auth/login.vue"
// import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/realtor" },
    { path: "/realtor", component: LandingPage },
    { path: "/login", component: LogIn },
    // {
    //   path: '/coaches/:id',
    //   component: CoachDetail,
    //   props: true,
    //   children: [
    //     { path: 'contact', component: ContactCoach } // /coaches/c1/contact
    //   ]
    // },
    // { path: '/register', component: CoachRegistation },
    // { path: '/requests', component: RequestsReceived },
    { path: "/:notFound(.*)", component: LandingPage },
  ],
});

export default router;
