import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";
import  Heart from 'react-animated-heart'

export default function BreweriesListDetailPage({setLikes, likes}) {


  const [likeCount, setLikeCount] = useState(0);
  const [isClick, setClick] = useState(false)

  const location = useLocation();
  const {brewery} = location.state
  //extract the id url param using the useParams hoook
const {id} = useParams();


const handleLikeClick = (evt) => {
  if(likes.indexOf (brewery.name) !== -1) {
    setLikes([])
    setLikeCount(likeCount )
  } else {
    if(likeCount < 1){
    setLikeCount(likeCount + 1)
    setLikes(...likes, brewery.name)
  }
}
}

const handleClick = (evt) => {
  if(!isClick)
  setClick(true)
}

  return (
    <div className="detail-page">
      <h2>{brewery.name}</h2>
      <h2>Brewery Type: {brewery.brewery_type}</h2>
      <h2> Location: {brewery.city}</h2>
      <h2> Website: <a href={brewery.website_url}> Redirect</a> </h2>
      <Heart onClick={() => {handleLikeClick() ; handleClick ()}} isClick={isClick} />

      <p>{likeCount}</p>
    </div>
  )
}
