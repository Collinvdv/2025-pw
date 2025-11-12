<script setup>
  // Import of the components
  import { ref } from 'vue'
  import Counter from './components/Counter.vue'

  // Data 
  let students = ref([
    {
      "name": "Collin",
      "value": 10
    },
    {
      "name": "KClara",
      "value": 5
    },
    {
      "name": "Wyckdorya",
      "value": 15
    },
  ]);
</script>

<template>
  <div>
    <h1>
      Eurosong application
    </h1>
    {{ students.length }}

    <div 
      v-for="(student, index) in students"
      :key="index"
    >
      <Counter 
        :counterName="student.name"
        :initialValue="student.value"
      />
    </div>
  </div>
</template>
