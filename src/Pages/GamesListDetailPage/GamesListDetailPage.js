import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function GamesListDetailPage(props) {

  //extract the id url param using the useParams hoook
const {id} = useParams();
//contruct a url for feting game details
const url = 'https://www.scorebat.com/video-api/v3/feed/?token=ODYzMjZfMTY4NDA5MTU2NV8wYTNiMzU2OTNhZDI3ODQ4ZDMxZjU0ZDY3ZmNkZDQ2M2JhZjVhMzNi/' + id;
console.log(url)

const [match, setMatch] = useState(null)

const fetchMatch = async () => {
  try {
    const response = await fetch(url);
    const matchData = await response.json();
    console.log(matchData)
    setMatch(matchData)
  } catch (error) {

  }
}
//useEffect hook to invoke our fetch function once for component to load
useEffect(() => {
  fetchMatch();
}, [])



  return (
    <div>
      <h2></h2>
    </div>
  )
}
