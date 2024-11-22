<script setup lang="ts">
import { articleStore } from '@/stores/articles';


const listArticles=articleStore();


</script>

<template>

    <h1>subcount 1</h1>

    <h1> liste des article du store </h1>
    <ul>
        <li v-for="item in listArticles.articles">{{ item }}</li>
    </ul>

</template>
