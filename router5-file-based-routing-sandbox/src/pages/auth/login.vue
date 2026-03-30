<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const auth = useAuthStore();

function login() {
  auth.login();
  router.push("/basic");
}

// <route> ブロックで ページのメタ情報を定義できるが、これだとタイプミスが怖い...
</script>

<template>
  <div>
    <h1>login</h1>

    <button @click="login">ログイン</button>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "allowAnonymous": true
  }
}
</route>
