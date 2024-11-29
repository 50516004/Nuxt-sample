<script setup lang="ts">

interface Props {
  todo: {
    text: string;
  };
}

const props = defineProps<Props>();
</script>

<template>
  <li>{{ todo.text }}</li>
</template>