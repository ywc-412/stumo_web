<template>
  <v-app>
    <AppBar></AppBar>

    <v-container class="mt-16">
      <router-view></router-view>
    </v-container>

  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
  },
  data: () => ({
  }),
};
</script>
<style>
  .v-application {
    font-family: 'Cafe24Font', sans-serif !important;
  }

  @font-face {
    font-family:'Cafe24Font';
    src: url('fonts/Cafe24Ssurround.ttf') format('truetype');
    font-weight: 400;
  }

</style>