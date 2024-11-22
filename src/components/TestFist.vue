<script setup lang="ts">
import { ref } from 'vue';

const num = ref(0);
const message = ref("message init");

defineProps({
    title:{
        type:String,
        required:true,
    }
})

const emit =defineEmits(["increment"]);

function incre(){
    num.value++;
    emit("increment",num.value)

}


const fruits=ref(["orange","tomate","poivron"]);

function Addfruit(){
    fruits.value.push("pomme");
}



function Message(msg: string) {
    message.value = msg;
}




</script>

<template>
    <h1>My First component</h1>

    <p>value of props :{{ title }}</p>

    <h1>Message: {{ message }}</h1>

    <slot name="fist"></slot>

    <ul>
        <li v-for="fruit ,index in fruits" :key="index">{{ fruit }}</li>
    </ul>

    <slot name="seconde"></slot>


    <button @click="incre()">send event</button>

</template>