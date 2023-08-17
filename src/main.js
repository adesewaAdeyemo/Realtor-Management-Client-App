import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.css";

// import axios from "axios"
// import VueAxios from "vue-axios"
import router from "./router.js"


import BaseCard from "./components/ui/BaseCard.vue"
import BaseButton from "./components/ui/BaseButton.vue"
import BaseBadge from "./components/ui/BaseBadge.vue"
import BaseSpinner from "./components/ui/BaseSpinner.vue"
import BaseDialog from "./components/ui/BaseDialog.vue"

const app = createApp(App)
// axios.defaults.baseURL= 'http://localhost:8000/api';
// axios.defaults.headers.common['token'] = '1234567890';


app.use(router)
// app.use(store)
// app.use(axios)
// app.use(VueAxios, axios)
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount('#app')
