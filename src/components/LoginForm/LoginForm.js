


import { useState } from "react"

export default function LoginPage({setUser}) {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (evt) => {
    setNewUser(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUser(newUser)
  }

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label >Name</label>
        <input
        type="text"
        name="name"
        required
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
    </>
  )
}
