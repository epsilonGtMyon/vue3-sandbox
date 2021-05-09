<template>
  <div class="sandbox02a">
    customにするとaタグでラップされない
    <router-link to="/sandbox02b" v-slot="{ navigate }" custom>
      <button @click="manualNavigate($event, navigate)">カスタム</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sandbox02A",
  setup() {
    //取得でnavigateのトリガーを実行する。
    //直接@click="navigate" でもいいけど、前処理挟みたい場合はこれかな
    const manualNavigate = (
      event: MouseEvent,
      navigate: (event: MouseEvent) => Promise<void>
    ) => {
      //navigateには空でもいいけど guardEvent の判定をみると渡しておいたほうがいいような気がするが..
      navigate(event);
    };
    return {
      manualNavigate,
    };
  },
});
</script>
