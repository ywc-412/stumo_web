<template>
  <div>
    <!-- 내가 지원한 글 -->
    <div class="pt-5 pb-16">
      <v-row>
        <v-col v-for="i in 3" :key="i" cols="12" lg="12" md="6">
          <v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
            <div class="card_border">
              <v-card :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      flat
                      hover
                      to="/myAppl">
                <v-card-text>
                  <div class="text-h6 font-weight-bold primary--text">
                    사이드 프로젝트 하실 분 구해요! ㅎㅎㅎ
                  </div>

                  <div class="text-body-1 py-4">
                    Ultrices sagittis orci a scelerisque. Massa placerat
                    duis ultricies lacus sed turpis
                  </div>
                </v-card-text>
                <div class="pl-9 pt-1 pb-8">
                  <v-row class="pt-2">
                    <div class="pr-3">
                      <v-chip color="accent">모집중, 모집종료</v-chip>
                    </div>
                    <div class="pr-3">
                      <v-chip color="accent">리더가 지원글을 열람했어요!, 모임에 합류하게 되었어요!, 아쉽지만 다음에 같이 모임해요 ㅠ</v-chip>
                    </div>
                  </v-row>
                </div>
              </v-card>
            </div>
          </v-hover>
        </v-col>

      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
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
