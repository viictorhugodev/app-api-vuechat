import { computed, ref } from 'vue';



export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue)

  // const squareCounter = computed(() => counter.value * counter.value)


  return {
    counter,
    squareCounter: computed(() => counter.value * counter.value),
    // increment: () => {
    //   counter.value++
    // },
    // decrement: () => {
    //   counter.value--
    // },
    // reset: () => {
    //   counter.value = 0
    // }
  }
}
