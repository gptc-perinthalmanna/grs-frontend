import React from "react"
import DashboardPage from "./dashboard"
import LoginPage from "./login"
import { getCurrentUser } from "../api/users"

function Home() {
  const user = getCurrentUser()
  return user ? <DashboardPage /> : <LoginPage />
}

export default Home
