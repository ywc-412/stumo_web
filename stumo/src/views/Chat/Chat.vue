<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
          
      <template v-slot:activator="{ on, attrs }">
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
          class="chat-title"
        >
          <v-btn
            icon
            dark
            @click="closeChat"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>사이드 프로젝트 하실 분 구해요 ㅎㅎ</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list
          three-line
          subheader
          id="inb"
          class="pl-10"
        >
            <div class="chat">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>둔이둔이</v-list-item-title>
                  <v-list-item-subtitle>2022.08.17 10:01</v-list-item-subtitle>
                  <v-list-item-subtitle>우리 저기 뭐냐 언제 어디서 볼까요?</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>둔이둔이</v-list-item-title>
                  <v-list-item-subtitle>2022.08.17 10:01</v-list-item-subtitle>
                  <v-list-item-subtitle>우리 저기 뭐냐 언제 어디서 볼까요?</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </div>
        </v-list>
      </v-card>
      <div class="pl-10 pr-10 d-flex align-center pb-10 chat-input">
        <v-text-field class="pr-6" 
                      placeholder="채팅 내용을 입력해주세요">
        </v-text-field>
        <v-btn color="accent" >전송!</v-btn>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: ["chatStatus"],
    watch: {
      chatStatus(){
        this.dialog = this.chatStatus;
      },
    },
    methods:{
      closeChat: function(){
        this.dialog = false;
        this.$emit("closeChatStatus", this.dialog);
      },
    },
    mounted() {
      this.dialog = this.chatStatus;
    },
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
  }
</script>


<style scoped>
  #inb{
    position: fixed;
    width:100%;
    height: 85%;
    overflow: hidden;
  }

  #inb .chat{
    width:100%;
    height:100%;
    overflow-y: auto;
  }

  .chat-input{
    position:fixed;
    bottom: 0;
    width: 100%;
  }

  .chat-title{
    background-color: #4E5D00;
  }
</style>