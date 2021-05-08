const mePage = {
	namespaced: true,

	state: () => ({
		page: 0,
		pages: 5,
		openedPage: [false, false, false],
	}),

	mutations: {
		setPage(state, payload) {
			if (payload == -1 && state.page > 0) {
				state.page += payload;
			} else if (state.page < state.pages && payload == 1) {
				state.page += payload;
			}
			if (payload != -1 && payload != 1) {
				state.page = payload;
			}
		},
	},

	getters: {
		getPage(state) {
			return state.page;
		},
		getPageLength(state) {
			return state.pages;
		},
		getOpenedPage(state) {
			return state.openedPage;
		},
	},

	actions: {
		addPage(state) {
			state.commit("setPage", 1);
		},
		subPage(state) {
			state.commit("setPage", -1);
		},
		goToPage(state, payload) {
			state.commit("setPage", payload);
		},
	},
};
export default mePage;
