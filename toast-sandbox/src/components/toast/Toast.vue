<template>
  <transition :name="transitionName">
    <template v-if="visible">
      <div class="toast" :class="classes">
        {{ message }}
        <span class="close" @click="emitClickClosed"></span>
      </div>
    </template>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
} from "vue";
import { ToastProp } from "./type/ToastProp";

export default defineComponent({
  name: "Toast",
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<ToastProp["type"]>,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    position: {
      type: String as PropType<ToastProp["position"]>,
      required: true,
    },
    timeoutMills: {
      type: Number,
      default: -1, //-1はタイムアウトなし
    },
  },
  emits: ["clickClosed", "timeout"],
  setup(props, { emit }) {
    let timerId = -1;

    //transition 制御のために表示状態を持つ
    const visible = ref(false);

    onMounted(() => {
      visible.value = true;
      //タイムアウトがあればタイマー設定
      if (props.timeoutMills > -1) {
        timerId = setTimeout(() => {
          emit("timeout", props.id);
        }, props.timeoutMills);
      }
    });
    onBeforeUnmount(() => {
      visible.value = false;
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

    /**
     * トランジション名
     */
    const transitionName = computed(() => {
      //positionに応じてアニメーション方向を決定
      return props.position.startsWith("is-top") ? "slide-down" : "slide-up";
    });

    /**
     * 付与するクラス名
     */
    const classes = computed(() => {
      const c: string[] = [`is-${props.type}`];
      return c;
    });

    return { visible, transitionName, classes, emitClickClosed };
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
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  margin-top: 10px;
  // コンテナがnoneにしているのでここは有効にする
  pointer-events: auto;

  // トーストの属性
  &.is-primary {
    background-color: var(--color-primary);
    color: white;
  }
  &.is-success {
    background-color: var(--color-success);
    color: white;
  }
  &.is-warning {
    background-color: var(--color-warning);
    color: black;
  }
  &.is-danger {
    background-color: var(--color-danger);
    color: white;
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

//トランジション関係
.slide-up-enter-from {
  transform: translateY(20px);
}
.slide-down-enter-from {
  transform: translateY(-20px);
}
.slide-up-enter-active,
.slide-down-enter-active {
  transition: transform 100ms linear;
}
</style>