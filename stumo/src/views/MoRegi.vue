<template>
  <div>
    <!-- <form @submit.prevent="submitForm"> -->
      <v-row>
        <v-col cols="12" lg="12" xl="8">
          <v-card flat color="transparent">
            <form v-on:submit="onSubmitForm">
              <v-card-text>
                <div class="pt-4">
                  <h2 class="pb-5" style="color:black;">제목</h2>
                  <v-text-field label="제목을 입력해주세요." v-model="title" solo outlined flat ></v-text-field>
                </div>

                <!-- 분리선 -->
                <v-divider class="my-4"></v-divider>

                <div class="pt-4">
                  <h2 class="text-h7 font-weight-medium pb-5" style="color:black;">모집 기본정보</h2>

                  <!-- 시작일, 종료일 START -->
                  <div class="d-flex align-center">
                    <h3 class="text-h7 font-weight-medium pr-8" style="color:black;">시작일</h3>
                    <v-menu
                            ref="menu1"
                            v-model="meeting_start_date"
                            :close-on-content-click="false"
                            :return-value.sync="meeting_start_date"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="meeting_start_date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          class="mr-7"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="meeting_start_date" no-title scrollable :max="meeting_finish_date">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="s_date_search(meeting_start_date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>

                    <h3 class="text-h7 font-weight-medium pr-8" style="color:black;">종료일</h3>
                    <v-menu
                            ref="menu2"
                            v-model="menu2"
                            :close-on-content-click="false"
                            :return-value.sync="meeting_finish_date"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="meeting_finish_date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          class="mr-7"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="meeting_finish_date" no-title scrollable :min="meeting_start_date" :max="date">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="e_date_search(meeting_finish_date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </div>
                  <!-- 시작일, 종료일 END -->



                  <!-- 모집인원 START -->
                  <div class="d-flex align-center">
                    <h3 class="text-h7 font-weight-medium pr-5" style="color:black;">모집인원</h3>
                    <v-text-field 
                                  class="pr-6" 
                                  placeholder="지원자들에게 모집 인원 수를 알려주세요!" 
                                  type="number"
                                  v-model="studyCnt"
                                  oninput="javascript: this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );">
                    </v-text-field>
                    <h3 class="text-h7 font-weight-medium pr-5" style="color:black;">지원제한</h3>
                    <v-text-field
                                  class="pr-6" 
                                  placeholder="지원 제한 수 (지원자 수를 제한할 수 있어요)"
                                  type="number"
                                  v-model="studyLimit"
                                  oninput="javascript: this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );">
                    </v-text-field>
                  </div>
                  <!-- 모집인원 END -->

                  <!-- 모집게시일 -->
                  <div class="d-flex align-center">
                    <h3 class="text-h7 font-weight-medium pr-8" style="color:black;">모집 게시일</h3>
                    <v-menu
                            ref="menu3"
                            v-model="menu3"
                            :close-on-content-click="false"
                            :return-value.sync="posting_start_date"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="posting_start_date"
                                      prepend-icon="mdi-calendar"
                                      readonly
                                      v-bind="attrs"
                                      v-on="on"
                                      class="mr-7"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="posting_start_date" no-title scrollable :max="posting_finish_date">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="posting_start_date_search(posting_start_date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                    <h4 class="text-h7 font-weight-medium" style="color:red;">* 모집 게시일 오후 12시에 게시됩니다. (당일 모집은 즉시 게시)</h4>
                  </div>
                  <!-- 모집게시일 -->

                  <!-- 모집종료일 -->
                  <div class="d-flex align-center">
                    <h3 class="text-h7 font-weight-medium pr-8" style="color:black;">모집 종료일</h3>
                    <v-menu
                            ref="menu4"
                            v-model="menu4"
                            :close-on-content-click="false"
                            :return-value.sync="posting_finish_date"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="posting_finish_date"
                                      prepend-icon="mdi-calendar"
                                      readonly
                                      v-bind="attrs"
                                      v-on="on"
                                      class="mr-7"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="posting_finish_date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu4 = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="posting_finish_date_search(posting_finish_date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                    <h4 class="text-h7 font-weight-medium" style="color:red;">* 모집 종료일 오후 12시에 모집 종료됩니다. (종료일 이후 지원 받을 수 없어요!)</h4>
                  </div>
                  <!-- 모집게시일 -->

                  <!-- 모집인원 START -->
                  <div class="d-flex align-center">
                    <h3 class="text-h7 font-weight-medium pr-5" style="color:black;">해시태그</h3>
                    <v-col v-for="i in 6" :key="i" >
                      <v-text-field class="pr-2" 
                                    placeholder="해시태그">
                      </v-text-field>
                    </v-col>
                    <h4 class="text-h7 font-weight-medium" style="color:red;">* # 은 빼고 입력해주세요.</h4>
                  </div>
                  <!-- 모집인원 END -->

                </div>

                <!-- 분리선 -->
                <v-divider class="my-4"></v-divider>
                <div class="pt-4 pb-4">
                  <h2 class="text-h7 font-weight-medium pb-7" style="color:black;">모집 내용</h2>
                  <div class="pb-2">
                    <h5 class="text-h7 font-weight-medium" style="color:red;">* 지원자에게 혼선을 주지 않기 위해 모임 장소(위치) 및 온/오프라인 여부를 꼭 적어주세요.</h5>
                  </div>
                  <toast-editor ref="toastEditor" class="toast_index"/>
                </div>

                <!-- <v-btn color="accent" v-on:click="writeProcess()" block large>모집 시작!</v-btn> -->
                <v-btn color="accent" type = "submit" v-on:click="writeProcess()" block large>모집 시작!</v-btn>
              </v-card-text>
            </form>
          </v-card>
        </v-col>
      </v-row>
    <!-- </form> -->
  </div>
</template>

<script>
import ToastEditor from '../components/toast/ToastEditor.vue';

/* eslint-disable */ 
export default {
    components: {
                  ToastEditor
                },
    data() {
        return {
          date: new Date().toISOString().substr(0, 10),
          meeting_start_date: new Date().toISOString().substr(0, 10),
          meeting_finish_date: new Date().toISOString().substr(0, 10),
          posting_start_date: new Date().toISOString().substr(0, 10),
          posting_finish_date: new Date().toISOString().substr(0, 10),
          menu1: false,
          menu2: false,
          menu3: false,
          menu4: false
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmonunted() {},
    methods: {
      s_date_search(v) {
        // 시작일
        this.meeting_start_date = v;
        alert(this.meeting_start_date);
        this.menu1 = false;
        this.$refs.menu1.save(v);
      },
      e_date_search(v) {
        // 종료일
        this.meeting_finish_date = v;
        alert(this.meeting_finish_date);
        this.menu2 = false;
        this.$refs.menu2.save(v);
      },
      posting_start_date_search(v){
        // 모집 시작일
        this.posting_start_date = v;
        alert(this.posting_start_date);
        this.menu3 = false;
        this.$refs.menu3.save(v);
      },
      posting_start_date_search(v){
        // 모집 종료일
        this.posting_finish_date = v;
        alert(this.posting_finish_date);
        this.menu4 = false;
        this.$refs.menu4.save(v);
      },
      writeProcess: function(){
        // alert('제목 : ' + this.title);
        // alert('시작일 : ' + this.meeting_start_date);
        // alert('종료일 : ' + this.meeting_finish_date);
        // alert('모집인원 : ' + this.studyCnt);
        // alert('모집제한 : ' + this.studyLimit);
        // alert('모집개시일 : ' + this.posting_start_date);
        // alert('모집종료일 : ' + this.posting_finish_date);

        alert('a');
        alert('내용 : ' + this.$refs.toastEditor.getContent());
        alert('b');

        // let startDate = new Date(this.meeting_start_date);
        // let finishDate = new Date(this.meeting_finish_date);

        // let postStartDate = new Date(this.posting_start_date);
        // let postFinishDate = new Date(this.posting_finish_date);

        // let form = new FormData()
        // form.append('title', this.title)
        // form.append('meetingStartDate', startDate)
        // form.append('meetingFinishDate', finishDate)
        // form.append('studyCnt', this.studyCnt)
        // form.append('studyLimit', this.studyLimit)
        // form.append('postingStartDate', postStartDate)
        // form.append('postingFinishDate', postFinishDate)

        // 달력 뜨게 하기
        // CreateBy 안댐
        // 내용 왜 안가져와지냐
        // 해시태그 어케 하냐

        // this.$axios.post('/meeting/register', form)
        //   .then(res=>{console.log(res)})
        //   .catch(err=>{
        //     console.log('register error');
        //     console.log(err)});

      },
      onSubmitBtn(e){
        // e.preventDefault();
        alert('hi');
      }
    }
}
</script>

<style scoped>
  .title{
    font-size: large;
  }
</style>