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
          <v-toolbar-title>{{chatroomTitle}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list
          three-line
          subheader
          id="inb"
          class="pl-10"
        >
            <div class="chat" ref="chatContainer" @scroll="scrollEvent">
              <v-row style="margin: 0px;" v-for="chat in chatList" :key="chat.messageNo">
                <v-col cols="3">
                  <div></div>
                  <p class="mb-1">{{chat.username}}</p>
                  <v-card class="mb-1">
                    <p class="ml-5 mr-5">{{chat.message}}</p>
                  </v-card>
                  <p style="font-size:0.7em; height:100%;">{{chat.crtDate | moment('YYYY-MM-DD HH:mm:ss')}}</p>
                </v-col>
              </v-row>

                <!--
              <v-list-item v-for="chat in chatList" :key="chat.messageNo">

                <v-card class="mt-1 mb-1">
                  <v-list-item-content class="ml-4 mr-4 mt-1 mb-1">
                    <v-list-item-title>{{chat.username}}</v-list-item-title>
                    <v-list-item-subtitle>{{chat.message}}</v-list-item-subtitle>
                    <v-list-item-subtitle align="bottom" style="font-size:0.7em; height:100%;">{{chat.crtDate | moment('YYYY-MM-DD HH:mm:ss')}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-card>
              </v-list-item>
                -->
            </div>
        </v-list>
      </v-card>
      <div class="pl-10 pr-10 d-flex align-center pb-10 chat-input">
        <v-text-field class="pr-6" placeholder="채팅 내용을 입력해주세요" v-model="sendMessageData.message" @keyup.enter="sendMessage">
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
    props: ["chatStatus", "chatroomid", "chatroomTitle"],
    watch: {
      chatStatus(){
        this.dialog = this.chatStatus;
        this.roomid = this.chatroomid;
        if (this.dialog == true){
          this.sendMessageData.roomid = this.roomid;
          this.enterChatRoom();
          // this.connect();
        }else{
          this.sendMessageData.roomid = "";
          this.disconnect();
        }
      },
    },
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        roomid: "",
        page:1,
        chatList:[],
        sendMessageData: {
          roomid: "",
          userId: "",
          username: "",
          message: "",
        },
        stompClient: null,
      }
    },
    methods:{
      // Component 제어부 START
      closeChat: function(){
        this.dialog = false;
        this.$emit("closeChatStatus", this.dialog);
      },
      setScrollBottom(){
        let chat = this.$refs.chatContainer;
        chat.scrollTo({top:chat.scrollHeight, behavior: 'smooth'});
      },
      scrollEvent(e){
        console.log(this.$refs.chatContainer.scrollTop)
        if (this.$refs.chatContainer.scrollTop === 0){
          console.log("더 가져와..");
        }
      },
      // Component 제어부 END
      // Validation 체크 부 START
      chkSendMessage(){
        if (this.isNull(this.sendMessageData.roomid) || this.isNull(this.sendMessageData.userId) || this.isNull(this.sendMessageData.username)){
          console.log("알 수 없는 에러로 인해, 채팅 메시지를 보낼 수 없습니다.");
          return false;
        }
        else if (this.isNull(this.sendMessageData.message))
        {
          console.log("메시지 없음.");
          return false;
        }

        return true;
      },
      // Validation 체크 부 END
      // 개발자 함수부 START
      isNull(obj){
        if (obj === undefined || obj === null || obj === ''){
          return true;
        }

        return false;
      },
      // 개발자 함수부 END
      // transaction START
      getMessages(){
        let recentMessageNo = 0;
        if (this.chatList.length == 0){
          recentMessageNo = 0;
        } else if (this.chatList.length != 0){
          recentMessageNo = this.chatList[0].messageNo;
        }

        this.$axios.get("/chat/" + this.roomid + "/" + this.page + "/" + recentMessageNo)
                    .then((res)=>{
                      this.chatList = res.data;
                      console.log("chatting 목록 가져옴");
                      console.log(this.chatList);
                    })
                    .catch((error)=>{
                      alert("채팅목록을 가져오는 중 실패하였습니다.");
                    })
                    .finally(()=>{
                      this.setScrollBottom();
                    });
      },
      connectChatRoom(){
        this.$axios.post("/chat/" + this.roomid + "/enter", this.sendMessageData)
                    .then((res) => {
                      if (res.status == 200) {
                        this.sendMessageData.userId = this.$store.state.userinfo.id;
                        this.sendMessageData.username = this.$store.state.userinfo.nickname;
                        this.connect();
                      }
                    })
                    .catch((error) => {
                      alert("채팅방 정보를 가져오는 중 실패하였습니다." + error);
                    })
                    .finally(()=>{
                    });
      },
      // transaction END
      // Socket 연결 부 START
      sendMessage(){
        if (this.chkSendMessage()){
          this.stompClient.send("/pub/chat/message", JSON.stringify(this.sendMessageData), {});
          this.sendMessageData.message = "";
        }
      },
      enterChatRoom(){
        this.getMessages();

        this.connectChatRoom();
      },
      connect(){
        const serverURL = "http://localhost:8080/chatting";
        let socket = new SockJS(serverURL);
        this.stompClient = Stomp.over(socket);

        this.stompClient.connect(
          {},
          frame => {
            this.connected = true;
            this.stompClient.subscribe("/sub/chat/room/"+this.roomid, res=>{
              this.chatList.push(JSON.parse(res.body));
              this.setScrollBottom();
            }, error=>{
              
            })

          },
          error => {
            this.connected = false;
          }
        )
      },
      disconnect(){
        // stomp client disconnect
        this.stompClient.disconnect();
      }
    },
    // Socket 연결 부 END
    mounted() {
      this.dialog = this.chatStatus;
      this.page = 0;
      // this.connect();
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