import { readonly, ref } from "vue";

function useAppCounter() {
  const count = ref(0);

  const increment = () => {
    count.value += 2;
  };

  return {
    count: readonly(count),
    increment,
  };
}

export { useAppCounter };
