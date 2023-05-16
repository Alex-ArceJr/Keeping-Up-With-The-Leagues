import './NavBar.css'

import {Link} from 'react-router-dom'

export default function NavBar({user}) {
  return (
    <nav className='topBar'>
      <Link to='/games'>
        <button className='nav-button'>All Games</button>
      </Link>
      <Link to='/'>
        <button className='nav-button'>Home</button>
      </Link>

       <span>Welcome, {user.name}!</span>
    </nav>
  )
}
