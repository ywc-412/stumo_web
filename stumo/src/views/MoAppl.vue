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
              <v-text-field label="제목을 입력해주세요." solo type="email" outlined flat></v-text-field>
            </div>

            <!-- 분리선 -->
            <v-divider class="my-4"></v-divider>

            <div class="pt-4">
              <h2 class="text-h7 font-weight-medium" style="color:black;">연락수단</h2>
              <h4 class="text-h7 font-weight-medium pb-1" style="color:red;">* 모임 리더가 연락할 수 있도록 연락처를 기입해주세요!</h4>
              <h4 class="text-h7 font-weight-medium pb-1" style="color:red;">* 합류가 확정되면 모임 리더에게 연락처가 제공됩니다.</h4>
            
              <!-- 모집인원 START -->
              <div class="d-flex align-center">
                <h3 class="text-h7 font-weight-medium pr-5" style="color:black;">카카오톡 ID</h3>
                <v-text-field class="pr-6" 
                              placeholder="카카오톡 아이디 (정확하게 입력해주세요!)">
                </v-text-field>
              </div>
              <div class="d-flex align-center">
                <h3 class="text-h7 font-weight-medium pr-5" style="color:black;">이메일</h3>
                <v-text-field class="pr-6" 
                              placeholder="이메일 (정확하게 입력해주세요!)">
                </v-text-field>
              </div>

              <div class="">
                <div class="d-flex align-center">
                    <v-checkbox></v-checkbox>[필수] 개인정보 수집, 제3자 제공 및 이용 동의
                </div>
                <h5>
                    1. 목적 : 지원자 개인 식별, 지원의사 확인, 지원이력 확인 및 모집자에게 정보 제공
                </h5>
                <h5>
                    2. 항목 : 아이디(이메일주소), 카카오톡 아이디
                </h5>
                <h5>
                    3. 보유기간 : 모집 마감 1주일 이후 파기
                </h5>
                <h5>
                    4. 동의를 거부할 권리 및 동의를 거부할 경우의 불이익 : 위 개인정보는 필수적 정보의 수집 및 이용에 관한 동의는 모임 지원을 위하여 필수적이므로 
                    위 사항에 동의하시어야만 지원이 가능합니다. 위 개인정보의 수집 이용에 관하여는 거부하실 수 있으며, 다만 동의 하지 않을 경우 지원이 불가능합니다.
                </h5>
              </div>
              <!-- 모집인원 END -->
            </div>

            <!-- 분리선 -->
            <v-divider class="my-4"></v-divider>
            <div class="pt-4 pb-4">
              <h2 class="text-h7 font-weight-medium pb-7" style="color:black;">지원 글</h2>
              <toast-editor class="toast_index"/>
            </div>

            <v-btn color="accent" block large>지원하기!</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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