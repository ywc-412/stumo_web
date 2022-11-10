<template>
  <v-app>
    <CommComp></CommComp>
    <AppBar></AppBar>

    <v-container class="mt-16">
      <router-view></router-view>
    </v-container>

    <!-- 전역 공통 컴포넌트 Import -->
    <notifications position="bottom left" width="100%"/>
    <confirm style="display: none"/>
    <alert style="display: none"/>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
    CommComp: () => import("@/components/comm/commcomp.vue"),
    Confirm: () => import("@/views/Alert/Confirm.vue"),
    Alert: () => import("@/views/Alert/Alert.vue"),
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