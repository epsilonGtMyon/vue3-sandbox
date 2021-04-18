<template>
  <div class="toast" :class="classes">
    {{ message }}
    <span class="close" @click="emitClickClosed"></span>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType,
} from "vue";

export type ToastProp = {
  id: string;
  type: "primary" | "success" | "warning" | "danger";
  message: string;
  position:
    | "is-top-right"
    | "is-top-left"
    | "is-top-center"
    | "is-bottom-right"
    | "is-bottom-left"
    | "is-bottom-center";
  timeoutMills: number;
};

export default defineComponent({
  name: "Toast",
  props: {
    id: {
      type: String,
      require: true,
    },
    type: {
      type: String as PropType<ToastProp["type"]>,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    position: {
      type: String as PropType<ToastProp["position"]>,
      require: true,
    },
    timeoutMills: {
      type: Number,
      default: -1,
    },
  },
  emits: ["clickClosed", "timeout"],
  setup(props, { emit }) {
    let timerId = -1;

    onMounted(() => {
      //タイムアウトがあればタイマー設定
      if (props.timeoutMills > -1) {
        timerId = setTimeout(() => {
          emit("timeout", props.id);
        }, props.timeoutMills);
      }
    });
    onBeforeUnmount(() => {
      //タイムアウトがあればタイマー解除
      if (timerId > -1) {
        clearTimeout(timerId);
      }
    });

    /**
     * ×ボタン押されたことをエミット
     */
    const emitClickClosed = () => {
      //実際に閉じるかどうかは こちらでは制御しないので
      //timerIdのclearTimeoutは呼ばない
      //クリアはonBeforeUnmountに任せる
      emit("clickClosed", props.id);
    };

    const classes = computed(() => {
      const c: string[] = [`is-${props.type}`, `${props.position}`];
      return c;
    });
    return { classes, emitClickClosed };
  },
});
</script>

<style lang="scss" scoped>
.toast {
  position: relative;
  white-space: pre;
  padding: 1em 2em;
  border-radius: 5px;
  display: inline;

  margin-top: 10px;
  // コンテナがnoneにしているのでここは有効にする
  pointer-events: auto;

  // トーストの属性
  &.is-primary {
    background-color: rgb(100, 200, 100);
    color: white;
  }
  &.is-success {
    background-color: rgb(0, 157, 248);
    color: white;
  }
  &.is-warning {
    background-color: rgb(250, 250, 100);
    color: black;
  }
  &.is-danger {
    background-color: rgb(250, 100, 100);
    color: white;
  }

  // トーストの配置場所
  &.is-top-right {
    align-self: flex-end;
  }
  &.is-top-left {
    align-self: flex-start;
  }
  &.is-top-center {
    align-self: center;
  }
  &.is-bottom-right {
    align-self: flex-end;
  }
  &.is-bottom-left {
    align-self: flex-start;
  }
  &.is-bottom-center {
    align-self: center;
  }

  //閉じる
  .close:after {
    position: absolute;
    top: 0.2em;
    right: 0.2em;

    content: "×";
    width: 1.5em;
    height: 1.5em;
    font-size: 0.6em;
    line-height: 1.5em;
    text-align: center;

    cursor: pointer;
    padding: 0.5em;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>