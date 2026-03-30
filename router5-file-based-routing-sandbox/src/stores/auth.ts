import { ref, readonly } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const authenticated = ref(false);

    function login() {
      authenticated.value = true;
    }

    function logout() {
      authenticated.value = false;
    }

    return {
      authenticated,
      login,
      logout,
    };
  },
  {
    persist: {
      // ストレージに保存するときのキー
      key: "auth",

      // ストレージを切り替える(デフォルトはローカルストレージっぽい)
      storage: sessionStorage,
    },
  },
);
