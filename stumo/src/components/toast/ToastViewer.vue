<template>
  <div>
    <viewer ref="toastViewer" />
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/vue-editor";

export default {
  components: {
    'viewer': Viewer
  },
  methods: {
    setContent(content){
      this.$refs.toastViewer.invoke('setMarkdown', content);
    }
  },
  data(){
    return{
    }
  },
  mounted(){
    this.setContent("<p>MountViewer Content</p><br/><b>MountViewer Content</b><br/><b>MountViewer Content</b>");
  },
};
</script>

<style scoped>
  .toast_index{
    z-index: -99;
  }
</style>