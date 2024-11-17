import { defineStore } from "pinia";
import { computed, ref } from "vue";

const usePersistedUser = defineStore(
  "persistedUser",
  () => {
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
  },
  {
    persist: {
      // ストレージに保存するときのキー
      key: "p",

      // ストレージを切り替える(デフォルトはローカルストレージっぽい)
      storage: sessionStorage,
      
      // 特定のものを含めたい場合
      // pick:
      
      // 特定のものを除外したい場合
      omit: ["token"],
    },
  }
);

export { usePersistedUser };
