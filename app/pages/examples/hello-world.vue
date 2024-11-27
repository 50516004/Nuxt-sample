<script setup lang="ts">
useHead({
  title: "Hello, World",
});

const message = ref('Hello World!');
</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
}
</style>