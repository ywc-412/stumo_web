<template>
  <div style="width:100">
    <editor ref="toastEditor"
            :initialValue="editorText"
            :html="editorHtml"
            :visible="editorVisible"
            :options="editorOptions"
            previewStyle="vertical"
            height="600px"
            initialEditType="wysiwyg" 
            class="toast_index"
            />
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

export default {
  props: ["childValue"],
  components: {
    'editor': Editor,
  },
  methods: {
    setContent(content){
      this.$refs.toastEditor.invoke('setHTML', content);
    },
    getContent(){
      return this.$refs.toastEditor.invoke("getHtml");
    }
  },
  data(){
    return{
      editorText: '',
      editorOptions: {
          hideModeSwitch: true,
      },
      editorHtml: '',
      editorVisible: true,
      viewerText: '# This is Viewer.\n Hello World.',
    }
  },
  mounted(){
    this.setContent("");
  },
};
</script>

<style scoped>
  .toast_index{
    z-index: -99;
  }
</style>