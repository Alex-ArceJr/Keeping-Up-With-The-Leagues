
import './BreweryCard.css'
import { Link } from 'react-router-dom'

export default function BreweryCard({brewery}) {

  return (
    <div className='brew-card'>
      <>
      <Link to={`/brewery/${brewery.id}`} state={{brewery: brewery}}>
      <h1 className='brew-list'>{brewery.name} </h1>
      </Link>
      </>
    </div>
  )
}
