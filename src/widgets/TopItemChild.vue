<template>
  <div class="z-10 fixed w-20 top-6 border border-gray-500">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  x: Number,
  y: Number
})
</script>