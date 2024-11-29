<script setup lang="ts">
useHead({title: "属性"});

const message = ref('Hello World!');
const isRed = ref(true);
const color = ref("green");

function appendMessage() {
  message.value += "!";
}

function toggleRed() {
  isRed.value = !isRed.value;
}

function toggleColor() {
  color.value = color.value == "green" ? "blue" : "green";
}
</script>

<template>
  <p :title="message" @click="appendMessage">
    マウスオーバーでチップが表示されます。
  </p>
  <p :class="{red:isRed}" @click="toggleRed">
    クリックで色が切り替わります。
  </p>
  <p :class="color" @click="toggleColor">
    クリックで色が切り替わります。
  </p>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
}

.red {
  color: red;
}

.green {
  color: green;
}

.blue {
  color: blue;
}
</style>