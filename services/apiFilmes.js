import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
       language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmFkMmNkMWYzZWM0NzQ1M2ZmNjQ0NGYxYjZhNGRkOCIsInN1YiI6IjY0MzQ4YzhlZDEzMmQ2MDA3N2VkYjgwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZSh56LmhmgcjclenM7ninQHsPjR7r5CZ1c6hJMhQCT4'
    }
})

export default apiFilmes