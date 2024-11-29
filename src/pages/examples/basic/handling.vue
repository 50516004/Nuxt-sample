<script setup lang="ts">

useHead({title: "イベント"});

const hello = ref("Hello World!");

function reverse() {
  hello.value = hello.value
    .split('')
    .reverse()
    .join("");
}

function append() {
  hello.value += "!";
}

function notify() {
  alert('リンクは無効化されました。')
}

</script>

<template>
  <h1>{{ hello }}</h1>
  <section>
    <button @click="reverse">
      反転
    </button>
    <button @click="append">
      追加
    </button>
    <a href="https://vuejs.org" @click.prevent="notify">
      デフォルト動作を無効化されたリンク
    </a>
  </section>
</template>

<style lang="scss" scoped>
button,
a {
  display: block;
  margin-bottom: 1em;
}
</style>