<script setup lang="ts">
import { ref } from "vue";
import { useGuardLeavingPage } from "./useGuardLeavingPage";
import { useRouter } from "vue-router";

const router = useRouter();

const guard = ref(false);

const guarder = useGuardLeavingPage(() => {
  return guard.value;
});

function toHome() {
  // ガードの停止
  guarder.pauseGuard();

  router.push("/home");
}
</script>

<template>
  <div>
    <h1>sandbox02</h1>

    <div>
        ページ遷移判定用のコンポジション関数 useGuardLeavingPage を自作する。
        判定が必要かを返すboolean関数を受け取る
    </div>

    <div>
      <label>
        <input type="checkbox" v-model="guard" />
        ページ遷移確認
      </label>
    </div>

    <div>
      確認することなく遷移
      <button @click="toHome">Home</button>
    </div>
  </div>
</template>
