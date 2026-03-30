<script setup lang="ts">
// basic.vueを作ると /basic のパスの共通レイアウトの位置づけになる。
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const pages = ref([
  { name: "Sandbox01", path: "/basic/sandbox01" },
  { name: "Sandbox02", path: "/basic/sandbox02" },
  { name: "Sandbox03", path: "/basic/sandbox03" },
]);

const router = useRouter();
const auth = useAuthStore();
function logout() {
  auth.logout();
  router.push("/auth/login");
}
</script>

<template>
  <div class="wrapper">
    <nav>
      <button @click="logout">ログアウト</button>
      <template v-for="p of pages" :key="p.name">
        <RouterLink :to="p.path">
          {{ p.name }}
        </RouterLink>
        |
      </template>
    </nav>
  </div>
  <hr />
  <RouterView />
</template>
