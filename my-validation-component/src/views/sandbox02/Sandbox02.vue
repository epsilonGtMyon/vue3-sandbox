<script setup lang="ts">
import { ref } from 'vue'
import { useMyValidationController } from './useMyValidationController'
import MyValidation2 from './MyValidation2.vue'

// このコンポーネント配下のバリデーションを制御するためのもの
const controller = useMyValidationController()

const value01 = ref('')
const value02 = ref('')
const value03 = ref('')

const hasError = ref(false)

function reset() {
  controller.reset()
  hasError.value = false
}

function register() {
  const result = controller.validate()
  hasError.value = result
}
</script>

<template>
  <div>
    <div>
      コンポーネントごとにバリデーションしつつ、何かボタン押したときにまとめてバリデーション
    </div>
    <div>
      <MyValidation2
        :value="value01"
        v-slot="{ isError, firstErrorMessage }"
        rules="required|minLength:2|maxLength:5"
      >
        <div>
          <label>
            value01:
            <input type="text" name="value01" v-model="value01" />
          </label>
        </div>
        <div :class="{ 'is-error': isError }">{{ firstErrorMessage }}</div>
      </MyValidation2>
    </div>

    <div>
      <MyValidation2
        :value="value02"
        v-slot="{ isError, firstErrorMessage }"
        rules="required|minLength:2|maxLength:5"
      >
        <div>
          <label>
            value02:
            <input type="text" name="value02" v-model="value02" />
          </label>
        </div>
        <div :class="{ 'is-error': isError }">{{ firstErrorMessage }}</div>
      </MyValidation2>
    </div>

    <div>
      <MyValidation2
        :value="value03"
        v-slot="{ isError, firstErrorMessage }"
        rules="required|minLength:2|maxLength:5"
      >
        <div>
          <label>
            value03:
            <input type="text" name="value03" v-model="value03" />
          </label>
        </div>
        <div :class="{ 'is-error': isError }">{{ firstErrorMessage }}</div>
      </MyValidation2>
    </div>

    <div>
      <button @click="reset">リセット</button>
      <button @click="register">登録</button>
    </div>
    <div>
      <template v-if="hasError"> エラーある </template>
    </div>
  </div>
</template>

<style lang="css" scoped>
.is-error {
  color: red;
}
</style>
