<script setup lang="ts">
useHead({
  title: "conditionals-and-loops",
});

const show = ref(true);
const list = ref([1, 2, 3]);
</script>

<template>
  <section>
    <button @click="show = !show">{{ show ? "非表示" : "表示" }}</button>
    <button @click="list.push(list.length + 1)">数字を追加</button>
    <button @click="list.pop()">数字を削除</button>
    <button @click="list.reverse()">リストを反転</button>
  </section>
  <section>
    <ul v-if="show && list.length">
      <li v-for="item of list">
        {{ item }}
      </li>
    </ul>
    <p v-else-if="!show">非表示です。</p>
    <p v-else>リストにアイテムがありません。</p>
  </section>
</template>

<style lang="scss" scoped>
button {
  display: inline-block;
  margin-right: 0.5em;
}
</style>