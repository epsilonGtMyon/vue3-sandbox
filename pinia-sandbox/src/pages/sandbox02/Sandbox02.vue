<script setup lang="ts">
import { useUserStore } from "@/common/stores/user";
import { ref, computed } from "vue";

const userStore = useUserStore();
const storeFirstName = computed(() => userStore.firstName);
const storeFamilyName = computed(() => userStore.familyName);
const storeFullName = computed(() => userStore.fullName);

const firstName = ref("");
const familyName = ref("");

function register1() {
  // この形式で記述してもsubscribeは1回だけ呼ばれる
  userStore.firstName = firstName.value;
  userStore.familyName = familyName.value;
}

function register2() {
  //$patchはreadonlyのやつにするとエラーになる
  userStore.$patch({
    firstName: firstName.value,
    familyName: familyName.value,
  });
}

function register3() {
  // アプリの規模が大きい場合は
  // 保守を考えると無邪気に状態を変えられるより,明示的に変更アクション用意するほうがいい気がする
  userStore.setUserFullName({
    firstName: firstName.value,
    familyName: familyName.value,
  });
}

function resetStore() {
  // setupでストアを作成していると$resetを呼ぶとエラーになるみたい。
  // 自前で$resetを作ってくれとのこと
  userStore.$reset();
}
</script>

<template>
  <div class="sandbox02">
    <div>
      <h2>入力</h2>
      <div>
        <label>
          firstName:
          <input v-model="firstName" />
        </label>
      </div>
      <div>
        <label>
          faimlyName:
          <input v-model="familyName" />
        </label>
      </div>

      <div>
        <button @click="register1">ストアに反映</button>
        <button @click="register2">ストアに反映($patch)</button>
        <button @click="register3">ストアに反映(action)</button>
        <button @click="resetStore">ストア初期化($reset:エラー)</button>
      </div>
    </div>
    <div>
      <h2>ストア</h2>
      <div>{{ storeFirstName }}</div>
      <div>{{ storeFamilyName }}</div>
      <div>{{ storeFullName }}</div>
    </div>
  </div>
</template>
