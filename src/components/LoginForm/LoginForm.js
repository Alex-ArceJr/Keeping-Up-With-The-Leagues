
import './LoginForm.css'

import { useState } from "react"

export default function LoginPage({setUser}) {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (evt) => {
    setNewUser({ ...newUser, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUser(newUser)
  }

  return (
    <div>

      <h2>Sign In</h2>
      <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <label >Name</label>
        <input
        type="text"
        name="name"
        required
        value={newUser.name}
        onChange={handleChange}
        />
        <label>Email</label>
        <input
        value={newUser.email}
        onChange={handleChange}
        type='text'
        name="email"
        required
        />
        <label>Password</label>
        <input
        value={newUser.password}
        onChange={handleChange}
        type='password'
        name="password"
        required
        />
        <button type="submit"> Log In</button>
      </form>
      </div>
    </div>
  )
}
