

import { useEffect, useState } from "react";
import OregonBreweryCard from "../../components/OregonBreweryCard/OregonBreweryCard.js";


export default function OregonBreweriesList() {

  const [oregonBrews, setOregonBrews] = useState([]);

  const fetchOregonBrews = async() => {
    try {
        const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_state=oregon');
        const BrewData = await response.json();
        console.log(BrewData)
        setOregonBrews(BrewData)

    } catch(error){

    }
  };

  useEffect(() => {
    fetchOregonBrews();
  }, [])


  return (
    <div className="games-list">
      {oregonBrews.map(oregonBrew => {
        return <OregonBreweryCard  key={oregonBrew.name}  oregonBrew={oregonBrew}  />
      }) }
    </div>
  )
}
