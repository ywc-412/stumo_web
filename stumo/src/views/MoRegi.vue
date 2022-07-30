<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
            <v-card flat color="transparent">

              <v-card-text>

                <div class="pt-4 pb-5">
                  <h3 class="text-h7 font-weight-medium pb-2">제목</h3>
                  <v-text-field label="제목을 입력해주세요." solo type="email" outlined flat ></v-text-field>
                </div>
                <div>
                  <toast-editor class="toast_index"/>
                </div>

                <v-text-field label="등록!" solo type="email" outlined flat class="pt-4"></v-text-field>
              </v-card-text>
            </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ToastEditor from '../components/toast/ToastEditor.vue';

export default {
  components: {
    ToastEditor,
  },
  data(){
    return{
    }
  }
  
};
</script>
