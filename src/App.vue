<template>
  <div class="fixed h-full w-full bg-gray-500">
    <Top class="border border-gray-500 text-[10px]">
      <TopItem @mouseenter="fileMenuIsDisplay = true" @mouseleave="fileMenuIsDisplay = false">File </TopItem>
      <TopItem>Edit</TopItem>
      <TopItem>Options</TopItem>
      <TopItem>Help</TopItem>
      <div v-if="fileMenuIsDisplay">
        <TopItemChild :x="0" :y="20" @mouseenter="fileMenuIsDisplay=true" @mouseleave="fileMenuIsDisplay=false" v-if="fileMenuIsDisplay">
          <TopItemChildItem @click="clickNew">New</TopItemChildItem>
          <TopItemChildItem>Open</TopItemChildItem>
        </TopItemChild>
      </div>
    </Top>
    
    <router-view></router-view>
  </div>
  <dialog class="border border-3 border-gray-500 w-[600px] h-[400px] self-center" id="new">
    <div>
      <div>Name: <input/></div>
      <div>Width: <input/></div>
      <div>Height: <input/></div>
      <div>Path: <input/><button>Choose</button></div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import Top from './widgets/Top.vue'
import TopItem from './widgets/TopItem.vue'
import { ref } from 'vue';
import TopItemChild from './widgets/TopItemChild.vue';
import TopItemChildItem from './widgets/TopItemChildItem.vue';
import { newProject } from './apis/new';

const fileMenuIsDisplay = ref(false)

function clickNew() {
      console.log('www');
      
      document.querySelector('#new')?.setAttribute('open', '')
}

</script>