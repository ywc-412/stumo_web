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
        <v-card-title class="text-h6">
          {{$store.state.dialogMsg}}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="closeDialog"
          >
            확인
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="closeDialog"
          >
            취소
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
        return this.$store.state.isOpenDialog;
      }
    },
    methods: {
      closeDialog(){
        this.$store.state.isOpenDialog = false;
      }
    },
    watch: {
      checkIsOpen(val){
        this.dialog = val;
      }
    },
  }
</script>