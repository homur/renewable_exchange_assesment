<template>

	<div class="col-12 p-4 mb-2 user-card bg-dark text-info rounded">

		<div class="row">
			<div class="col-4 user-col name">{{ user.name }}</div>
			<div class="col-4 user-col email">{{ user.email }}</div>
			<div class="col-3 user-col company">{{ user.company }}</div>
			<div class="col-1 p-0 user-col delete-user">
				<button @click="removeUserClick(index)" type="button" class="btn btn-danger">
					<b-icon-trash></b-icon-trash>
				</button>
			</div>
		</div>

	</div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "UserCard",
	props: {
		user: Object,
		index: ""
	},
	computed: {
		...mapGetters(["allUsers"])
	},
	methods: {
		...mapActions(["removeUser"]),
		removeUserClick(index) {
			this.removeUser(index);
		}
	}
};
</script>
<style scoped>
.user-card .user-col {
	height: 40px;
	line-height: 40px;
}
</style>
