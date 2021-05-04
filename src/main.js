import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "tailwindcss/tailwind.css";
import VueTypedJs from "vue-typed-js";
import VueTilt from "vue-tilt.js";
import VuePageTransition from "vue-page-transition";
import VSwitch from "v-switch-case";

Vue.use(VSwitch);
Vue.use(VuePageTransition);
Vue.use(VueTilt);
Vue.use(VueTypedJs);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
