import { ref, watchEffect } from 'vue'

export function useRefHistory(source) {
  const history = ref([])
  watchEffect(() => {
    history.value.push(source.value)
  })
  function undo() {
    if (history.value.length <= 1) return
    history.value.pop()
    source.value = history.value.pop()
  }
  return {
    history,
    undo
  }
}
