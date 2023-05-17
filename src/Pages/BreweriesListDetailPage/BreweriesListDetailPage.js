import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";

export default function BreweriesListDetailPage() {

  const location = useLocation();
  const {brewery} = location.state
  //extract the id url param using the useParams hoook
const {id} = useParams();
//contruct a url for feting game details
// const url = `https://api.openbrewerydb.org/v1/breweries?by_state=california/${id}`;
// console.log(url)

// const [brew, setBrew] = useState(null)

// const fetchBrew = async () => {
//   try {
//     const response = await fetch(url);
//     const brewData = await response.json();
//     console.log(brewData)
//     setBrew(brewData)
//   } catch (error) {

//   }
// }
//useEffect hook to invoke our fetch function once for component to load
// useEffect(() => {
//   fetchBrew();
// }, [])



  return (
    <div>
      <h2>{brewery.name}</h2>
      <h2>Brewery Type: {brewery.brewery_type}</h2>
      <h2> Location: {brewery.city}</h2>
      <h2> Website: {brewery.website_url}</h2>
    </div>
  )
}
