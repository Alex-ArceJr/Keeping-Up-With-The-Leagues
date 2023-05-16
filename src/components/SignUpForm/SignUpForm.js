
import { useState } from "react"

import './SignUpForm.css'

export default function SignUpForm({setUser}) {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })


  const handleChange = (evt) => {
    setNewUser({...newUser, [evt.target.name] : evt.target.value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setUser(newUser)
  }



  return (
    <div>
      <h2>Sign Up</h2>
      <div className="form-container">
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>Name</label>
          <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          required
          />
          <label>Email</label>
          <input
          type="text"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          required
          />
          <label >Password</label>
          <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          required
          />
          <label >Confirm</label>
          <input
          type="password"
          name="confirm"
          value={newUser.confirm}
          onChange={handleChange}
          />
          <button type="submit">Sign Up</button>

        </form>
      </div>
    </div>
  )
}
