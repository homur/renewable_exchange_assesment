import UsersService from "@/services/UsersService.js";

const state = {
	newUser: {},
	userList: [],
	filteredUsers: []
};

const getters = {
	allUsers: (state) => state.userList
};

const mutations = {
	setUsers: (state, userList) => (state.userList = userList),
	addUser: (state, newUser) => {
		state.userList.unshift(newUser);
		/* API POST GOES HERE */
	},
	removeUser: (state, id) => {
		state.userList.splice(id, 1);
	}
};

const actions = {
	async fetchUsers({ commit }) {
		UsersService.getUsers().then((res) => {
			commit("setUsers", res.data);
		});
	},
	addUser({ commit }, newUser) {
		commit("addUser", newUser);
	},
	removeUser({ commit }, id) {
		commit("removeUser", id);
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
