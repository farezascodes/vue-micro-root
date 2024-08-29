import axios from "axios"

const service = axios.create({
    baseURL: import.meta.env.VITE_API_URI, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
  })

export default service