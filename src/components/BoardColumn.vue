<template>
  <app-drop @dropDown="moveTaskOrColumn">
    <app-drag
      class="column"
      :transData="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
      <div class="font-bold uppercase">
        {{ column.name }}
      </div>
      <column-task
        v-for="(task, $taskIndex) in column.tasks"
        :key="$taskIndex"
        :task="task"
        :taskIndex="$taskIndex"
        :columnIndex="columnIndex"
        :board="board"
        :column="column"
      />
      <input
        type="text"
        class="input"
        placeholder="+ Enter new task"
        @keyup.enter="createTask($event, column.tasks)"
      />
    </app-drag>
  </app-drop>
</template>

<script>
import ColumnTask from './ColumnTask'
import movingTaskAndColumnMixin from '@/mixins/movingTaskAndColumnMixin'
import AppDrag from './AppDrag'
import AppDrop from './AppDrop'
export default {
  mixins: [movingTaskAndColumnMixin],
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  methods: {
    createTask(event, tasks) {
      if (event.target.value !== '') {
        this.CREATE_TASK(tasks, event.target.value)
        event.target.value = ''
      }
    }
  }
}
</script>

<style scoped>
.column {
  @apply w-96 p-6 mx-10 bg-transparent rounded-lg shadow-lg flex flex-col items-center;
}

.input {
  @apply bg-transparent p-3 m-3 rounded-lg shadow-lg w-80 active:border-none;
}
</style>
