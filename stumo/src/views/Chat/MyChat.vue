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
                            @click="openChat(chat.chatId)">
                      <v-card-text>
                        
                        <div class="text-h6 font-weight-bold primary--text">
                          사이드 프로젝트 하실 분 구해요! ㅎㅎㅎ
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
    <Chat v-bind:chatStatus="chatStatus" @closeChatStatus="closeChatStatus"/>
  </div>

</template>

<script>
import Chat from './Chat.vue';

export default {

  name: "Home",
  components: {
  },
  methods:{
    openChat(chatId){
      this.chatStatus = this.chatStatus == true ? false : true;
    },
    closeChatStatus(status){
      this.chatStatus = status;
    },
  },
  mounted (){
    this.chatStatus = false;
  },
  data(){
    return{
        chatStatus: null,
        chatList:[
          {
            chatId: 1,
          },
          {
            chatId: 2,
          }
        ],
    }
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
