import { createApp, watchEffect } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import { useCounterStore } from '@/stores/counter'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

// main.jsでPiniaを使う場合は app.use(pinia)の後でやる必要がある
const counterStore = useCounterStore()
watchEffect(() => console.log('main.js', counterStore.counter))

app.mount('#app')
