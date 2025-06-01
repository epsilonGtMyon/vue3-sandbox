<script setup lang="ts">
import {
  computed,
  watch,
  ref,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
  useId,
  inject,
} from 'vue'
import type { MyValidationErrorMessage } from '@/common/validation/type'
import { createMyValidationsFromRules } from '@/common/validation/validationParsers'
import type { MyValidationController } from './useMyValidationController'

const props = defineProps<{
  /** 値 */
  value: string
  /** 検証定義文字列 */
  rules: string
  /** 値変更時に検証をするか */
  watch?: boolean
}>()

const id = useId()

// ---------------
// バリデーション定義
const validators = computed(() => createMyValidationsFromRules(props.rules))

// ---------------
// エラー情報
/** エラーメッセージ一覧 */
const errorMessages = ref<MyValidationErrorMessage[]>([])
/** エラーであるか */
const isError = computed(() => errorMessages.value.length > 0)
/** 最初のエラーメッセージ */
const firstErrorMessage = computed(() => errorMessages.value[0] ?? '')

function reset() {
  errorMessages.value = []
}

// ----------------------------------------------------------
// 実行に関する部分

function executeValidation() {
  errorMessages.value = validate(props.value)
}

function validate(value: any): MyValidationErrorMessage[] {
  const errors: MyValidationErrorMessage[] = []
  for (const validator of validators.value) {
    const r = validator.validate(value)
    if (r != null) {
      errors.push(r)
    }
  }
  return errors
}

// ----------------------------------------------------------
// watch

// 使いどころあるかな..
watch(
  () => props.value,
  (newValue) => {
    if (props.watch) {
      errorMessages.value = validate(newValue)
    }
  },
)

// ----------------------------------------------------------
// 親にMyValidationControllerが使われていればそこに、この検証コンポーネントが担当する検証の情報を登録する。
const myValidationController = inject<MyValidationController>('MyValidationController')

onMounted(() => {
  myValidationController?.put(id, {
    reset,
    execute: executeValidation,
    errors: errorMessages,
  })
})

onBeforeUnmount(() => {
  myValidationController?.remove(id)
})
</script>

<template>
  <slot :errorMessages :isError :firstErrorMessage :trigger="executeValidation" :reset="reset">
  </slot>
</template>
