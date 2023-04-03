import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useUserStore = defineStore("user", () => {
  console.log("useUserStore:setup");

  const firstName = ref("n01");
  const familyName = ref("n02");

  const fullName = computed(() => `${firstName.value} - ${familyName.value}`);

  function setUserFullName(payload: { firstName: string; familyName: string }) {
    // 引数はオブジェクトでも2個のstringでもどっちでもいい
    // $onActionが呼ばれる
    // $subscribeは1回だけ呼ばれる
    firstName.value = payload.firstName;
    familyName.value = payload.familyName;
  }

  return {
    firstName,
    familyName,
    fullName,
    setUserFullName,
  };
});
const userStore = useUserStore();
userStore.$subscribe((mutation, state) => {
  console.log("$subscribe");
  // 2つの変数に代入した場合はmutationには最後のものが入っているみたい
  // stateには変更後のproxyが入っているので使うならこっちかな...
  console.log(mutation);
  console.log(state);
});

userStore.$onAction((context) => {
  console.log("$onAction");
  console.log(context);
});

export { useUserStore };
