import { useEffect, useState } from "react"
import './BreweriesListPage.css'
import { Link } from "react-router-dom";
import BreweryCard from "../../components/Brewery/BreweryCard";

export default function GamesListPage(props) {

  const [breweries, setBreweries] = useState([]);

  //helper function for performing AJAX
  const fetchGames = async() => {
    try {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_state=california');
      const breweryData = await response.json();
      // console.log(breweryData)
      setBreweries(breweryData)
    }catch (error) {

    }
  };
  useEffect(() => {
    fetchGames();
  }, []);



  return (
    <div className="games-list">
      {breweries.map(brewery => {
        return <BreweryCard key={brewery.title} brewery={brewery}  />
      })}
    </div>
  )
}
