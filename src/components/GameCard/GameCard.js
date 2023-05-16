
import './GameCard.css'


export default function GameCard({game}) {
  return (
    <div>
      <img src={game.thumbnail}  alt={game.title}/>
    </div>
  )
}
