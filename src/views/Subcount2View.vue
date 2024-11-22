<script setup lang="ts">

import { articleStore } from '@/stores/articles';
import { ref } from 'vue';


const articles = articleStore();
const articleName = ref("");

function addArticle() {
    articles.addArt(articleName.value);
    articleName.value = "";
}

</script>

<template>

    <h1>subcount 2</h1>
    <h1>ajout d'une nouvelle valeur dans le component</h1>

    <form @submit.prevent="addArticle">
        <input type="text" v-model="articleName">
        <button type="submit">Submit</button>
    </form>



</template>
