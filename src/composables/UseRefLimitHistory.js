import { watchEffect, toValue } from 'vue'
import { useRefHistory } from './UseRefHistory'

export function useRefLimitHistory(source, limit) {
  const { history, undo } = useRefHistory(source)
  watchEffect(() => {
    if (history.value.length > toValue(limit)) {
      history.value.shift()
    }
  })

  return { history, undo }
}
