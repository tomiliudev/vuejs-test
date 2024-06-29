<script setup>
import { ref } from 'vue'
import FoodCards from './FoodCards.vue'

const foods = [
  { name: 'ハンバーガー', emoji: '🍔' },
  { name: '寿司', emoji: '🍣' },
  { name: 'ピザ', emoji: '🍕' },
  { name: 'サラダ', emoji: '🥗' },
  { name: 'ラーメン', emoji: '🍜' },
  { name: 'カレー', emoji: '🍛' },
  { name: 'パン', emoji: '🥐' },
  { name: '飴', emoji: '🍭' }
]

const chooseIndex = ref(0)
const newIndex = ref(1)

function chooseCard(idx) {
  chooseIndex.value = idx
  newIndex.value++
}
</script>

<template>
  <main>
    <h1 class="title">食べ物を選んで！</h1>
    <FoodCards
      @click="chooseCard(chooseIndex)"
      :name="foods[chooseIndex].name"
      :emoji="foods[chooseIndex].emoji"
    />

    <template v-if="newIndex < foods.length">
      vs

      <FoodCards
        @click="chooseCard(newIndex)"
        :name="foods[newIndex].name"
        :emoji="foods[newIndex].emoji"
      />
    </template>
  </main>
</template>

<style scoped>
main {
  width: 300px;
  text-align: center;
  margin: 0px auto;
}

.title {
  margin-bottom: 60px;
}
</style>
