<template>
  <div class="w-[15%] bg-gray-400 border-gray-500 border-l border-r border-t fixed h-full float-left">
    <ul>
      <li class="w-full">
      
      </li>
    </ul>
  </div>
  <div class="row-2 relative">
    <div class="float-right w-[85%] border border-y border-r">
      <Axis/>
    </div>
    <div class="scroll-auto relative ml-[15%]">
      <CanvasBlock/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Axis from '../widgets/Axis.vue';
import ListItem from '../widgets/ListItem.vue'
import CanvasBlock from '../widgets/CanvasBlock.vue';
</script>