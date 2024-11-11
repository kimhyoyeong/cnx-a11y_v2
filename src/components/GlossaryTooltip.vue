<template>
  <span class="tooltip">
    {{ term }}<sup><q-icon size="1rem" name="info_outline" class="art-i-tooltip" /></sup>
    <q-tooltip class="text-body2" :offset="[10, 10]" max-width="320px"
      >{{ term }} {{ getDefinition(term) }}
    </q-tooltip>
  </span>
</template>

<script setup>
import { glossary } from "@/data/glossary.js";

defineProps({
  term: {
    type: String,
    required: true,
  },
});

const getDefinition = (term) => {
  return glossary[term]?.definition || "정의 없음";
};
</script>

<script>
import { defineProps } from "vue";

export default {
  name: "GlossaryTooltip",
};
</script>
