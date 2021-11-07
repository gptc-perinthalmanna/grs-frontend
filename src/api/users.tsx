import axios from "./http"
import jwt_decode from "jwt-decode"

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
  force_password_change: string
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

  // Implement Cache
  let user: BasicUser = null
  let _usersCache = []
  if (typeof window !== "undefined") {
    _usersCache = JSON.parse(localStorage.getItem("users")) as BasicUser[]
    for (const cachedUser of _usersCache){
      if (cachedUser.key === userid) {
        return cachedUser
      }
    }
  }

  try {
    const { data } = await axios.get<BasicUser>(`/users/user/${userid}/`)
    if (typeof window !== "undefined") {
      if (!_usersCache) _usersCache = [data]
      localStorage.setItem("users", JSON.stringify(_usersCache))
    }
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
    if (token) {
      try {
        return token ? jwt_decode<User>(token) : null
      } catch (error) {
        return null
      }}
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
  return await axios.post("/users/new/", form)
}

export async function register_custom(form) {
  return await axios.post("/custom/register/", form)
}

export async function change_password(form: {
  username: string
  password: string
  new_password: string
  repeat_password: string
}) {
  return await axios.put("/users/me/change-password/", form)
}
