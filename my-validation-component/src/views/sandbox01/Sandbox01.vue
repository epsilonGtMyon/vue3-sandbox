<script setup lang="ts">
import MyValidation from '@/common/validation/component/MyValidation.vue'
import { ref } from 'vue'

const firstname = ref('')
const familyname = ref('')
</script>

<template>
  <div>
    <div>コンポーネントごとにバリデーション</div>
    <div>
      <MyValidation
        :value="firstname"
        v-slot="{ isError, firstErrorMessage }"
        rules="required|minLength:2|maxLength:5"
        watch
      >
        <div>
          <label>
            firstname:
            <input type="text" name="firstname" v-model="firstname" />
          </label>
        </div>
        <div :class="{ 'is-error': isError }">{{ firstErrorMessage }}</div>
      </MyValidation>
    </div>

    <div>
      <MyValidation
        :value="familyname"
        v-slot="{ isError, firstErrorMessage, trigger }"
        rules="required|halfAlphaNum|minLength:2|maxLength:5"
      >
        <div>
          <label>
            familyname:
            <input type="text" name="familyname" v-model="familyname" @blur="trigger" />
          </label>
        </div>
        <div :class="{ 'is-error': isError }">{{ firstErrorMessage }}</div>
      </MyValidation>
    </div>
  </div>
</template>

<style lang="css" scoped>
.is-error {
  color: red;
}
</style>
