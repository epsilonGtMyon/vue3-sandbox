<template>
  <div class="modal" v-if="visible">
    <div class="modalContent">
      <div class="modalContent_header" :class="modalType">
        <slot name="header">{{ title }}</slot>
      </div>
      <div class="modalContent_body">
        <slot></slot>
      </div>
      <hr />
      <div class="modalContent_footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from "vue";
import { ModalResult } from "./ModalResult";

export default defineComponent({
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "",
    },
    modalType: {
      type: String,
      default: "is-primary",
    },
  },
  setup(_, context) {
    const visible = ref(false);

    let resolve: (result: unknown) => void = () => {
      //
    };

    const show = (pResolve: (result: unknown) => void, param: unknown) => {
      visible.value = true;
      resolve = pResolve;
      context.emit("shown", param);
    };

    const close = (result: unknown) => {
      resolve(ModalResult.completeResult(result));
      visible.value = false;
      resolve = () => {
        //
      };
      context.emit("closed");
    };

    const cancel = () => {
      resolve(ModalResult.canceledResult());
      visible.value = false;
      resolve = () => {
        //
      };
      context.emit("closed");
    };

    onBeforeUnmount(() => {
      resolve(ModalResult.destroyedResult());
      visible.value = false;
      resolve = () => {
        //
      };
      context.emit("closed");
    });

    return {
      visible,

      //----
      //public
      show,
      close,
      cancel,
    };
  },
});
</script>


<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modalContent {
  min-width: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.5);

  .modalContent_header {
    font-weight: bold;
    padding: 0.5em 1em;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    &.is-primary {
      background-color: var(--color-primary);
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
  }
  .modalContent_body {
    padding: 0.5em 1em;
  }
  .modalContent_footer {
    padding: 0.5em 1em;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>