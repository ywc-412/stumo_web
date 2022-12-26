<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <!-- 작성한 모집글 -->
          <v-col>
            <v-row col="2">
              <h2 class="font-weight-bold pb-4 pt-16 pr-5" v-bind:style="meetingStyle" @click="activateMeeting">작성한 모집글</h2>
              <h2 class="font-weight-bold pb-4 pt-16" v-bind:style="applyStyle" @click="activateApply">지원한 모임글</h2>
            </v-row>
          </v-col>

          
          <my-regi v-if="this.isActiveMeeting === true"/>
          <my-appl v-if="this.isActiveApply === true"/>
          <!-- 지원한 모ㅁ 
          <my-appl/>
          -->
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MyAppl from './MyAppl.vue'
import MyRegi from './MyRegi.vue'

export default {
  name: "Home",
  components:{
    MyAppl: MyAppl,
    MyRegi: MyRegi,
  },
  mounted (){
  },
  methods:{
    activateMeeting(){
      if(this.isActiveMeeting === false){
        this.isActiveMeeting = true;
        this.meetingStyle = "cursor:pointer;";

        this.isActiveApply = false;
        this.applyStyle = "cursor:pointer; color:#C6C6C6;";
      }
    },
    activateApply(){
      if(this.isActiveApply === false){
        this.isActiveApply = true;
        this.applyStyle = "cursor:pointer;";

        this.isActiveMeeting = false;
        this.meetingStyle = "cursor:pointer; color:#C6C6C6;";
      }
    }
  },
  data(){
    return{
       isActiveMeeting: true
      ,isActiveApply: false
      ,meetingStyle: "cursor:pointer;"
      ,applyStyle: "cursor:pointer; color:#C6C6C6;"
    }
  },

};
</script>
<style scoped>
</style>
