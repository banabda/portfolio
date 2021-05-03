import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "tailwindcss/tailwind.css";
import VueTypedJs from "vue-typed-js";
import VueTilt from "vue-tilt.js";

Vue.use(VueTilt);
Vue.use(VueTypedJs);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
