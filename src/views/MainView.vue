<template>

  <div class="container mt-5">

    <!-- Filters -->
    <div class="row card-title mb-4">
        <div class="col-12"><p class="small mb-0 p-0">Filter by:</p></div>

        <div class="col-4">
            <input type="text"  class="form-control" placeholder="Name">
        </div>
        
        <div class="col-4">
            <input type="text"  class="form-control" placeholder="Email">
        </div>
        
        <div class="col-4">
            <input type="text"  class="form-control" placeholder="Company">
        </div>
        
    </div>

    <!-- Loop Users  -->
    <div class="row">
        <UserCard v-for="(user, index) in users" :user="user" :key="index"/>
    </div>

    <!-- Add User  -->
    <div class="row">
        <AddUser/>
    </div>
  </div>

</template>

<script>
import UserCard from "@/components/UserCard.vue";
import AddUser from "@/components/AddUser.vue";

import UsersService from "@/services/UsersService.js";

export default {
  components: {
    UserCard,
    AddUser
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    UsersService.getUsers()
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log("fetch error:", error.response);
      });
  }
};
</script>
