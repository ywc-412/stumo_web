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
                    <v-col v-for="loginImg in loginImgList" :key="loginImg" cols="12" lg="6" md="6">
                        <div>
                            <img :src=loginImg.src alt="">
                        </div>
                    </v-col>
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
                loginImgList: [
                    {src: '/assets/img/kakao_login.png'}
                    ,{src: '/assets/img/google_login.png'}
                ]
            }
        },
        setup() {},
        created() {},
        mounted() {

        },
        unmonunted() {},
        methods: {}
    }
</script>
<style coped>
    .login_text{
        margin-bottom: 1.5em;
    }
</style>>