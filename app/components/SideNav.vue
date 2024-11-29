<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
function isActive(path: string) {
  return route.path === path;
}

const links = [
  {
    to: "/examples/basic/handling",
    label: "v-on",
  }, {
    to: "/examples/basic/attribute",
    label: "v-bind",
  }, {
    to: "/examples/basic/conditionals",
    label: "v-if, v-for",
  }, {
    to: "/examples/basic/forms",
    label: "v-model",
  }, {
    to: "/examples/basic/component",
    label: "コンポーネント",
  }, {
    to: "/examples/practical/markdown",
    label: "マークダウン",
  }, {
    to: "/examples/practical/fetching",
    label: "データフェッチ",
  }, {
    to: "/examples/practical/grid",
    label: "テーブル",
  }
];
</script>

<template>
  <div class="nav">
    <NuxtLink v-for="link in links" :to="link.to" :class="{ active: isActive(link.to) }">
      {{ link.label }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background: linear-gradient(to bottom, blueviolet, aqua);
  padding-top: 0.5em;
  gap: 1em;
}

a {
  text-decoration: none;
  border-radius: 0.5em;
  height: 3em;
  display: flex;
  align-items: center;
  padding-left: 1em;
  background-color: white;
  border-radius: 1em 0em 0em 1em;
  transition: transform 0.3s ease;
  position: relative;
  left: 1em;

  &:hover {
    transform: translateX(1em);
  }

  &.active {
    background-color: lightcyan;
    color: royalblue;
    font-weight: bold;
  }
}

</style>