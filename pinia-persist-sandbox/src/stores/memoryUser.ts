import { defineStore } from "pinia";
import { computed, ref } from "vue";

const userMemoryUser = defineStore("memoryUser", () => {
  const token = ref("");
  const firstName = ref("");
  const familyName = ref("");

  const fullName = computed(() => {
    return `${familyName.value}  ${firstName.value}`;
  });

  function setToken(value: string) {
    token.value = value;
  }

  function setName(firstNameValue: string, familyNameValue: string) {
    firstName.value = firstNameValue;
    familyName.value = familyNameValue;
  }

  return {
    // 状態は全部公開しないとSSRやDevToolsで問題があるそうだ
    token,
    firstName,
    familyName,

    // computed
    fullName,
    // action
    setToken,
    setName,
  };
});

export { userMemoryUser };
