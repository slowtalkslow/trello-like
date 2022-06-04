import { mapActions } from 'pinia'
import { useBoardStore } from '@/stores/BoardStore'
export default {
  props: {
    board: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    column: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(useBoardStore, ['CREATE_TASK', 'DRAG_TASK', 'DRAG_COLUMN']),
    moveTask({ fromTaskIndex, fromColumnIndex }) {
      const fromColumn = this.board.columns[fromColumnIndex].tasks
      const toColumn = this.column.tasks

      this.DRAG_TASK(fromColumn, toColumn, fromTaskIndex, this.taskIndex)
    },
    moveColumn({ fromColumnIndex }) {
      this.DRAG_COLUMN(fromColumnIndex, this.columnIndex)
    },
    moveTaskOrColumn(transData) {
      if (transData.type === 'task') {
        this.moveTask(transData)
      } else if (transData.type === 'column') {
        this.moveColumn(transData)
      }
    }
  }
}
