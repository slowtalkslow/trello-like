<template>
  <!-- NOTE: drag task to any place -->
  <app-drop @dropDown="moveTaskOrColumn">
    <app-drag
      class="task"
      @click="toTask(task)"
      :transData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
    >
      <span class="w-full flex-no-shrink font-bold">
        {{ task.name }}
      </span>
      <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">
        {{ task.description }}
      </p>
    </app-drag>
  </app-drop>
</template>

<script>
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'
import movingTaskAndColumnMixin from '@/mixins/movingTaskAndColumnMixin'
export default {
  components: { AppDrag, AppDrop },
  mixins: [movingTaskAndColumnMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    toTask(task) {
      this.$router.push({ name: 'task', params: { id: task.id } })
    }
  }
}
</script>

<style scoped>
.task {
  @apply bg-white p-3 m-3 rounded-lg shadow-lg w-80;
}
</style>
