<template>
  <div>
    ドキュメントには明記されていないが$subscribeを試してみる
    <div>
      <label>
        firstName:
        <input type="text" v-model="firstName" />
      </label>
    </div>
    <div>
      <label>
        familyName:
        <input type="text" v-model="familyName" />
      </label>
    </div>
    <div>
      {{ fullName }}
    </div>
    <div>
      <button @click="asignDirectly">直接代入</button>
      <button @click="executePatch">Patchで代入</button>
      <button @click="executeAction">Actionで代入</button>
      <button @click="executeActionAndPatch">ActionでPatch代入</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from "@/piniastore/user/useUserStore";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "Sandbox02",
  setup() {
    const userStore = useUserStore();

    const firstName = ref("");
    const familyName = ref("");

    const fullName = computed(() => userStore.fullName);

    //直接代入だと
    //代入の度に呼ばれる
    //つまり2回
    //変化がないときは$subscribeは呼ばれない
    //payloadが空
    const asignDirectly = () => {
      userStore.firstName = firstName.value;
      userStore.familyName = familyName.value;
    };

    //patchだとpayloadに値が入っている
    //変化してなくても呼ばれる
    const executePatch = () => {
      userStore.$patch({
        firstName: firstName.value,
        familyName: familyName.value,
      });
    };

    //直接代入の場合と同じ
    const executeAction = () => {
      userStore.setFirstName(firstName.value);
      userStore.setFamilyName(familyName.value);
    };

    //patchの場合と同じ
    const executeActionAndPatch = () => {
      userStore.setFullName(firstName.value, familyName.value);
    };

    return {
      firstName,
      familyName,
      fullName,

      asignDirectly,
      executePatch,
      executeAction,
      executeActionAndPatch
    };
  },
});
</script>
