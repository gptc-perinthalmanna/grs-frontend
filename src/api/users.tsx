import axios from "axios"
import jwt_decode from "jwt-decode"
// axios.defaults.baseURL = "https://newgrs.deta.dev"
axios.defaults.baseURL = 'http://localhost:8001';
if (typeof window !== "undefined") {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`
}

export type BasicUser = {
  key: string
  username: string
  first_name: string
  last_name: string
  avatar: string
  designation: string
  type: string
  gender: string
}

export type User = {
  key: string
  username: string
  email: string
  disabled: boolean
  first_name: string
  last_name: string
  contact_number: number
  type: string
  address: string
  state: string
  pin: number
  gender: string
  avatar: string
  designation: string
  createdAt: string
  updatedAt: string
}

type Login = {
  access_token: string
  token_type: string
}

export async function login(form: FormData) {
  const {
    data: { access_token },
  } = await axios.post<Login>("/token", form)

  if (typeof window !== "undefined") {
    localStorage.setItem("token", access_token)
  }
  return access_token
}

export async function getUserFromId(userid: string) {
  try {
    const { data } = await axios.get<BasicUser>(`/users/user/${userid}/`)
    return data
  } catch (error) {
    console.log(
      "%c Requested User not found in server 🤡 ",
      "background: #FF0075; color: #EEEEEE"
    )
    return false
  }
}

export function getCurrentUser() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token")
    return token ? jwt_decode<User>(token) : null
  }
  return null
}

export function logout() {
  window.location.href = "/login"
  if (typeof window !== "undefined") {
    localStorage.removeItem("token")
  }
}

export async function register(form) {
  console.log(form)
  return await axios.post("/users/new/", form)
}
