<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>

          <!-- 작성한 모집글 -->
          <div class="pt-16 pb-16">
            <h2 class="font-weight-bold pb-4">내 채팅</h2>
            <v-row>
              <v-col v-for="chat in chatList" :key="chat.chatId" cols="12" lg="12" md="12">
                <v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
                  <div class="card_border">
                    <v-card :color="hover ? 'white' : 'transparent'"
                            :elevation="hover ? 12 : 0"
                            flat
                            hover
                            @click="openChat(chat.chatId, chat.meetingNo)">
                      <v-card-text>
                        
                        <!-- meeting content -->
                        <div class="text-h6 font-weight-bold primary--text">
                          {{chat.content}}
                        </div>

                      </v-card-text>
                      <div class="pl-9 pt-1 pb-8">
                        <v-row class="pt-2">
                          <v-chip color="accent">+ 123</v-chip>
                        </v-row>
                      </div>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>

            </v-row>
          </div>

        </div>
      </v-col>
    </v-row>
    <Chat v-bind:chatStatus="chatStatus" v-bind:chatroomid="roomid" @closeChatStatus="closeChatStatus"/>
  </div>

</template>

<script>
import Chat from './Chat.vue';
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client/dist/sockjs.min.js'

export default {
  name: "Home",
  components: {
  },
  data(){
    return{
        chatStatus: null,
        roomid:"",
        chatList:[
        ],
        stompClientList: [],
    }
  },
  methods:{
    openChat(chatId, roomid){
      this.chatStatus = this.chatStatus == true ? false : true;
      this.roomid = roomid;
    },
    closeChatStatus(status){
      this.chatStatus = status;
    },
    getMyChatRoom(){
      this.$axios.get("/chat")
                  .then((res) => {
                    this.chatList = res.data;
                  })
                  .catch((error) => {
                    alert("채팅 목록을 가져오는 중 실패하였습니다." + error);
                  })
                  .finally(()=>{
                    //console.log("finally Test");
                    // chatlist 의 방번호를 기준으로 모두 socket 연결한다.
                    this.connectChatRoom();
                  });
    },
    connectChatRoom(){
      const serverURL = "http://localhost:8080/chatting";

      let socket = new SockJS(serverURL);
      this.chatList.forEach(chat => {
        this.connect(chat.meetingNo, socket)
      });
    },
    connect(meetingNo, socket){
        let stompListIndex = this.stompClientList.length-1;
        this.stompClientList[stompListIndex] = Stomp.over(socket);
        this.stompClientList[stompListIndex].connect(
          {},
          frame => {
            this.stompClientList[stompListIndex].subscribe("/sub/chat/room/" + meetingNo, res=>{
              console.log("-구독으로 받은 메시지 입니다.", res.body);
            }, error=>{
              
            })

          },
          error => {
            
          }
        )
    },
  },
  mounted (){
    this.chatStatus = false;
    this.getMyChatRoom();
  },
  components:{
    Chat,
  }
};
</script>

<style scoped>
  .card_border{
    border: 2px solid #e7e5e5;
    border-radius: 20px;
  }
</style>
