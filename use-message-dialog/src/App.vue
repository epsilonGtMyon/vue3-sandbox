<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/sandbox01">Sandbox01</router-link>
  </div>
  <router-view />
  <MessageDialog ref="messageDialog" />
</template>


<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import MessageDialog from "@/components/messagedialog/MessageDialog.vue";
import {
  MessageDialogKeyType,
  messageDialogKey,
} from "@/components/messagedialog/types/MessageDialogKeyTypes";

export default defineComponent({
  name: "App",
  setup() {
    //ルートのところでプロバイドする
    const messageDialog = ref<InstanceType<typeof MessageDialog> | null>(null);
    provide<MessageDialogKeyType>(messageDialogKey, messageDialog);

    return {
      messageDialog
    };
  },
});
</script>
