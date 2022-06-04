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
    moveTaskOrColumn(transData) {
      if (transData.type === 'task') {
        this.moveTask(transData)
      } else if (transData.type === 'column') {
        this.moveColumn(transData)
      }
    },
    moveTask({ fromTaskIndex, fromColumnIndex }) {
      this.DRAG_TASK({
        fromColumn: this.board.columns[fromColumnIndex].tasks,
        toColumn: this.column.tasks,
        fromTaskIndex,
        toTaskIndex: this.taskIndex
      })
    },
    moveColumn({ fromColumnIndex }) {
      this.DRAG_COLUMN({
        fromColumnIndex,
        toColumnIndex: this.columnIndex
      })
    }
  }
}
