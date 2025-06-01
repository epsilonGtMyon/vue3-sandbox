<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import type { MyValidationErrorMessage } from '../type'
import { createMyValidationsFromRules } from '../validationParsers'

const props = defineProps<{
  /** 値 */
  value: string
  /** 検証定義文字列 */
  rules: string
  /** 値変更時に検証をするか */
  watch?: boolean
}>()

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

/**
 * バリデーションを実行し、結果を状態に格納
 */
function executeValidation() {
  errorMessages.value = validate(props.value)
}

/**
 * バリデーションの実行
 * @param value 値
 * @returns エラーメッセージの配列
 */
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
</script>

<template>
  <slot :errorMessages :isError :firstErrorMessage :trigger="executeValidation" :reset="reset">
  </slot>
</template>
