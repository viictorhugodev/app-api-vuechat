<template>
  <section>
    <h3>Counter: {{counter}}</h3>
    <h3>Square: {{squareCounter}}</h3>

    <div>


      <button class="btn" @click="counter++">+1</button>
      <button class="p-5 bg-blue-500 rounded mr-2" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';


const {counter , squareCounter} = useCounter(10)

interface Props {
  value: number,
}

const props = defineProps<Props>()
// import { computed, ref } from 'vue';


</script scope>

<style>
.btn {
  padding: 5px;
  background-color: blue;
  border-radius: 5px;
  margin-right: 5px;
}

</style>

