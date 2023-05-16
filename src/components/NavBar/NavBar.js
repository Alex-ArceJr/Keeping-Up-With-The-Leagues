import './NavBar.css'

import {Link} from 'react-router-dom'

export default function NavBar({user}) {
  return (
    <nav className='topBar'>
      <Link to='/games'>All Games</Link>
      <Link to='/'>Home</Link>

       <span>Welcome, {user.name}</span>
    </nav>
  )
}
