import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "./pages/landingPage.vue";
import SignIn from "./pages/auth/signin.vue";
import SignUp from "./pages/auth/signup.vue";
import Verify from "./pages/auth/verify.vue";
import Subscribe from "./pages/subscribe.vue";
import Test from "./pages/test.vue";

// import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/realtor" },
    { path: "/realtor", component: LandingPage },
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp },
    { path: "/verify", component: Verify },
    { path: "/subscribe", component: Subscribe },
    { path: "/test", component: Test },
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
