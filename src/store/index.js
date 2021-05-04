import Vue from "vue";
import Vuex from "vuex";
import mePage from "./modules/mePage";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		me: mePage,
	},
});
