<template>
  <div class="dialog" v-if="visible">
    <div class="dialog-body">
      <div class="dialog-header" :class="titleClass">
        {{ title }}
      </div>
      <div class="dialog-content">{{ message }}</div>

      <div class="dialog-footer">
        <template v-for="(ab, index) of actionButtons" :key="index">
          <button
            class="button"
            :class="[ab.buttonType, ab.outline == true ? 'is-outline' : '']"
            @click="clicked(index)"
          >
            {{ ab.text }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from "vue";
import {
  DialogType,
  DialogActionButton,
  DialogActionButtonHandler,
  DialogShowParam,
} from "./DialogTypes";
import { messageDialogKey } from "./messageDialogKey";

export default defineComponent({
  name: "Dialog",
  setup() {
    const visible = ref(false);

    const title = ref("");
    const titleType = ref<DialogType>("is-primary");
    const message = ref("");
    const titleClass = computed(() => [titleType.value]);
    let actionButtonHandler: DialogActionButtonHandler | null = null;

    const actionButtons = ref<DialogActionButton[]>([]);

    // これを呼べるようにする。
    const show = (param: DialogShowParam) => {
      visible.value = true;

      title.value = param.title;
      titleType.value = param.titleType;
      message.value = param.message;
      actionButtons.value = param.actionButtons;
      actionButtonHandler = param.actionButtonHandler;
    };

    const clicked = (buttonOrder: number) => {
      if (actionButtonHandler) {
        actionButtonHandler(buttonOrder);
        visible.value = false;
        actionButtonHandler = null;
      }
    };

    const messageDialog = inject(messageDialogKey);

    onMounted(() => {
      messageDialog?.replaceHandle({
        show,
        close() {
          if (visible.value) {
            clicked(-1);
          }
        },
      });
    });

    return {
      visible,
      title,
      titleClass,
      message,
      actionButtons,

      show,
      clicked,
    };
  },
});
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-body {
  width: 400px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 2px 0 2px 0 rgba(0, 0, 0, 0.2);
}

.dialog-header {
  background-color: white;
  color: black;

  min-height: 2em;
  padding: 5px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &.is-primary {
    background-color: rgb(89, 200, 89);
    color: white;
  }
  &.is-info {
    background-color: rgb(39, 165, 204);
    color: white;
  }
  &.is-danger {
    background-color: rgb(255, 100, 100);
    color: white;
  }
}
.dialog-content {
  background-color: white;

  padding: 10px 20px;

  white-space: pre-wrap;
}
.dialog-footer {
  background-color: white;

  padding: 5px 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.button {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 0.375em;
  border: 1px solid rgb(220, 220, 220);
  box-shadow: none;

  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  cursor: pointer;

  &.is-primary {
    background-color: rgb(89, 200, 89);
    color: white;
    &.is-outline {
      background-color: white;
      color: rgb(89, 200, 89);
      border-color: rgb(89, 200, 89);
    }
  }
  &.is-info {
    background-color: rgb(39, 165, 204);
    color: white;
    &.is-outline {
      background-color: white;
      color: rgb(39, 165, 204);
      border-color: rgb(39, 165, 204);
    }
  }
  &.is-danger {
    background-color: rgb(255, 100, 100);
    color: white;
    &.is-outline {
      background-color: white;
      color: rgb(255, 100, 100);
      border-color: rgb(255, 100, 100);
    }
  }
}
</style>
