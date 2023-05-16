import { useEffect, useState } from "react"
import './GamesListPage.css'
import { Link } from "react-router-dom";
import GameCard from "../../components/GameCard/GameCard";

export default function GamesListPage(props) {

  const [games, setGames] = useState([]);

  //helper function for performing AJAX
  const fetchGames = async() => {
    try {
      const response = await fetch('https://www.scorebat.com/video-api/v3/feed/?token=ODYzMjZfMTY4NDA5MTU2NV8wYTNiMzU2OTNhZDI3ODQ4ZDMxZjU0ZDY3ZmNkZDQ2M2JhZjVhMzNi');
      const gameData = await response.json();

      setGames(gameData.response)
    }catch (error) {

    }
  };
  useEffect(() => {
    fetchGames();
  }, []);



  return (
    <div className="games-list">
      {games.map(game => {
        return <GameCard key={game.title} game={game}  />
      })}
    </div>
  )
}
