<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div class="pt-16">
            <h2 class="text-h5 font-weight-bold pb-4">지원을 기다리는 글</h2>
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
                          <div class="pl-2">Yan Lee · 22 July 2019</div>
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
  },
  data(){
    return{
    }
  }
};
</script>

<style scoped>
  .card_border{
    border: 2px solid #e7e5e5;
    border-radius: 20px;
  }
</style>
