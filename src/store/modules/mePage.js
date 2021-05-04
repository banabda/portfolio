const mePage = {
	namespaced: true,

	state: () => ({
		page: 0,
		pages: 3,
	}),

	mutations: {
		setPage(state, payload) {
			if (state.page >= 0 && state.page < 3) {
				state.page += payload;
			}
		},
	},

	getters: {
		getPage(state) {
			return state.page;
		},
	},

	actions: {
		addPage(state) {
			state.commit("setPage", 1);
		},
		subPage(state) {
			state.commit("setPage", -1);
		},
	},
};
export default mePage;
