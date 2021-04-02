<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/sandbox01">Sandbox01</router-link> |
    <router-link to="/sandbox02">Sandbox02</router-link>
  </div>
  <router-view />
</template>



<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "@/piniastore/user/useUserStore";

export default defineComponent({
  name: "App",
  setup() {
    //ドキュメントに書いてないからわからないけど
    //$subscribeをするタイミングはどこがええんじゃろ？
    const userStore = useUserStore();
    userStore.$subscribe((mutation, state) => {
      console.log("---subscribe---")
      //まだ完成してないせいか typeが絵文字はいってる
      console.log({
        mutation,
        state,
      });
    });
  },
});
</script>
