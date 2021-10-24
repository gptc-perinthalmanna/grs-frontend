import axios from "axios"
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
  createdAt: string
  updatedAt: string
}

type Login = {
  access_token: string;
  token_type: string;
}

export async function login(form:FormData) {
  const {data: {access_token}} = await axios.post<Login>('/token', form)
    localStorage.setItem('token', access_token)
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
  const token = localStorage.getItem("token")
  return token ? jwt_decode<User>(token) : null
}
