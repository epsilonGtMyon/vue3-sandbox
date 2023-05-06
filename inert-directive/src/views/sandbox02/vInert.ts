import { type DirectiveBinding, type ObjectDirective } from "vue";

function setInert(el: HTMLElement, binding: DirectiveBinding<boolean>) {
  if (binding.oldValue === binding.value) {
    // 変化ないときは何もしない
    return;
  }
  el.inert = binding.value;
}

/**
 * inert用のディレクティブ
 */
const vInert: ObjectDirective<HTMLElement, boolean> = {
  mounted(el, binding) {
    setInert(el, binding);
  },
  updated(el, binding) {
    setInert(el, binding);
  },
};

export { vInert };
