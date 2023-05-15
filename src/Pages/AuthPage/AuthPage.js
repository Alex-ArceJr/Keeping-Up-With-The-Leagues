import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"
import './AuthPage.css'

export default function AuthPage({setUser}) {
const [userStatus, setUserStatus] = useState(true)

  return (
    <main>
      {userStatus ?
      <div>
        <LoginForm setUser={setUser} />
        <button className="signBtn" onClick={() => setUserStatus(!userStatus)}>Sign Up</button>
      </div>
      :
      <div>
        <SignUpForm setUser={setUser} />
        <button className="logBtn" onClick={() => setUserStatus(!userStatus)}>Log In</button>
      </div>
      }
    </main>
  )
}
