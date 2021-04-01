<template>
  <div class="messageDialog" v-if="visible">
    <div class="messageDialog_content">
      <div class="messageDialog_title" :class="messageType">{{ title }}</div>
      <div class="messageDialog_body">
        <template v-for="body in bodies" :key="body.key">
          {{ body.text }}<br />
        </template>
      </div>
      <div class="messageDialog_actions">
        <template v-for="(action, index) in actions" :key="action.buttonIndex">
          <button :class="action.buttonType" @click="clicked(index)">
            {{ action.text }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import {
  MessageDialogParam,
  MessageDialogAction,
  MessageDialogType,
} from "./types/MessageDialogTypes";

export default defineComponent({
  name: "MessageDialog",
  setup() {
    const visible = ref<boolean>(false);
    const messageType = ref<MessageDialogType | null>(null);
    const title = ref<string>("");
    const body = ref<string>("");
    const actions = ref<MessageDialogAction[]>([]);

    let resolve: (buttonIndex: number) => void = () => {
      //noop
    };

    const bodies = computed(() =>
      body.value.split("\n").map((v, index) => ({ text: v, key: index }))
    );

    const show = (dialogParam: MessageDialogParam) => {
      visible.value = true;
      messageType.value = dialogParam.messageType;
      title.value = dialogParam.title;
      body.value = dialogParam.body;
      actions.value = dialogParam.actions.map((a) => ({
        text: a.text,
        buttonType: a.buttonType || dialogParam.messageType,
      }));
      resolve = dialogParam.resolve;
    };

    const clicked = (buttonIndex: number) => {
      const _resolve = resolve;
      resolve = () => {
        //noop
      };

      visible.value = false;
      _resolve(buttonIndex);
    };

    return {
      visible,
      messageType,
      title,
      bodies,
      actions,

      show,
      clicked,
    };
  },
});
</script>


<style lang="scss" scoped>
.messageDialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  .messageDialog_content {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    min-width: 400px;

    .messageDialog_title {
      padding: 0.5em 1em;

      &.primary {
        background-color: rgb(70, 150, 70);
        color: white;
      }
      &.danger {
        background-color: rgb(150, 50, 50);
        color: white;
      }
    }

    .messageDialog_body {
      padding: 0.5em 1em;
    }

    .messageDialog_actions {
      padding: 0.5em 1em;

      button {
        margin-right: 1em;
        &.primary {
          background-color: rgb(70, 150, 70);
          color: white;
        }
        &.danger {
          background-color: rgb(150, 50, 50);
          color: white;
        }
      }
    }
  }
}
</style>