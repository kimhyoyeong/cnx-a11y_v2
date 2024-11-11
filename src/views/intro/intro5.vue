<template>
  <section>
    <ul>
      <li v-for="(term, key) in glossary" :key="key">
        <strong>{{ key }}</strong>
        {{ term.definition }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { glossary } from "@/data/glossary.js";
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  li {
    padding: 20px;
    &:nth-child(odd) {
      background: #f5f5f5;
    }
  }
}
</style>
