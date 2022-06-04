<template>
  <div class="flex justify-center w-full">
    <!-- NOTE: drag task or column -->
    <div class="flex flex-row items-start min-w-full m-20">
      <board-column
        v-for="(column, $columnIndex) in board.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex="$columnIndex"
        :board="board"
      />
      <div class="column">
        <div class="font-bold uppercase">new group</div>
        <input
          type="text"
          class="input"
          placeholder="+ Enter group here"
          @keyup.enter="createColumn($event)"
        />
      </div>
    </div>

    <div v-if="isTaskOpen" class="card" @click.self="closeTask()">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useBoardStore } from '@/stores/BoardStore'
import BoardColumn from '@/components/BoardColumn.vue'
export default {
  name: 'Board',
  components: {
    BoardColumn
  },
  computed: {
    ...mapState(useBoardStore, {
      board: 'board'
    }),
    isTaskOpen() {
      return this.$route.name === 'task'
    }
  },
  methods: {
    ...mapActions(useBoardStore, ['CREATE_COLUMN']),
    createColumn(event) {
      if (event.target.value !== '') {
        this.CREATE_COLUMN(event.target.value)
        event.target.value = ''
      }
    },
    closeTask() {
      this.$router.push({ name: 'board' })
    }
  }
}
</script>

<style scoped>
/* FIXME: fix @apply */
.column {
  @apply w-96 p-6 mx-10 bg-transparent rounded-lg shadow-lg flex flex-col items-center;
}

.card {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}

.input {
  @apply bg-transparent p-3 m-3 rounded-lg shadow-lg w-80 active:border-none;
}
</style>
