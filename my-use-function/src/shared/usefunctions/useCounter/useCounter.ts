import { ref } from "@vue/reactivity";

function useCounter(plusCount = 1) {
  const counter = ref(0);
  const increment = () => {
    counter.value += plusCount;
  };

  return {
    counter,
    increment,
  };
}

export { useCounter };
