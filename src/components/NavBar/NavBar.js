

import {Link} from 'react-router-dom'

export default function NavBar({user}) {
  return (
    <nav>
      <Link to='/games'>All Games</Link>

      <Link to='/'>Games</Link>

       <h5>Welcome, {user}</h5>
    </nav>
  )
}
