<template>
  <div class="home">
    <div>
      ログイン状態:{{ logined }}
      <button @click="changeLogined">change</button>
    </div>
    <ul>
      <li><a href="#" @click.prevent="toSandbox01">sandbox01</a></li>
      <li><router-link to="/sandbox02a">Sandbox02A</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    const router = useRouter();

    const logined = computed(() => {
      return store.state.logined;
    });
    const changeLogined = () => {
      store.commit("setLogined", !logined.value);
    };

    const toSandbox01 = () => {
      router.push({
        path: "/sandbox01",
        query: {
          text01: "abc",
          num01: 12,
        },
      });
    };

    return {
      logined,
      changeLogined,
      toSandbox01,
    };
  },
});
</script>
