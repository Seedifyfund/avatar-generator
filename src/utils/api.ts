
import axios from "axios"

// Axios instance with a fixed baseURL
const api = axios.create({
    baseURL: 'http://localhost:8000/api'
})

export default api