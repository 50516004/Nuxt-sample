<script setup lang="ts">
useHead({
  title: "grid",
});

const searchQuery = ref('');
const gridColumns = ['name', 'power'];
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
];

</script>

<template>
  <div>
    Search
    <input type="text" v-model="searchQuery" />
  </div>
  <Grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery" />
</template>

<style lang="scss" scoped></style>