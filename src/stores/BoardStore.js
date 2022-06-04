import { defineStore } from 'pinia'
import defaultBoard from '@/default-board'
import { uuid } from '@/utils'

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export const useBoardStore = defineStore('BoardStore', {
  state: () => {
    return {
      board
    }
  },
  getters: {
    get(state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    }
  },
  actions: {
    CREATE_TASK(tasks, name) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    CREATE_COLUMN(name) {
      this.board.columns.push({
        name,
        tasks: []
      })
    },
    DRAG_TASK(fromColumn, toColumn, fromTaskIndex, toTaskIndex) {
      const task = fromColumn.splice(fromTaskIndex, 1)[0]
      toColumn.splice(toTaskIndex, 0, task)
    },
    DRAG_COLUMN(fromColumnIndex, toColumnIndex) {
      const column = this.board.columns.splice(fromColumnIndex, 1)[0]
      this.board.columns.splice(toColumnIndex, 0, column)
    }
  }
})
