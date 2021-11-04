import * as React from "react"
import DashboardPage from "./dashboard"
import { getCurrentUser } from "../api/users"
import LoginPage from "./login"
import PasswordChangePage from "./register/password-change"

function Home() {
  const user = getCurrentUser()
  if (user?.force_password_change){
    return <PasswordChangePage />
  } 
  return user ? <DashboardPage /> : <LoginPage />
}
export default Home