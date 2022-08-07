<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">

            <!-- 검색창 -->

            <div class="d-flex align-center pb-10">
              <h3 class="text-h7 font-weight-medium pr-5" style="color:black;">검색</h3>
              <v-text-field class="pr-6" 
                            placeholder="해시태그 or 제목">
              </v-text-field>
              <v-btn color="accent" >모임 찾기!</v-btn>
            </div>

            <!-- 검색창 -->

            <h2 class="text-h7 font-weight-medium pr-5 pb-4" style="color:black;">지원을 기다리는 글</h2>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" lg="4" md="6">
                <v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
                  <div
                        class="card_border">
                    <v-card
                        :color="hover ? 'white' : 'transparent'"
                        :elevation="hover ? 12 : 0"
                        flat
                        hover
                        to="/moView"
                    >
                      <div class="d-flex align-center">
                        <v-card-text>
                            <v-icon>mdi-eye-outline</v-icon>
                          <div class="pl-4">100</div>
                        </v-card-text>
                        <v-card-text>
                            <v-icon>mdi-message-reply-outline</v-icon>
                          <div class="pl-4">100</div>
                        </v-card-text>
                        <v-card-text>
                            <v-icon>mdi-thumb-up-outline</v-icon>
                          <div class="pl-4">100</div>
                        </v-card-text>
                        <v-card-text>
                          <div class="pl-2">5/100</div>
                        </v-card-text>
                      </div>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          사이드 프로젝트 하실 분 구해요! ㅎㅎㅎ
                        </div>

                        <div class="text-body-1 py-4">
                          Ultrices sagittis orci a scelerisque. Massa placerat
                          duis ultricies lacus sed turpis
                          ㅁㄴㅇ
                          ㅁㄴㅇㅁㄴㅇ
                          ㅁㄴㅇ
                          ㅁㄴㅇ
                          ㅁㄴㅇ
                        </div>

                        <div class="d-flex align-center">
                          <div class="pl-2">둔이둔이 · 2022년 12월 25일</div>
                        </div>

                        <div class="pt-4 pb-5">
                          <v-row class="pt-4">
                            <v-col v-for="i in 2" :key="i" class="flex-shrink-0" cols="auto">
                              <v-chip color="accent">#Javascript</v-chip>
                            </v-col>
                          </v-row>
                        </div>

                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  mounted (){
    this.getLoginInfo();
  },
  methods: {
    getLoginInfo(){
      this.$axios.get("/login/info", {
                                        'Access-Control-Allow-Origin' : '*',
                                        'Content-Type' : 'application/json; charset = utf-8' 
                                      })
                  .then((res) => {
                    console.log(res.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  })
                  .finally(()=>{
                    console.log("finally");
                  })
    }
  },
  data(){
    return{
    }
  },
};
</script>

<style scoped>
  .card_border{
    border: 2px solid #e7e5e5;
    border-radius: 20px;
  }
</style>
