import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',   
    headers: {
        Authorization: 'Client-ID ebjFDGf7uhw8tnhe4-6BQH6uxV5lXBKS8kb5T08w9TU'
    }
})