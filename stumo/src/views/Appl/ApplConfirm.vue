<template>
  <div class="pb-16">
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <v-card flat color="transparent">
          <v-card-text>

            <div class="text-h4 font-weight-bold primary--text pt-4 pb-16">
                <h4>사이드 프로젝트 하실 분 구해요! ㅎㅎㅎ</h4>
            </div>

            <div class="pt-4">
              <h2 class="pb-5" style="color:black;">지원 제목</h2>
              <div class="text-h4 font-weight-bold primary--text pt-4 ">
                  <h5>사이드 프로젝트 지원해요!</h5>
              </div>
            </div>
            
            <!-- 분리선 -->
            <v-divider class="my-4"></v-divider>
            <div class="pt-4 pb-4">
              <h2 class="text-h7 font-weight-medium pb-7" style="color:black;">지원 글</h2>
              <toast-viewer class="toast_index"/>
            </div>

          </v-card-text>

          <v-btn color="accent" block large>합류 확정!</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ToastViewer from '../../components/toast/ToastViewer.vue';

/* eslint-disable */ 
export default {
    components: {
        ToastViewer
                },
    data() {
        return {
          date: new Date().toISOString().substr(0, 10),
          s_date: new Date().toISOString().substr(0, 10),
          e_date: new Date().toISOString().substr(0, 10),
          menu1: false,
          menu2: false
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmonunted() {},
}
</script>

<style scoped>
  .title{
    font-size: large;
  }
</style>