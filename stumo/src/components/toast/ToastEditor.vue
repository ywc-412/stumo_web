<template>
  <div>
    <editor :initialValue="editorText"
            :html="editorHtml"
            :visible="editorVisible"
            :options="editorOptions"
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg" 
            class="toast_index"
            />
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

export default {
  components: {
    'editor': Editor
  },
  data(){
    return{
      editorText: 'This is initialValue.',
      editorOptions: {
          hideModeSwitch: true,
      },
      editorHtml: '',
      editorVisible: true
    }
  }
};
</script>

<style scoped>
  .toast_index{
    z-index: -99;
  }
</style>