<script setup lang="ts">
import { userMemoryUser } from "@/stores/memoryUser";
import { usePersistedUser } from "@/stores/persistedUser";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const memoryUserStore = userMemoryUser();
const persistedUserStore = usePersistedUser();

function back() {
  router.back();
}
</script>

<template>
  <main>
    それぞれのストアから取得して表示

    <div>
      <h2>MemoryUser</h2>
      <div>
        <label>
          token:
          <span>{{ memoryUserStore.token }}</span>
        </label>
      </div>
      <div>
        <label>
          firstName:
          <span>{{ memoryUserStore.firstName }}</span>
        </label>
      </div>
      <div>
        <label>
          familyName:
          <span>{{ memoryUserStore.familyName }}</span>
        </label>
      </div>
    </div>
    <hr />
    <div>
      <h2>PersistedUser</h2>
      <div>
        <label>
          token:
          <span>{{ persistedUserStore.token }}</span>
        </label>
      </div>
      <div>
        <label>
          firstName:
          <span>{{ persistedUserStore.firstName }}</span>
        </label>
      </div>
      <div>
        <label>
          familyName:
          <span>{{ persistedUserStore.familyName }}</span>
        </label>
      </div>
    </div>
    <div>
      <button @click="back">戻る</button>
    </div>
  </main>
</template>
