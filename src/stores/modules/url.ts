import { defineStore } from "pinia"
import { ref } from 'vue'

export const UrlStore = defineStore('base-url',() => {
    const baseUrl = 'http://localhost:5173'

    return {
        baseUrl
    }
})