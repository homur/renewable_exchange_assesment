<template>
    <form>
        <div class="row card-title mb-4 bg-light py-4 rounded">
            <div class="col-12"><p class="small mb-0 p-0">Filter by:</p></div>
            <div class="col-4"><input v-model="filter.name" type="text" class="form-control" v-on:input="filterNameInput()" placeholder="Name"></div>
            <div class="col-4"><input v-model="filter.email" type="text" class="form-control" v-on:input="filterEmailInput()" placeholder="Email"></div>
            <div class="col-4"><input v-model="filter.company" type="text" class="form-control" v-on:input="filterCompanyInput()" placeholder="Company"></div>
        </div>
    </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {
			filter: {
				name: "",
				email: "",
				company: ""
			}
		};
	},
	methods: {
		...mapGetters(["allUsers"]),
		filterNameInput() {
			this.filter.company = "";
			this.filter.email = "";
		},
		filterEmailInput() {
			this.filter.name = "";
			this.filter.company = "";
		},
		filterCompanyInput() {
			this.filter.name = "";
			this.filter.email = "";
		}
	}
};
</script>
