import * as React from "react"
import DashboardPage from "./dashboard"
import { getCurrentUser } from "../api/users"
import LoginPage from "./login"

function Home() {
  const user = getCurrentUser()
  return user ? <DashboardPage /> : <LoginPage />
}
export default Home