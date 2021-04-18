<template>
  <div class="toast" :class="classes">
    {{ message }}
    <span class="close"></span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

type ToastProp = {
  type: "primary" | "success" | "warning" | "danger";
  message: string;
  position:
    | "is-top-right"
    | "is-top-left"
    | "is-top-center"
    | "is-bottom-right"
    | "is-bottom-left"
    | "is-bottom-center";
};

export default defineComponent({
  name: "Toast",
  props: {
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
  },
  setup(props) {
    const classes = computed(() => {
      const c: string[] = [`is-${props.type}`, `${props.position}`];
      console.log(c);
      return c;
    });
    return { classes };
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
    color: white;
  }
  &.is-danger {
    background-color: rgb(200, 100, 100);
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
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>