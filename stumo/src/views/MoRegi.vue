<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <v-card flat color="transparent">
          <v-card-text>
            <div class="pt-4">
              <h2 class="pb-5" style="color:black;">제목</h2>
              <v-text-field label="제목을 입력해주세요." solo type="email" outlined flat ></v-text-field>
            </div>

            <!-- 분리선 -->
            <v-divider class="my-4"></v-divider>

            <div class="pt-4">
              <h2 class="text-h7 font-weight-medium pb-5" style="color:black;">모집 기본정보</h2>

              <!-- 시작일, 종료일 START -->
              <div class="d-flex align-center">
                <h3 class="text-h7 font-weight-medium pb-2 pr-8" style="color:black;">시작일</h3>
                <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        :return-value.sync="s_date"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="s_date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      class="mr-7"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="s_date" no-title scrollable :max="e_date">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="s_date_search(s_date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>

                <h3 class="text-h7 font-weight-medium pr-8" style="color:black;">종료일</h3>
                <v-menu
                        ref="menu2"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :return-value.sync="e_date"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="s_date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      class="mr-7"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="e_date" no-title scrollable :max="e_date">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="e_date_search(e_date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </div>

              <!-- 시작일, 종료일 END -->

              <!-- 모집인원 START -->
              <div class="d-flex align-center">
                <h3 class="text-h7 font-weight-medium pr-5" style="color:black;">모집인원</h3>
                <v-text-field 
                              class="pr-6" 
                              placeholder="모집 인원 수" 
                              type="number" 
                              oninput="javascript: this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );">
                </v-text-field>
                <h3 class="text-h7 font-weight-medium pr-5" style="color:black;">지원제한</h3>
                <v-text-field
                              class="pr-6" 
                              placeholder="지원 제한 수 (지원자 수를 제한할 수 있어요)"
                              type="number" 
                              oninput="javascript: this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '' );">
                </v-text-field>
              </div>
              <!-- 모집인원 END -->
            </div>

            <!-- 분리선 -->
            <v-divider class="my-4"></v-divider>
            <div class="pt-4 pb-4">
              <h2 class="text-h7 font-weight-medium pb-7" style="color:black;">모집 내용</h2>
              <toast-editor class="toast_index"/>
            </div>

            <v-btn color="accent" block large>모집 시작!</v-btn>
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