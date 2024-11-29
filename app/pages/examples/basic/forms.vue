<script setup lang="ts">
useHead({
  title: "form-bindings",
});

const text = ref('Edit me');

const checked = ref(true);
const multiChecked = ref(["A"]);

const picked = ref('はい');

const selected = ref('A');
const multiSelected = ref(['A']);

</script>

<template>
  <section>
    <h2>テキスト</h2>
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
  </section>
  <section>
    <h2>チェックボックス</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">完了: {{ checked }}</label>
  </section>
  <section>
    <h2>マルチチェックボックス</h2>
    <input type="checkbox" id="A" value="A" v-model="multiChecked" />
    <label for="A">A</label>
    <input type="checkbox" id="B" value="B" v-model="multiChecked" />
    <label for="B">B</label>
    <input type="checkbox" id="C" value="C" v-model="multiChecked" />
    <label for="C">C</label>
    <p>完了: {{ multiChecked }}</p>
  </section>
  <section>
    <h2>ラジオボタン</h2>
    <input type="radio" id="yes" value="はい" v-model="picked">
    <label for="yes">はい</label>
    <input type="radio" id="no" value="いいえ" v-model="picked">
    <label for="no">いいえ</label>
    <p>回答: {{ picked }}</p>
  </section>
  <section>
    <h2>セレクト</h2>
    <select v-model="selected" class="wide">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>選択： {{ selected }}</p>
  </section>
  <section>
    <h2>マルチセレクト</h2>
    <select multiple v-model="multiSelected" class="wide">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>選択： {{ multiSelected }}</p>
  </section>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 1em;
  background-color: royalblue;
  color: white;
  margin: 1em 0;
  padding: 0.3em;
}
.wide {
  width:100px
}
</style>