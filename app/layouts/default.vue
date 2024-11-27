<script setup lang="ts">
import SideNav from '~/components/SideNav.vue';

</script>

<template>
  <div class="page">
    <header>
      <NuxtLink to="/">
        Sample Apps
      </NuxtLink>
    </header>
    <main>
      <div class="left">
        <SideNav />
      </div>
      <div class="right">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  background: linear-gradient(to right, #444, #999);
  color: white;
  padding: 0.2em;
  font-size: 1.5em;
  flex-shrink: 0;

  a {
    display: inline-block;
    padding: 0.2em 1em;
    border-radius: 0.5em;

    &:hover {
      transform: scale(0.90);
      background-color: transparent;
    }
  }
}

main {
  flex-grow: 1;
  display: flex;
  overflow: hidden;
}

.left {
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 0;
}

.right {
  background-color: rgb(255, 255, 255, 1);
  flex-grow: 1;
  overflow-y: auto;

  box-shadow: -5px 0px 20px gray;
  z-index: 10;

  padding: 3em;
}
</style>