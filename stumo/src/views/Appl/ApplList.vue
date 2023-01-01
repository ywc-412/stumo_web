<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>

          <div class="text-h4 font-weight-bold primary--text pt-16">
            <h4>사이드 프로젝트 하실 분 구해요! ㅎㅎㅎ</h4>
          </div>

          <!-- 지원된 모집글 -->
          <div class="pt-16 pb-16">
            <div class="pb-6">
              <h2 class="font-weight-bold">지원글</h2>
              <h5 class="text-h7 font-weight-medium" style="color:red;">* 열람시 지원자는 열람여부를 확인할 수 있어요.</h5>
              <h5 class="text-h7 font-weight-medium" style="color:red;">* 지원자들이 소중한 시간을 내어 작성한 글입니다. 신중히 확인 후 모임 합류를 확정해주세요.</h5>
              <h5 class="text-h7 font-weight-medium" style="color:red;">* 모집종료 시 합류 확정되지 않은 지원자는 합류여부를 확인할 수 있어요.</h5>
            </div>
            <v-row>
              <v-col v-for="i in 3" :key="i" cols="12" lg="12" md="12">
                <v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
                  <div class="card_border">
                    <v-card :color="hover ? 'white' : 'transparent'"
                            :elevation="hover ? 12 : 0"
                            flat
                            hover
                            to="/applConfirm">
                      <v-card-text>
                        <div class="text-h6 font-weight-bold primary--text">
                          지원했어요!
                        </div>
                        <div class="text-body-1 py-4">
                          Ultrices sagittis orci a scelerisque. Massa placerat
                          duis ultricies lacus sed turpis
                        </div>
                      </v-card-text>

                      <div class="pl-9 pt-1 pb-8">
                        <v-row class="pt-2">
                          <div class="pr-3">
                            <v-chip color="accent">미열람</v-chip>
                          </div>
                          <div class="pr-3">
                            <v-chip color="accent">합류확정, 합류대기</v-chip>
                          </div>
                        </v-row>
                      </div>

                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>
          <!-- 지원된 모집글 -->

        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  mounted (){
    this.getApplyList(this.$route.params.meetingNo);
  },
  methods:{
    getApplyList(meetingNo){
      this.$axios.get("/apply/" + meetingNo)
                  .then((res) => {
                    alert(res);
                    // this.chatList = res.data;
                  })
                  .catch((error) => {
                    this.$dialog.alert("목록을 가져오는 중 실패하였습니다." + error);
                  })
                  .finally(()=>{
                    
                  });
    }
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
