import { defineStore } from 'pinia'
import { ref } from 'vue'

export const articleStore = defineStore('articles', () => {
  const articles = ref(['TOMATE', 'ORANGE', 'MANGUES'])

  function addArt(name:string) {
    articles.value.push(name)
  }

  return { articles, addArt }
})
