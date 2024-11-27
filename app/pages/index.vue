<script setup lang="ts">
</script>

<template>
  <div>
    <h1>試作Vueアプリケーション</h1>
    <h2>使用ツール</h2>
    <ul>
      <li>Vue3</li>
      <li>Nuxt3</li>
    </ul>
    <h2>参考サイト</h2>
    <NuxtLink to="https://ja.vuejs.org/examples/#hello-world" target="_blank" rel="noopener">
      Vue公式サンプル集
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
a {
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  border: 2px solid royalblue;

  &:hover {
    background-color: royalblue;
    color: white;
    font-weight: bold;
  }
}
</style>