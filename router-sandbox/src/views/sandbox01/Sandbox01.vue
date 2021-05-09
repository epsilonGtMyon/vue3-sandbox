<template>
  <div class="sandbox01">
    <div>text01: {{ text01 }}</div>
    <div>num01: {{ num01 }}</div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sandbox01",
  //routeのprops オプションを使うことで ページでもpropとしてパラメータを受け取ることができる
  //関数形式のpropsを使うとqueryから受け取ることもできるので便利ではあるが型の情報を上手く伝えないと..
  props: {
    text01: {
      type: String,
    },
    num01: {
      type: Number,
    },
  },
  setup(props) {
    console.log({ ...props });
    return {};
  },
});
</script>
