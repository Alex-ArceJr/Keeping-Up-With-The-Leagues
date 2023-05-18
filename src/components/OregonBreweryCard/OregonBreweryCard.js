

import { Link } from "react-router-dom";

export default function OregonBreweryCard({oregonBrew}) {

 let ranNum = Math.floor(Math.random() * 100);
  let ranPic = `https://picsum.photos/200/${ranNum}`



  return (
    <div className="brew-card">
      <>
      <Link to={`/oregon/${oregonBrew.id}`} state={{oregonBrew: oregonBrew}} >

      <h1 className="brew-list" > {oregonBrew.name} </h1>
      <img src={ranPic} alt='Random Pic' className='brew-img' />

      </Link>

      </>
    </div>
  )
}
