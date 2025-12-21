<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";

onBeforeRouteLeave((to, from) => {
  console.log("[Sandbox01]onBeforeRouteLeave")

  const answer = window.confirm("[sandbox01]移動しますか？");

  if (!answer) {
    // 明示的に返すのはfalseだけ
    return false;
  }
});
</script>

<template>
    <div>
        <h1>sandbox01</h1>
        <div>
            コンポーネントのonBeforeRouteLeaveの後にrouter.beforeEachが実行される。
            順序はvue routerのドキュメントに書いてる
        </div>
    </div>
</template>