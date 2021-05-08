<template>
  <label class="my-checkbox" :class="clazz" tabindex="0">
    <input type="checkbox" v-model="computedValue" v-bind="$attrs" />
    <span class="check-mark"></span>
    <span class="check-label">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

function addPrefix(value: string, prefix: string) {
  if (value == null || value === "") {
    return "";
  }
  return `${prefix}${value}`;
}
export default defineComponent({
  name: "MyCheckbox",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      required: true,
    },
    type: {
      type: String,
      default: "primary",
    },
    trueValue: {
      type: [String, Boolean, Number],
      default: true,
    },
    falseValue: {
      type: [String, Boolean, Number],
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const computedValue = computed({
      get() {
        return props.modelValue === props.trueValue;
      },
      set(value) {
        const emitValue = value ? props.trueValue : props.falseValue;
        context.emit("update:modelValue", emitValue);
      },
    });

    const clazz = computed(() => {
      const classes: string[] = [];
      if (computedValue.value) {
        classes.push("is-checked");
      }
      if (props.type) {
        classes.push(addPrefix(props.type, "is-"));
      }
      return classes;
    });
    return {
      computedValue,
      clazz,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-checkbox {
  position: relative;

  display: inline-flex;
  align-items: center;

  cursor: pointer;
  user-select: none;

  > input[type="checkbox"] {
    position: absolute;
    opacity: 0;

    /* チェックボックスを隠したいので-1で下に */
    z-index: -1;
  }

  .check-mark {
    width: 1rem;
    height: 1rem;

    border: solid 1px rgb(0, 0, 0, 0.5);
  }
  &:focus .check-mark {
    box-shadow: 0 0 4px rgb(0, 0, 200);
  }

  //とりあえずテキトーにそれっぽく
  &.is-primary.is-checked .check-mark {
    background-color: var(--color-primary);
  }
  &.is-success.is-checked .check-mark {
    background-color: var(--color-success);
  }
  &.is-warning.is-checked .check-mark {
    background-color: var(--color-warning);
  }
  &.is-danger.is-checked .check-mark {
    background-color: var(--color-danger);
  }

  &.is-checked .check-mark::after {
    content: "";
    display: block;
    width: 30%;
    height: 60%;

    transform: rotate(45deg) translateX(40%) translateY(-20%);
    border-bottom: 0.2em solid white;
    border-right: 0.2em solid white;
  }

  .check-label {
    padding-left: 0.5em;
  }
}
</style>