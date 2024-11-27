<script setup lang="ts">

interface Props {
  data: {
    name: string;
    power: number;
  }[];
  columns: string[];
  filterKey: string;
}

const {data, columns, filterKey} = defineProps<Props>();

const filteredData = data.filter((row) => {
  if(filterKey) {
    return (
      row.name.includes(filterKey) ||
      row.power.toString().includes(filterKey)
    );
  }
  return true;
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column">
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, idx) in filteredData" :key="idx">
        <td>{{ row.name }}</td>
        <td>{{ row.power }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
td,
th {
  border: 1px solid green;
}
</style>