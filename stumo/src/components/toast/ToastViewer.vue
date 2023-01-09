<template>
  <div>
    <viewer ref="toastViewer" />
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/vue-editor";

export default {
  props: ["content"],
  components: {
    'viewer': Viewer
  },
  watch: {
    content(){
      this.viewerContent = this.content;
      this.setContent(this.viewerContent);
    },
  },
  methods: {
    setContent(content){
      this.$refs.toastViewer.invoke('setMarkdown', content);
    }
  },
  data(){
    return{
      viewerContent: '',
    }
  },
  mounted(){
    this.viewerContent = this.content;
  },
};
</script>

<style scoped>
  .toast_index{
    z-index: -99;
  }
</style>