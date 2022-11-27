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
              <v-col v-for="(row, idx) in meetingNowList" :key="idx" cols="12" lg="4" md="6">
              <!-- <v-col v-for="i in 6" :key="i" cols="12" lg="4" md="6"> -->
                <v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
                  <div class="card_border">
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
                          <div class="pl-4">{{row.viewCnt}}</div>
                        </v-card-text>
                        <v-card-text>
                            <v-icon>mdi-message-reply-outline</v-icon>
                          <div class="pl-4">???</div>
                        </v-card-text>
                        <v-card-text>
                            <v-icon>mdi-thumb-up-outline</v-icon>
                          <div class="pl-4">{{row.goodCnt}}</div>
                        </v-card-text>
                        <v-card-text>
                          <div class="pl-2">{{row.studyCnt}} / {{row.studyLimit}}</div>
                        </v-card-text>
                      </div>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text">
                          {{row.title}}
                        </div>

                        <div class="text-body-1 py-4">
                          {{row.content}}
                        </div>

                        <div class="d-flex align-center">
                          <div class="pl-2">{{row.user.nickname}} · {{row.crtDate}}</div>
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

        <div class="pt-4 pb-5">
          <v-row class="pt-4 justify-center">
              <v-chip type="button" color="accent" v-on:click="appendNews()"
                :disabled="this.dataFull === true"
                :class="{disabled : dataFull}"
              >
                More ({{cntMeetingList}}/{{totMeetingList}})
              </v-chip>
          </v-row>
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
    this.getHomeList();
  },
  methods: {
    getHomeList(){
      console.log('get home list');
      this.$axios.get("/meeting")
                  .then((res) => {
                    this.meetingList = res.data;

                    let dataList = []
                    for(var i=0; i<this.cntMeetingList; i++){
                      dataList.push(res.data[i]);
                    }

                    this.meetingList = res.data;
                    this.meetingNowList = dataList;
                    this.totMeetingList = this.meetingList.length;
                  })
                  .catch((error) => {
                    console.log(error);
                  })
                  .finally(()=>{
                    //console.log("finally Test");
                  })
    },
    appendNews(){
      // 전체 리스트 개수보다 노출되는 리스트 개수가 작은 경우
      if(this.cntMeetingList < this.totMeetingList){
        this.cntMeetingList += 4; // 노출 리스트 개수 4개 증가
        let data = [];
          for(var i=0; i<this.cntMeetingList; i++){
            data.push(this.meetingList[i]) // 전체 리스트 노출 리스트 개수만큼 데이터 추출하여 data 배열에 추가
        }
        this.meetingNowList = data // meetingNowList 객체에 data 배열 업데이트
        // 전체 리스트 개수와 노출되는 리스트 개수가 같으면
      }else{
        this.dataFull = true // dataFull 객체를 true 상태로 변경
        alert('더이상 데이터가 없습니다.') // 모든 데이터 출력 알림
      }
    }
  },
  data(){
    return{
      meetingList: {}, // 전체 미팅 리시트
      meetingNowList: {}, // 화면에 노출되는 미팅 리스트
      totMeetingList: 0, // 전체 미팅 리스트 수
      cntMeetingList: 100, // 화면에 노출할 미팅 리스트 수 (초기 세팅)
      dataFull: false // 전체 리스트보다 많은 리스트 호출 여부
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
