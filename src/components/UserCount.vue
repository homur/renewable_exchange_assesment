<template>

  <div class="col-12 user-count">
      <h5>Number of users: {{user.count}}</h5>
  </div>

</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>
<style scoped>
</style>
