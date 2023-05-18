
import './BreweryCard.css'
import { Link } from 'react-router-dom'

export default function BreweryCard({brewery}) {

  let ranNum = Math.floor(Math.random() * 100);
  let ranPic = `https://picsum.photos/200/${ranNum}`

  return (
    <div className='brew-card'>
      <>
      <Link to={`/brewery/${brewery.id}`} state={{brewery: brewery}}>

      <h1 className='brew-list'>{brewery.name} </h1>
      <img src={ranPic} alt='Random Pic' className='brew-img' />
      </Link>
      </>
    </div>
  )
}
