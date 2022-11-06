<template>
  <v-app>
    <CommComp></CommComp>
    <AppBar></AppBar>

    <v-container class="mt-16">
      <router-view></router-view>
    </v-container>

    <notifications position="bottom left" width="100%"/>
    <confirm />
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
    CommComp: () => import("@/components/comm/commcomp.vue"),
    Confirm: () => import("@/views/Alert/Confirm.vue"),
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