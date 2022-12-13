<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <!-- 작성한 모집글 -->
          <my-regi/>

          <!-- 분리선 -->
          <v-divider class="my-4"></v-divider>

          <!-- 지원한 모ㅁ -->
          <my-appl/>
          
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
  components: {
  },
  mounted (){
  },
  data(){
    return{
    }
  },
  components:{
    MyAppl: MyAppl,
    MyRegi: MyRegi,
  }

};
</script>

<style scoped>
  .card_border{
    border: 2px solid #e7e5e5;
    border-radius: 20px;
  }
</style>
