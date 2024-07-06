import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('count', () => {
  const counter = ref(0)
  const isYes = computed(() => (counter.value > 0 ? 'yes' : 'no'))
  function increment() {
    counter.value++
  }
  return {
    counter: counter,
    // 名前同じならこのように書ける
    //counter
    isYes,
    increment
  }
})
