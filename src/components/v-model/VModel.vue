<script setup>
import { ref } from 'vue'

const userInput = ref('')
const userTextArea = ref('')
const booleanCheckbox = ref('un checked')
const fruitsCheckbox = ref([])
const genderRadio = ref('male')
const letterSelect = ref('')
const multiSelect = ref([])
</script>
<template>
  <h2>Input</h2>
  <input v-model="userInput" type="text" />
  <p>{{ userInput }}</p>

  <h2>TextArea</h2>
  <textarea v-model="userTextArea"></textarea>
  <p style="white-space: pre">{{ userTextArea }}</p>

  <h2>Checkbox</h2>
  <input
    v-model="booleanCheckbox"
    type="checkbox"
    id="booleanCheckbox"
    true-value="checked"
    false-value="un checked"
  />
  <label for="booleanCheckbox">{{ booleanCheckbox }}</label>

  <input v-model="fruitsCheckbox" type="checkbox" id="apple" value="apple" />
  <label for="apple">apple</label>
  <input v-model="fruitsCheckbox" type="checkbox" id="banana" value="banana" />
  <label for="banana">banana</label>
  <p>{{ fruitsCheckbox }}</p>

  <h2>Radio</h2>
  <input v-model="genderRadio" type="radio" id="male" value="male" />
  <label for="male">male</label>
  <input v-model="genderRadio" type="radio" id="female" value="female" />
  <label for="female">female</label>
  <p>{{ genderRadio }}</p>

  <h2>Select</h2>
  <h3>single select</h3>
  <select v-model="letterSelect">
    <option value="" disabled>select one</option>
    <option v-for="letter in ['A', 'B', 'C']" :key="letter">{{ letter }}</option>
  </select>
  <p>{{ letterSelect }}</p>

  <h3>multi select</h3>
  <select v-model="multiSelect" multiple>
    <option v-for="letter in ['A', 'B', 'C']" :key="letter">{{ letter }}</option>
  </select>
  <p>{{ multiSelect }}</p>
</template>
