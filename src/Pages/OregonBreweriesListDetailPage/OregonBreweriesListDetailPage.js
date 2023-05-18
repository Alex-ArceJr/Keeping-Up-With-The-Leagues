
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom";


export default function OregonBreweriesDetailList() {

const location = useLocation();
const {oregonBrew} = location.state


  return (
    <>
        <div className="detail-page">
      <h2>{oregonBrew.name}</h2>
      <h2>Brewery Type: {oregonBrew.brewery_type}</h2>
      <h2> Location: {oregonBrew.city}</h2>
      <h2> Website: <a href={oregonBrew.website_url}> Redirect</a> </h2>
      </div>
    </>
  )
}
