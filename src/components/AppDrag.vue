<template>
  <div
    draggable="true"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="onDrag"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    transData: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDrag(event) {
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.setData('payload', JSON.stringify(this.transData))
    }
  }
}
</script>
