<script setup lang="ts">
import { api } from '@/stores/api';
import axios from 'axios';
import { onMounted, ref } from 'vue';


const articles = ref<any>([]);

const Articlemodel = ref({
    id: 0,
    titre: '',
    description: '',
})

const isUpdating = ref<any>(false);

function getAllArticles() {
    axios.get(api + "articles/").then(
        res => {
            console.log("aricle", res);
            articles.value = res.data;
        },
        err => {
            console.log("error", err);
        }
    )
}

function addArticles() {
    axios.post(api + "articles/", Articlemodel.value).then(
        res => {
            console.log("aricle", res);
            getAllArticles();
            Articlemodel.value.titre = "";
            Articlemodel.value.description = "";
        },
        err => {
            console.log("error", err);
        }
    )
}

function setUpdate(item: any) {
    Articlemodel.value = item;
    isUpdating.value = true;
}

function UpdateArticles() {
    axios.put(`${api}articles/${Articlemodel.value.id}/`, Articlemodel.value).then(
        res => {
            console.log("aricle", res);
            getAllArticles();
            Articlemodel.value.titre = "";
            Articlemodel.value.description = "";
            isUpdating.value = false;
        },
        err => {
            console.log("error", err);
        }
    )
}

function deleteArticles(id: any) {
    axios.delete(`${api}articles/${id}/`).then(
        res => {
            console.log("aricle", res);
            getAllArticles();

        },
        err => {
            console.log("error", err);
        }
    )
}




onMounted(() => {
    getAllArticles();
})


</script>

<template>

    <h1 class=" text text-center"> CRUD OF ARTICLES</h1>

    <h1 class=" text text-center"> LIST OF ARTICLES</h1>

    <div class="d-flex justify-content-center">

        <div class="card p-5" style="width: 50rem;">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titre</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index in articles" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.titre }}</td>
                        <td>{{ item.description }}</td>
                        <td>
                            <span class="btn btn-warning" role="button" @click="setUpdate(item)">✏️</span>
                            <span class="btn btn-danger" role="button" @click="deleteArticles(item.id)">🗑️</span>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>

    <div class="d-flex justify-content-center">

        <div v-if="isUpdating == false" class="card p-5" style="width: 50rem;">
            <form @submit.prevent="addArticles()">
                <input type="text" v-model="Articlemodel.titre">
                <input type="text" v-model="Articlemodel.description">
                <button> save </button>

            </form>
        </div>

        <div v-if="isUpdating == true" class="card p-5" style="width: 50rem;">
            <form @submit.prevent="UpdateArticles()">
                <input type="text" v-model="Articlemodel.titre">
                <input type="text" v-model="Articlemodel.description">

                <button> update</button>
            </form>
        </div>

    </div>


</template>

<style></style>