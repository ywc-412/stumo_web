<template>
  <div class="pb-16">
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <v-card flat color="transparent">
          <v-card-text>

            <div class="text-h4 font-weight-bold primary--text pt-4 pb-16">
                <h4>{{apply.meeting.title}}</h4>
            </div>

            <div class="pt-4">
              <h2 class="pb-5" style="color:black;">지원 제목</h2>
              <div class="text-h4 font-weight-bold primary--text pt-4 ">
                  <h5>{{apply.title}}</h5>
              </div>
            </div>
            
            <!-- 분리선 -->
            <v-divider class="my-4"></v-divider>
            <div class="pt-4 pb-4">
              <h2 class="text-h7 font-weight-medium pb-7" style="color:black;">지원 글</h2>
              <toast-viewer class="toast_index" v-bind:content="apply.content"/>
            </div>

          </v-card-text>
          <v-btn v-if="!this.$utils.isNull(apply.applyNo)" color="accent" block large>합류 확정!</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ToastViewer from '../../components/toast/ToastViewer.vue';

/* eslint-disable */ 
export default {
    components: {
        ToastViewer
                },
    data() {
        return {
          apply: {
            title: '',
            content: '',
            meeting: {
              title: ''
            }
          }
        }
    },
    mounted() {
      if (!this.$utils.isNull(this.$route.params.applyNo)){
        this.getApply(this.$route.params.applyNo);
      }
    },
    created() {},
    unmonunted() {},
    methods:{
      getApply(applyNo){
        this.$axios.get("/apply/" + applyNo)
                    .then((res) => {
                      this.apply = res.data;
                    })
                    .finally(()=>{
                      if (this.apply.isOpen === false){
                        this.updateIsOpen(applyNo);
                      }
                    });
      },
      updateIsOpen(applyNo){
        this.$axios.post("/apply/isopen/", {applyNo:applyNo})
                    .then((res) => {
                      alert(res.data);
                    })
                    .finally(()=>{

                    });
      }
    },
}
</script>

<style scoped>
  .title{
    font-size: large;
  }
</style>