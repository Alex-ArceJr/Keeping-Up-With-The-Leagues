import './NavBar.css'

import {Link} from 'react-router-dom'

export default function NavBar({user, setUser}) {


  function handleLogOut() {
    setUser(null)
  }

  return (
    <nav className='topBar'>
      <Link to='/brewery'>
        <button className='nav-button'>All Breweries</button>
      </Link>
      <Link to='/'>
        <button className='nav-button'>Home</button>
      </Link>

       <span>Welcome, {user.name}!</span>
       <Link to='' onClick={handleLogOut}>
        <button className='nav-button'>Log Out</button>
       </Link>
    </nav>
  )
}
