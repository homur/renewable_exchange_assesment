<template>

  <div class="container mt-5">

    <!-- Filters -->
    <FilterUsers/>

    <!-- List Users  -->
    <div class="row">
        <UserCard v-for="(user, index) in filteredUsers" :user="user" :index="index" :filter="filter" :key="index"/>
    </div>

    <!-- Add User  -->
    <AddUser/>

  </div>

</template>

<script>
import FilterUsers from "@/components/FilterUsers.vue";
import UserCard from "@/components/UserCard.vue";
import AddUser from "@/components/AddUser.vue";

import { mapActions, mapGetters, mapState } from "vuex";

export default {
	components: {
		FilterUsers,
		UserCard,
		AddUser
	},
	methods: {
		...mapActions(["fetchUsers"])
	},
	computed: {
		mapState({
			list: 
		}),
		filteredUsers: () => {}
	},
	created() {
		this.fetchUsers();
		console.log(this.userList);
	}
};
</script>
