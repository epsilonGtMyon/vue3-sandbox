import { onMounted, onUnmounted, readonly, ref } from 'vue'

/**
 * 現在日時を取得するコンポジション関数
 *
 * @returns 現在時刻
 */
function useCurrentDate() {
  const currentDate = ref(new Date())

  let timerId: number | null = null
  onMounted(() => {
    timerId = setInterval(() => {
      currentDate.value = new Date()
    }, 300)
  })

  onUnmounted(() => {
    if (timerId !== null) {
      clearInterval(timerId)
    }
  })

  return {
    currentDate: readonly(currentDate),
  }
}

export { useCurrentDate }
