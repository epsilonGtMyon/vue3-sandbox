<script setup>
import { ref, computed, inject, watch } from "vue";
import { inputFiltersKey } from "@/common/components/strictinput/inputfilter/inputFiltersKey";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:model-value"]);

/**
 * input要素の参照
 */
const input = ref(null);

/**
 * modelValueの橋渡しをするcomputed
 */
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    // DOMへの設定いるのだろうか...しないと反映されない
    input.value.value = value;
    emit("update:model-value", value);
  },
});

// filter変更時は値を再計算
watch(() => props.filter, () => {
  computedValue.value = convertValue(computedValue.value);
})

const onCompositionend = (ev) => {
  // IME変換終了後は値変更を発火させる
  const value = ev.target.value;
  computedValue.value = convertValue(value);
};

/**
 * inputイベントのハンドラ
 * @param {KeyboardEvent} ev キーイベント
 */
const onInput = (ev) => {
  if (isComposing(ev)) {
    // IME変換中は特になにも加工しない
    return;
  }

  // 入力値のフィルタリング変換
  const value = ev.target.value;
  computedValue.value = convertValue(value);
};

//-----
const inputFilters = inject(inputFiltersKey, new Map());

/**
 * 現在filterに紐づくフィルタリング関数
 */
const inputFilter = computed(() => {
  const f = inputFilters.get(props.filter);
  if (f == null) {
    return (v) => v;
  }
  return f;
});

function convertValue(value) {
  return inputFilter.value(value)
}

/**
 * IME変換中であるか
 * @param {KeyboardEvent} ev キーイベント
 */
function isComposing(ev) {
  return ev.isComposing || ev.keyCode === 229
}
</script>

<template>
  <input
    ref="input"
    :value="computedValue"
    @input="onInput"
    @compositionstart="onCompositionstart"
    @compositionend="onCompositionend"
  />
</template>
