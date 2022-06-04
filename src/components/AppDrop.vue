<template>
  <div draggable="true" @dragover.prevent @dragenter.prevent @drop="onDrop">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    onDrop(event) {
      const transData = JSON.parse(event.dataTransfer.getData('payload'))
      this.$emit('dropDown', transData)
    }
  }
}
</script>
