<template>

  <form @submit="addUserSubmit">
    <div class="row add-card mt-4 bg-light py-4">
        <div class="col-12"><p class="small mb-0 p-0">Add user:</p></div>
        
		<div class="col-3"><input type="text" v-model="newUser.name" class="form-control" placeholder="Name"></div>
		<div class="col-3"><input type="text" v-model="newUser.email" class="form-control" placeholder="Email"></div>
		<div class="col-3"><input type="text" v-model="newUser.company" class="form-control" placeholder="Company"></div>
		<div class="col-3"><input type="submit" class="btn btn-info w-100" value="Add user"></div>
    </div>
  </form>

</template>

<script>
import { mapActions } from "vuex";

export default {
	data() {
		return {
			newUser: {}
		};
	},
	methods: {
		...mapActions(["addUser"]),
		addUserSubmit(e) {
			e.preventDefault();
			if (!this.newUser.name || !this.newUser.email || !this.newUser.company) {
				return false;
			} else {
				this.addUser(this.newUser);
				this.newUser = {};
			}
		}
	}
};
</script>
