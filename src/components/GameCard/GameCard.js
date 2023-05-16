
import './GameCard.css'
import { Link } from 'react-router-dom'

export default function GameCard({game}) {
  return (
    <div>
      <>
      <Link to={`/games/${game.title}`}>
      <img src={game.thumbnail}  alt={game.title}/>
      </Link>
      </>
    </div>
  )
}
