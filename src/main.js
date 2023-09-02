import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import router from "./router.js"

import LandingPage from "./components/layout/LandingPage.vue";
import AuthPage from "./components/layout/AuthPage.vue"
import BaseCard from "./components/ui/BaseCard.vue"
import BaseButton from "./components/ui/BaseButton.vue"
import BaseBadge from "./components/ui/BaseBadge.vue"
import BaseSpinner from "./components/ui/BaseSpinner.vue"
import BaseDialog from "./components/ui/BaseDialog.vue"
import ProfileNav from "./components/ui/ProfileNav.vue";
import HeroPage from "./components/layout/HeroPage.vue";
import HeroNav from "./components/ui/HeroNav.vue";
import BarChart from "./components/ui/BarChat.vue";
import DoughnutChart from "./components/ui/DoughnutChart.vue";
import MyTable from "./components/ui/table.vue";

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
app.component("hero-page", HeroPage);
app.component("hero-nav", HeroNav);
app.component("bar-chart", BarChart);
app.component("doughnut-chart", DoughnutChart);
app.component("my-table", MyTable);

app.mount('#app')
