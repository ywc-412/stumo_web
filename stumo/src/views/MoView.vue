<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card flat color="transparent">

              <v-card-text>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>사이드 프로젝트 하실 분 구해요! ㅎㅎㅎ</h4>
                </div>
                <div class="d-flex align-center justify-space-between py-4">
                  <div class="d-flex align-center">
                    <div class="pl-2 text-body-1">둔이둔이 - 2022.07.25</div>
                  </div>

                  <div class="d-flex align-center">
                    <div>
                      <v-chip small color="transparent">
                        <v-icon left>mdi-eye</v-icon>1.4k
                      </v-chip>

                      <v-chip small color="transparent">
                        <v-icon left>mdi-message-reply-outline</v-icon>7 Comment
                      </v-chip>

                      <v-chip small color="transparent">
                        <v-icon left>mdi-thumb-up-outline</v-icon>7 Comment
                      </v-chip>
                      
                      <v-chip small color="transparent">
                        <v-icon left>mdi-email-fast-outline</v-icon>5/100
                      </v-chip>
                    </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>
                <div>
                  <toast-viewer class="toast_index"/>
                </div>

              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>

      <v-col>
        <div>
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ToastViewer from '../components/toast/ToastViewer.vue';

export default {
  components: {
    ToastViewer,
    siderbar: () => import("@/components/details/sidebar")
  },
  data(){
    return{
    }
  }
  
};
</script>
