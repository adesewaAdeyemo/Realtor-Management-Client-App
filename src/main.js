import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import router from "./router.js"

import LandingPage from "./components/layout/LandingPage.vue"
import AuthPage from "./components/layout/AuthPage.vue"
import BaseCard from "./components/ui/BaseCard.vue"
import BaseButton from "./components/ui/BaseButton.vue"
import BaseBadge from "./components/ui/BaseBadge.vue"
import BaseSpinner from "./components/ui/BaseSpinner.vue"
import BaseDialog from "./components/ui/BaseDialog.vue"
import ProfileNav from "./components/ui/ProfileNav.vue"

const app = createApp(App)


app.use(router)
app.component("landing-page", LandingPage);
app.component("auth-page", AuthPage);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.component("profile-nav", ProfileNav);

app.mount('#app')
