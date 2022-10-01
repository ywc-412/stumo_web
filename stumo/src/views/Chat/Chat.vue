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
                      placeholder="채팅 내용을 입력해주세요" v-model="sendMessageData.chatMessage">
        </v-text-field>
        <v-btn color="accent" @click="sendMessage" >전송!</v-btn>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
  import Stomp from 'webstomp-client'
  import SockJS from 'sockjs-client/dist/sockjs.min.js'

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
      sendMessage(){
        this.$axios.get("/chat/message")
                    .then((res) => {
                      this.chatList = res.data;
                    })
                    .catch((error) => {
                      console.log(error);
                    })
                    .finally(()=>{
                      //console.log("finally Test");
                    });
      },
      connect(){
          const serverURL = "http://localhost:8080/api/chat";
          let socket = new SockJS(serverURL);
          this.stompClient = Stomp.over(socket);

          console.log("소켓 연결을 시도.. 서버 주소는 " + serverURL);

          this.stompClient.connect(
            {},
            frame => {
              this.connected = true;
              console.log("소켓 연결 성공 " + frame);

              this.stompClient.subscribe("/api/chat/send", res=>{
                alert(1);
                console.log("구독으로 받은 메시지 입니다.", res.body);
                
              }, error=>{
                console.log(111);
              })

            },
            error => {
              console.log("소켓 연결 실패", error);
              this.connected = false;
            }
          )


      },
    },
    mounted() {
      this.dialog = this.chatStatus;
      this.connect();
    },
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        sendMessageData: {
          chatId: 1,
          chatMessage: "",
        },
        stompClient: null,
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