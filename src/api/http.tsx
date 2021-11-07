import axios from "axios"
import { navigate } from "gatsby"

if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = "https://grs-backend.gptcperinthalmanna.in"
} else {
  axios.defaults.baseURL = "http://localhost:8001"
}

if (typeof window !== "undefined") {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`
}

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500
  const authenticationError = error.response && error.response.status === 401

  if (authenticationError) {
    if(typeof window !== "undefined") {
      navigate("/not-authorised")
    }
    return Promise.reject(error)
  }

  if (!expectedError) {
    console.error("An unexpected error occurrred.")
  }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
