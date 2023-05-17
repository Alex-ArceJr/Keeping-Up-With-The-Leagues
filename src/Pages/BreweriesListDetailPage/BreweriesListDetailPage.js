import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";

export default function BreweriesListDetailPage() {


  const [likeCount, setLikeCount] = useState(0);

  const location = useLocation();
  const {brewery} = location.state
  //extract the id url param using the useParams hoook
const {id} = useParams();


const handleClick = (evt) => {
  setLikeCount(likeCount + 1)
}

  return (
    <div className="detail-page">
      <h2>{brewery.name}</h2>
      <h2>Brewery Type: {brewery.brewery_type}</h2>
      <h2> Location: {brewery.city}</h2>
      <h2> Website: {brewery.website_url}</h2>
      <button onClick={handleClick}>Like</button>
      <p>{likeCount}</p>
    </div>
  )
}
