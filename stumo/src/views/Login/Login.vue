<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 100vh">
    <v-col cols="12" md="8">
      <v-card class="py-16">
        <v-card-title class="d-flex justify-center">
          <div class="login_text">
            로그인 해주세요~!
          </div>
        </v-card-title>
        <v-card-text class="d-flex justify-center">
            <div class="d-flex justify-center">
                <v-row>
                  <a :href="kakaoLoginLink" >
                    <img style="cursor: pointer" :src="require('@/assets/img/kakao_login.png')" alt="">
                  </a>
                </v-row>
            </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
/* eslint-disable */ 
    export default {
        components: {},
        data() {
            return {
                kakaoLoginLink: "https://kauth.kakao.com/oauth/authorize?client_id=a8fcd8f59fa1106468fd27d99a1865ea&redirect_uri=http://localhost:8080/api/login/kakao&response_type=code"
            }
        },
        // methods start
        methods: {
        }
        // methods end
    }
</script>
<style scoped>
    .login_text{
        margin-bottom: 1.5em;
    }
</style>