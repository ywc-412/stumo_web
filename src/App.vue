<template>
  <div class="stumo_font">
    <nav>
      <div class="logo_bar">
        <img class="logo_img" alt="stumo logo" src="./assets/logo_tp_small.png">
        <div class="login_bar middle">
          <router-link to="/">로그인</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */ 
  export default {
    components: {},
    data() {
      return {
      }
    },
    setup() {},
    created() {},
    mounted() {},
    unmonunted() {},
    methods: {}
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
    padding: 2px;
    margin: auto;
    max-width: 1180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    padding: 0 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.login_bar{
    display: flex;
    grid-gap: 30px;
    gap: 30px;
    row-gap: 30px;
    column-gap: 30px;
    align-items: center;
    justify-content: right;
    height: 80px;
}

.main_container{
  width: 100%;
  margin: auto;
}

.logo_bar{
  width: 100%;
  height: 80px;
}

.logo_img{
  width: 20%;
  height: auto;
  float: left;
}

.stumo_font {
  font-family: 'Cafe24Ssurround', sans-serif !important;
}

@font-face {
  font-family:'Cafe24Ssurround';
  src: url('./assets/fonts/Cafe24Ssurround.ttf') format('truetype');
  font-weight: 400;
}

</style>
