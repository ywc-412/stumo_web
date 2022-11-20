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
                <v-col col="9" v-if="chat.userId === sendMessageData.userId">
                </v-col>
                <v-col cols="3" :align="chat.userId === sendMessageData.userId ? 'right' : 'left'" class="fadeInBottom">
                  <!--<p class="mb-1">{{chat.messageNo}}</p> 디버깅용-->
                    <p class="mb-1">{{chat.username}}</p>
                    <v-card class="mb-1">
                      <p class="ml-5 mr-5">{{chat.message}}</p>
                    </v-card>
                    <p style="font-size:0.7em; height:100%;">{{chat.crtDate | moment('YYYY-MM-DD HH:mm:ss')}}</p>
                </v-col>
              </v-row>
            </div>
        </v-list>
      </v-card>
      <div class="pl-10 pr-10 d-flex align-center pb-10 chat-input">
        <v-text-field class="pr-6" placeholder="채팅 내용을 입력해주세요" v-model="sendMessageData.message" @keypress.enter="sendMessage">
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
          // 채팅방의 채팅다이얼로그가 열리면, 채팅방의 정상적인 연결 및 메시지를 가져오기 위해 데이터들을 초기화한다.
          this.initChatRoom();
          // 채팅방에 입장한다.
          this.enterChatRoom();
        }else{
          // 채팅방이 닫히면 roomid를 초기화한다. 
          this.sendMessageData.roomid = "";
          // 채팅방의 연결을 disconnect 한다.
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
        chatTempList:[],
        isCallGetMessage: false,
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
        // 채팅창을 닫는다.
        this.dialog = false;
        this.$emit("closeChatStatus", this.dialog);
      },
      async setScrollBottom(){
        this.$nextTick(()=>{
          // 채팅창 마지막으로 스크롤을 위치시킨다.
          this.$refs.chatContainer.scrollTo({top:this.$refs.chatContainer.scrollHeight, behavior: 'smooth'});
        });
      },
      scrollEvent(e){
        // 스크롤 이동 시 이벤트 발생.
        if (this.$refs.chatContainer.scrollTop === 0){
          this.getMessages();
        }
      },
      // Component 제어부 END
      // Validation 체크 부 START
      chkSendMessage(){
        // 보내질 데이터들을 검증한다.
        if (this.isNull(this.sendMessageData.roomid) || this.isNull(this.sendMessageData.userId) || this.isNull(this.sendMessageData.username)){
          this.$dialog.alert("알 수 없는 에러로 인해, 채팅 메시지를 보낼 수 없습니다.");
          return false;
        }
        else if (this.isNull(this.sendMessageData.message)) {
          alert("보낼 메시지가 없습니다.");
          return false;
        }

        return true;
      },
      // Validation 체크 부 END
      // 개발자 함수부 START
      async initChatRoom(){
        // 채팅룸의 메시지 리스트를 초기화한다.
        this.chatList = [];
      },
      isNull(obj){
        if (obj === undefined || obj === null || obj === ''){
          return true;
        }

        return false;
      },
      async responseMessage(response){
        // subscribe가 정상적으로 완료되면 다른 사용자가 해당 룸에 메시지를 보낼때, 아래 로직을 실행한다.
        this.chatList.push(JSON.parse(response.body));
        this.setScrollBottom();
      },
      // 개발자 함수부 END
      // transaction START
      async getMessages(){
        // 메시지를 가져온다. (동기방식)
        let recentMessageNo = 0;
        // 채팅 메시지 목록이 이미 있는 경우, 메시지 목록에 있는 메시지 번호 중 가장 위에 있는 번호를 가져온다.
        if (this.chatList.length != 0){
          recentMessageNo = this.chatList[0].messageNo;
        }

        // 중복호출 방지
        if (this.isCallGetMessage === false){
          this.isCallGetMessage = true;
          this.$axios.get("/chat/" + this.roomid + "/" + this.page + "/" + recentMessageNo)
                      .then((res)=>{
                        this.chatTempList = res.data;
                        // 새로 가져온 데이터는 앞쪽부터 밀어넣는다.
                        this.chatList = [
                          ...this.chatTempList,
                          ...this.chatList
                        ]
                      })
                      .catch((error)=>{
                        this.$dialog.alert("채팅목록을 가져오는 중 실패하였습니다.");
                      })
                      .finally(()=>{
                        this.isCallGetMessage = false;
                        if (recentMessageNo === 0){
                          this.setScrollBottom();
                        }
                      });
        }
      },
      async connectChatRoom(){
        // 채팅룸에 연결하기 위해 Backend server 에 message Listener 를 추가하기 위해 api 호출 후 
        // SOCKJS로 connect (Subscribe) 한다.
        this.$axios.post("/chat/" + this.roomid + "/enter", this.sendMessageData)
                    .then((res) => {
                      if (res.status == 200) {
                        this.sendMessageData.userId = this.$store.state.userinfo.id;
                        this.sendMessageData.username = this.$store.state.userinfo.nickname;
                        this.connect();
                      }
                    })
                    .catch((error) => {
                      this.$dialog.alert("채팅방 정보를 가져오는 중 실패하였습니다." + error);
                    })
                    .finally(()=>{
                    });
      },
      // transaction END
      // Socket 연결 부 START
      async sendMessage(){
        // message를 보낸다.
        if (this.chkSendMessage()){
          this.stompClient.send("/pub/chat/message", JSON.stringify(this.sendMessageData), {});
          this.sendMessageData.message = "";
        }
      },
      async enterChatRoom(){
        // 채팅룸에 입장한다.
        // 채팅룸에 연결 후 메시지를 가져온다.
        this.connectChatRoom();
        this.getMessages();
      },
      connect(){
        // SOCK JS 연결(Subscribe)
        const serverURL = "http://localhost:8080/chatting";
        let socket = new SockJS(serverURL);
        this.stompClient = Stomp.over(socket);

        this.stompClient.connect(
          {},
          frame => {
            this.connected = true;
            this.stompClient.subscribe("/sub/chat/room/"+this.roomid
            , this.responseMessage
            , error=>{
              
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
    created(){
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
    height:95%;
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

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  .test_obj {
      position: relative;
      animation: fadeInUp 0.1s;
  }
</style>