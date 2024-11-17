<script setup lang="ts">
import { userMemoryUser } from "@/stores/memoryUser";
import { usePersistedUser } from "@/stores/persistedUser";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const memoryUserStore = userMemoryUser();
const persistedUserStore = usePersistedUser();

const firstName = ref("");
const familyName = ref("");

function register() {
  const token = crypto.randomUUID();

  memoryUserStore.setToken(token);
  memoryUserStore.setName(firstName.value, familyName.value);

  persistedUserStore.setToken(token);
  persistedUserStore.setName(firstName.value, familyName.value);

  router.push("/viewUser");
}
</script>

<template>
  <main>
    <div>
      <label>
        firstName:
        <input v-model="firstName" type="text" />
      </label>
    </div>

    <div>
      <label>
        familyName:
        <input v-model="familyName" type="text" />
      </label>
    </div>

    <div>
      <button @click="register">ストアに保存</button>
    </div>
  </main>
</template>
