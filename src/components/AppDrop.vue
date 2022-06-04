<template>
  <div @dragover.prevent @dragenter.prevent @drop.stop="onDrop">
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
