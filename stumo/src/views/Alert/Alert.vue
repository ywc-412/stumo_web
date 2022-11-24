<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title style="font-size:1em">
          {{$store.state.dialogMsg}}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="closeDialog(true)"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    computed: {
      checkIsOpen() {
        return this.$store.state.isOpenAlertDialog;
      }
    },
    methods: {
      closeDialog(result){
        // confirm dialog 닫기
        this.$store.state.isOpenAlertDialog = false;

        if (this.$store.state.dialogCallbackFunction != null){
          
          // 사용자 선택 결과 return
          this.$store.state.dialogCallbackFunction(result, ()=>{
            
            // callback function 실행 후 초기화
            this.$store.state.dialogCallbackFunction = null;
          });
        } 
      }
    },
    watch: {
      checkIsOpen(val){
        this.dialog = val;
      }
    },
  }
</script>