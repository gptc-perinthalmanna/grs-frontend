import axios from "axios"
// axios.defaults.baseURL = "https://newgrs.deta.dev"
axios.defaults.baseURL = 'http://localhost:8001';
if (typeof window !== "undefined") {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`
}

type Login = {
  access_token: string
  token_type: string
}

type StatusChange = {
  prev: PostStatus
  to: PostStatus
}

export const adminRoles = ["staff"]

export enum PostPriority {
  veryLow = "veryLow",
  low = "low",
  medium = "medium",
  high = "high",
  important = "important",
}

export enum PostStatus {
  draft = "draft",
  open = "open",
  replied = "replied",
  authorResponded = "authorResponded",
  adminResponded = "adminResponded",
  closed = "closed",
  deleted = "deleted",
  hidden = "hidden",
  priorityChanged = "priorityChanged",
  solved = "solved",
}

export type Response = {
  id: number
  author: string
  content: string
  statusChange: StatusChange
  published: Date
  modified: Date
  deleted: boolean
  visible: boolean
}

export type Post = {
  key: string
  subject: string
  content: string
  priority: string
  status: PostStatus
  author: string
  authorName?: string
  published: string
  modified: string
  deleted: boolean
  visible: boolean
  responses: Response[]
}

export type PostsList = {
  posts: Post[]
  last_key: string
  count: number
}

export async function fetchToken() {
  const loginCreds = new FormData()
  loginCreds.append("username", "amjed")
  loginCreds.append("password", "string")
  console.log(
    "%c Requested Token from Backend 🤡 ",
    "background: #FF0075; color: #EEEEEE"
  )
  const {
    data: { access_token },
  } = await axios.post<Login>("/token", loginCreds)
  localStorage.setItem("token", access_token)
  return access_token
}

export async function getToken() {
  let token = localStorage.getItem("token")
  if (!token) {
    try {
      return await fetchToken()
    } catch (error) {
      console.log(error)
      return "Login Error"
    }
  }
  return token
}

export async function submitNewPost(data) {
  await getToken()
  return axios.post("/posts/new/", data)
}

export async function getPost(key: string) {
  return axios.get<Post>(`/posts/${key}/`)
}

export async function submitNewResponse(data) {
  return axios.post("/posts/response/new/", data)
}

export async function getMyPosts(key = null) {
  return axios.get<PostsList>("/posts/me/", { params: { key } })
}

export async function getAllPosts(query: {} = null, last_key: string = null) {
  return await axios.post<PostsList>("/posts/all/", { last_key, query })
}

export async function deletePost(key: string) {
  return await axios.delete(`/posts/${key}`)
}
