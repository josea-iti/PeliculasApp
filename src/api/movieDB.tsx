import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '6dc0cf51e12ae65541f05c128a09839e',
        language: 'es-ES'
    }
})

export default movieDB;