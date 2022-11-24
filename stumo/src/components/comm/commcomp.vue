<template>
  <div>
    <img v-if="isLoading === true" class="loading_bar" src="/src/assets/img/stumo_loading.gif" alt="Stumo Loading bar">
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    checkLoading() {
      return this.$store.state.isLoading;
    }
  },
  watch: {
    checkLoading(val){
      this.isLoading = val;
    }
  },
};
</script>
<style scoped>
  .loading_bar{
    display: block;
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
    transform: translate(-50%, -50%);
  }
</style>