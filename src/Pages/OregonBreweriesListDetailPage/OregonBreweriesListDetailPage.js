

import { useLocation } from "react-router-dom";
import {useState} from 'react'
import Heart  from "react-animated-heart";

export default function OregonBreweriesDetailList({setLikes, likes}) {

const location = useLocation();
const {oregonBrew} = location.state

 const [likeCount, setLikeCount] = useState(0);
  const [isClick, setClick] = useState(false)



const handleLikeClick = (evt) => {
  if(likes.indexOf (oregonBrew.name) !== -1) {
    setLikes([])
    setLikeCount(likeCount )
  } else {
    if(likeCount < 1) {
    setLikeCount(likeCount + 1)
    setLikes(...likes, oregonBrew.name)
    }
  }

}

const handleClick = (evt) => {
  if(!isClick)
  setClick(true)
}


  return (
    <>
        <div className="detail-page">
      <h2>{oregonBrew.name}</h2>
      <h2>Brewery Type: {oregonBrew.brewery_type}</h2>
      <h2> Location: {oregonBrew.city}</h2>
      <h2> Website: <a href={oregonBrew.website_url}> Redirect</a> </h2>
      <Heart onClick={() => {handleLikeClick() ; handleClick ()}} isClick={isClick} />

      <p>{likeCount}</p>
      </div>
    </>
  )
}
