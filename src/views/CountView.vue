<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function increment() {
    count.value++;
}


</script>

<template>

    <h1>value is : {{ count }}</h1>

    <button @click="increment()">increment value</button>

    <span>
        <RouterLink to="/count/subcount1"> subcount1</RouterLink>
        <RouterLink to="/count/subcount2"> subcount2</RouterLink>
    </span>

    <RouterView></RouterView>

</template>

<style></style>