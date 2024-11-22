<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TestFist from './components/TestFist.vue'
import { ref } from 'vue';

const message = ref("event click 0");

function getCountEvent(count: any) {
  message.value = "get event of count " + count;

}



</script>

<template>



  <RouterLink  to="/count">count</RouterLink> 
  <RouterLink  class="ms-3" to="/home">home</RouterLink>

  <RouterView></RouterView>





  <!--
       <TestFist title="AM the first props" @increment="getCountEvent">
    <template #fist>
      <p>first slote</p>
    </template>
<template #seconde>
      <p>second slote</p>
    </template>
</TestFist>

-->






</template>
