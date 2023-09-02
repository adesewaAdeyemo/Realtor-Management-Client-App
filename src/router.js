import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "./pages/landingPage.vue";
import SignIn from "./pages/auth/signin.vue";
import SignUp from "./pages/auth/signup.vue";
import Verify from "./pages/auth/verify.vue";
import VerifyCode from "./pages/auth/verifyCode.vue";
import Subscribe from "./pages/subscribe.vue";
import Dashboard from "./pages/dashboard/index.vue";
import Realtor from "./pages/realtor/index.vue";
import Test from "./pages/test.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/realtor" },
    { path: "/realtor", component: LandingPage },
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp },
    { path: "/verify", component: Verify },
    { path: "/verifycode", component: VerifyCode },
    { path: "/subscribe", component: Subscribe },
    { path: "/dashboard", component: Dashboard },
    { path: "/realtors", component: Realtor },
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
