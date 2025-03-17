<script lang="ts" setup>
  const visibility = ref(false)
</script>

<template>
  <div>
    <p v-if="visibility">Hello world</p>
    <button @click="visibility = !visibility">click me</button>
  </div>
</template>
