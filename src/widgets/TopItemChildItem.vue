<template>
  <div class="bg-gray-400 border border-gray-400 w-full hover:bg-gray-500 text-white">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const display = ref(true)
</script>