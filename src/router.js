import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from "./pages/landingPage.vue";
import SignIn from "./pages/auth/signin.vue";
import SignUp from "./pages/auth/signup.vue";
import Forgot from "./pages/auth/forgot.vue";
import ForgotCode from "./pages/auth/forgotcode.vue";
import ResetPassword from "./pages/auth/resetPassword.vue";
import Verify from "./pages/auth/verify.vue";
import VerifyCode from "./pages/auth/verifyCode.vue";
import Subscribe from "./pages/subscribe.vue";
import Checkout from "./pages/payment/index.vue";
// import Dashboard from "./pages/dashboard/index.vue";
// import Realtor from "./pages/realtor/index.vue";
import Properties from "./pages/properties/index.vue";
import Test from "./pages/test.vue";
import NotFound from "./pages/not-found.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/signin" },
    // { path: "/", redirect: "/signin" },
    { path: "/realtor", component: LandingPage },
    { path: "/signin", component: SignIn },
    { path: "/signup", component: SignUp },
    { path: "/forgot", component: Forgot },
    { path: "/forgot-code", component: ForgotCode },
    { path: "/reset-password", component: ResetPassword },
    { path: "/verify", component: Verify },
    { path: "/verifycode", component: VerifyCode },
    { path: "/subscribe", component: Subscribe },
    { path: "/checkout", component: Checkout },
    // { path: "/dashboard", component: Dashboard },
    // { path: "/realtors", component: Realtor },
    { path: "/properties", component: Properties },
    { path: "/not-found", component: NotFound },
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
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
