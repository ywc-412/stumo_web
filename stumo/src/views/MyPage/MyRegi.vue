<template>
  <div>
    <!-- 작성한 모집글 -->
    <div class="pt-16 pb-16">
      <h2 class="font-weight-bold pb-4">작성한 모집글</h2>
      <v-row>
        <v-col v-for="i in 3" :key="i" cols="12" lg="12" md="12">
          <v-hover v-slot:default="{ hover }" close-delay="50" open-delay="50">
            <div class="card_border">
              <v-card :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      flat
                      hover
                      to="/moView">
                <v-card-text>
                  <div class="text-h6 font-weight-bold primary--text">
                    사이드 프로젝트 하실 분 구해요! ㅎㅎㅎ
                  </div>

                  <div class="text-body-1 py-4">
                    Ultrices sagittis orci a scelerisque. Massa placerat
                    duis ultricies lacus sed turpis
                  </div>
                </v-card-text>
                <div class="pl-9 pt-1 pb-8">
                  <v-row class="pt-2">
                    <v-chip color="accent">작성중, 모집중, 모집종료</v-chip>
                  </v-row>
                </div>
              </v-card>
            </div>
          </v-hover>
        </v-col>

        <v-pagination total-visible="5" length="7"/>

      </v-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data(){
    return{
    }
  },    
  methods:{
    getMyRegi(){
      
    }
  },
  mounted (){

  },
  components:{
  }

};
</script>

<style scoped>
  .card_border{
    border: 2px solid #e7e5e5;
    border-radius: 20px;
  }
</style>
