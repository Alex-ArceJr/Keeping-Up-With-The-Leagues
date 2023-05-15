import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import { useState } from "react"


export default function AuthPage({setUser}) {
const [userStatus, setUserStatus] = useState(true)

  return (
    <main>
      {userStatus ?
      <div>
        <LoginForm setUser={setUser} />
        <button onClick={() => setUserStatus(!userStatus)}>Sign Up</button>
      </div>
      :
      <div>
        <SignUpForm setUser={setUser} />
        <button onClick={() => setUserStatus(!userStatus)}>Log In</button>
      </div>
      }
    </main>
  )
}
