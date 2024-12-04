import { define } from "@/lib/di/definer";
import { readonly, ref } from "vue";

function _useCounter() {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return {
    count: readonly(count),
    increment,
  };
}

// -------------------------------

const [keyCounter, useCounter, provideCounter] = define(
  "counter",
  _useCounter
);

export { keyCounter, useCounter, provideCounter };
