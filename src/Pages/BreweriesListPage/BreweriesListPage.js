import { useEffect, useState } from "react"
import './BreweriesListPage.css'

import BreweryCard from "../../components/BreweryCard/BreweryCard";

export default function BreweriesListPage(props) {

  const [breweries, setBreweries] = useState([]);

  //helper function for performing AJAX
  const fetchBreweries = async() => {
    try {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_state=california');
      const breweryData = await response.json();

      setBreweries(breweryData)
    }catch (error) {

    }
  };
  useEffect(() => {
    fetchBreweries();
  }, []);




  return (

    <div className="games-list">

      {breweries.map(brewery => {
        return <BreweryCard key={brewery.name} brewery={brewery}
        />
      })}
    </div>



  )
}
