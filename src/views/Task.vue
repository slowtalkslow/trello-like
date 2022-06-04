<template>
  <div class="card">
    <div class="font-bold uppercase">
      {{ task.name }}
    </div>
    <input
      :value="task.description"
      class="input"
      placeholder="+ Enter descrption"
    />
  </div>
</template>

<script>
import { useBoardStore } from '@/stores/BoardStore'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(useBoardStore, ['get']),
    task() {
      return this.get(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.card {
  @apply w-96 p-6 mx-10 bg-gray-50 rounded-lg shadow-lg flex flex-col items-center justify-center;
}
.input {
  @apply bg-transparent p-3 m-3 rounded-lg shadow-lg w-80 active:border-none;
}
</style>
