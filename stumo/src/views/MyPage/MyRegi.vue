<template>
  <div>
    <!-- 작성한 모집글 -->
    <div class="pt-5 pb-16">
      <v-row>
        <v-col v-for="meeting in myMeetingList" :key="meeting.meetingNo" cols="12" lg="12" md="12">
          <v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
            <div class="card_border">
              <v-card :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      flat
                      hover
                      to="/moView">
                <v-card-text>
                  <div class="text-h6 font-weight-bold primary--text">
                    {{meeting.title}}
                  </div>
                </v-card-text>
                <div class="pl-9 pt-1 pb-8">
                  <v-row class="pt-2">
                    <v-chip color="accent">{{meeting.sttNm}}</v-chip>
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
  data(){
    return{
      myMeetingList : {}
    }
  },
  methods:{
    getMyRegi(){
      this.$axios.get("/meeting/my/1")
                  .then((res) => {
                    this.myMeetingList = res.data;
                    console.log(this.myMeetingList);
                    // this.chatList = res.data;
                  })
                  .catch((error) => {
                    this.$dialog.alert("목록을 가져오는 중 실패하였습니다." + error);
                  })
                  .finally(()=>{
                    
                  });
    }
  },
  mounted (){
    this.getMyRegi();
  },
  components:{
  }

};
</script>

<style scoped>
  .card_border{
    border: 2px solid #e7e5e5;
    border-radius: 20px;
  }
</style>
